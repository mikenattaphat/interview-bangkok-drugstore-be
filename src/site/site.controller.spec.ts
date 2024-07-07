import { Test, TestingModule } from '@nestjs/testing';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { SearchLocationSiteDto } from './dto/search-location-site.dto';
import { ResponseApi, ResponsePaginationApi } from '../models/response-api';
import { NotFoundException } from '@nestjs/common';
import { PaginationResponse, PaginationModel, PaginationRequest } from '../models/pagination';
import { Site } from './schemas/site.schema';

const mockSiteService = {
  findNearby: jest.fn(),
  findBySiteId: jest.fn(),
};

describe('SiteController', () => {
  let controller: SiteController;
  let service: SiteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteController],
      providers: [
        {
          provide: SiteService,
          useValue: mockSiteService,
        },
      ],
    }).compile();

    controller = module.get<SiteController>(SiteController);
    service = module.get<SiteService>(SiteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findNearby', () => {
    it('should return nearby sites', async () => {
      const searchLocation: SearchLocationSiteDto = {
        site_desc: null,
        lat: 10,
        lng: 20,
        pagination: new PaginationRequest(1,10),
      };

      const mockPagination = new PaginationModel(1, 10, 1, 1);
      const mockResponse = new ResponsePaginationApi(200, [], 'Success', new PaginationResponse(mockPagination));

      jest.spyOn(service, 'findNearby').mockResolvedValue(mockResponse);

      const result = await controller.findNearby(searchLocation);

      expect(result).toEqual(mockResponse);
      expect(service.findNearby).toHaveBeenCalledWith(searchLocation);
    });
  });

  describe('findOne', () => {
    it('should return a site if found', async () => {
      const mockSite: Site = {
        site_id: '123',
        site_desc: 'Test description',
        site_address: 'Test address',
        site_tel: '123-456-7890',
        location: {
          type: 'Point',
          coordinates: [12.9715987, 77.5945627],
        },
        site_open_time: '08:00:00',
        site_close_time: '20:00:00',
      };

      const mockResponse = new ResponseApi(200, mockSite, 'Success');

      jest.spyOn(service, 'findBySiteId').mockResolvedValue(mockResponse);

      const result = await controller.findOne('123');

      expect(result).toEqual(mockResponse);
      expect(service.findBySiteId).toHaveBeenCalledWith('123');
    });

    it('should throw NotFoundException if site not found', async () => {
      jest.spyOn(service, 'findBySiteId').mockRejectedValue(new NotFoundException('id not found'));

      await expect(controller.findOne('1234')).rejects.toThrow(NotFoundException);
    });
  });
});

