import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Site, SiteDocument } from './schemas/site.schema';
import { SearchLocationSiteDto, SearchLocationSiteDtoResponse } from './dto/search-location-site.dto';
import { PaginationUtil } from '../utils/pagination-util';
import { ResponseApi, ResponsePaginationApi } from '../models/response-api';
import * as moment from 'moment-timezone';

@Injectable()
export class SiteService {
  constructor(@InjectModel(Site.name) private siteModel: Model<SiteDocument>) {}

  async findBySiteId(siteId: string): Promise<ResponseApi<Site>> {
    const query = { site_id: siteId };
    const result = await this.siteModel.findOne(query);
    if (!result) {
      throw new NotFoundException('id not found');
    }
    return new ResponseApi(200, result, 'Success');
  }

  async findNearby(searchLocation: SearchLocationSiteDto): Promise<ResponsePaginationApi<SearchLocationSiteDtoResponse[]>> {
    const skip = PaginationUtil.skip(searchLocation.pagination);
    const totalSize = await this.findNearbyTotalSize(searchLocation)
    const totalPages = Math.ceil(totalSize / searchLocation.pagination.limit);
    const currentTimeString = this.getCurrentTimeString();
    const result = await this.siteModel.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [searchLocation.lng, searchLocation.lat] },
          distanceField: 'dist.calculated',
          maxDistance: 5000,
          spherical: true,
          key: 'location',
        },
      },
      {
        $addFields: {
          dist: { calculated: { $round: ['$dist.calculated', 0] } },
          active: this.calculateSiteActivity(currentTimeString),
        },
      },
      {
        $match: {
          ...(searchLocation.site_desc ? { site_desc: { $regex: `.*${searchLocation.site_desc}.*`, $options: 'i' } } : {}),
        },
      },
      {
        $sort: { active: -1, 'dist.calculated': 1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: searchLocation.pagination.limit,
      },
    ]);
    

    const sites = result.map(site => {
      const { __v, _id, dist, ...siteObject } = site;
      const distance = dist?.calculated ?? 0;
      return new SearchLocationSiteDtoResponse({
        ...siteObject,
        location: site.location.coordinates,
        distance,
      });
    });

    const pagination = PaginationUtil.Response(searchLocation.pagination.page, searchLocation.pagination.limit, totalPages, totalSize);
    return new ResponsePaginationApi(200, sites, 'Success', pagination);
  }

  private async findNearbyTotalSize(searchLocation: SearchLocationSiteDto) {
    return await this.siteModel.countDocuments({
      location: {
        $geoWithin: {
          $centerSphere: [[searchLocation.lng, searchLocation.lat], 5000 / 6378100], // radius 5000 meter / world radius 6378100
        },
      },
    });
  }


  private calculateSiteActivity(currentTimeString: string) {
    return {
      $cond: {
        if: {
          $and: [
            { $eq: ['$site_open_time', '00:00:00'] },
            { $eq: ['$site_close_time', '00:00:00'] },
          ],
        },
        then: true,
        else: {
          $let: {
            vars: {
              currentTime: currentTimeString,
            },
            in: {
              $cond: {
                if: { $lt: ['$site_open_time', '$site_close_time'] },
                then: {
                  $and: [
                    { $gte: ['$$currentTime', '$site_open_time'] },
                    { $lte: ['$$currentTime', '$site_close_time'] },
                  ],
                },
                else: {
                  $or: [
                    { $gte: ['$$currentTime', '$site_open_time'] },
                    { $lte: ['$$currentTime', '$site_close_time'] },
                  ],
                },
              },
            },
          },
        },
      },
    };
  }

  private getCurrentTimeString() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
}
