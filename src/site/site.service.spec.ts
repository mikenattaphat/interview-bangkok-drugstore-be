import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { SiteService } from './site.service';
import { Site } from './schemas/site.schema';
import { NotFoundException } from '@nestjs/common';
import { SearchLocationSiteDto } from './dto/search-location-site.dto';
import { Model } from 'mongoose';
import { ResponseApi, ResponsePaginationApi } from '../models/response-api';

const mockSite = {
  site_id: '123',
  name: 'Test Site',
  location: {
    type: 'Point',
    coordinates: [1.0, 2.0],
  },
  site_open_time: '09:00:00',
  site_close_time: '18:00:00',
};

const mockSiteModel = {
  findOne: jest.fn().mockResolvedValue(mockSite),
  aggregate: jest.fn().mockResolvedValue([mockSite]),
  countDocuments: jest.fn().mockResolvedValue(1),
};

describe('SiteService', () => {
  let service: SiteService;
  let model: Model<Site>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SiteService,
        {
          provide: getModelToken(Site.name),
          useValue: mockSiteModel,
        },
      ],
    }).compile();

    service = module.get<SiteService>(SiteService);
    model = module.get<Model<Site>>(getModelToken(Site.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findBySiteId', () => {
    it('should return a site if found', async () => {
      const result = await service.findBySiteId('123');
      expect(result).toEqual(new ResponseApi(200, mockSite, 'Success'));
    });

    it('should throw NotFoundException if site not found', async () => {
      jest.spyOn(model, 'findOne').mockResolvedValueOnce(null);
      await expect(service.findBySiteId('123')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findNearby', () => {

    it('should return nearby sites and serch name', async () => {
      const searchLocation: SearchLocationSiteDto = {
        site_desc: 'test',
        lat: 1.0,
        lng: 2.0,
        pagination: {
          page: 1,
          limit: 10,
        },
      };

      const result = await service.findNearby(searchLocation);

      expect(result).toBeInstanceOf(ResponsePaginationApi);
      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toMatchObject({
        location: mockSite.location.coordinates,
        distance: 0,
      });
    });

    it('should return nearby sites', async () => {
      const searchLocation: SearchLocationSiteDto = {
        site_desc: null,
        lat: 1.0,
        lng: 2.0,
        pagination: {
          page: 1,
          limit: 10,
        },
      };

      const result = await service.findNearby(searchLocation);

      expect(result).toBeInstanceOf(ResponsePaginationApi);
      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toMatchObject({
        location: mockSite.location.coordinates,
        distance: 0,
      });
    });
  });
});
