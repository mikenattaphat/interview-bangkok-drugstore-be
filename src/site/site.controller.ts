import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { SiteService } from './site.service';
import { SearchLocationSiteDto } from './dto/search-location-site.dto';

@Controller('site-api')
export class SiteController {
  constructor(private readonly siteService: SiteService) {}

  @Post("nearby-pharmacy")
  @HttpCode(200)
  findNearby(@Body() searchLocation: SearchLocationSiteDto) {
    return this.siteService.findNearby(searchLocation);
  }

  @Get('find-by-site-id/:siteId')
  findOne(@Param('siteId') siteId: string) {
    return this.siteService.findBySiteId(siteId);
  }

}
