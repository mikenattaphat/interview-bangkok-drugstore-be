import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { SearchLocationSiteDto, SearchLocationSiteDtoResponse } from './search-location-site.dto';

describe('SearchLocationSiteDto', () => {
  it('should validate SearchLocationSiteDto correctly', async () => {
    const dto = {
      lat: 13.7563,
      lng: 100.5018,
      pagination: {
        page: 1,
        limit: 10,
      },
    };

    const searchLocationSiteDto = plainToInstance(SearchLocationSiteDto, dto);
    const errors = await validate(searchLocationSiteDto);

    expect(errors.length).toBe(0);
  });

  it('should fail validation if required fields are missing', async () => {
    const dto = {
      lng: 100.5018,
      pagination: {
        page: 1,
        limit: 10,
      },
    };

    const searchLocationSiteDto = plainToInstance(SearchLocationSiteDto, dto);
    const errors = await validate(searchLocationSiteDto);

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('lat');
  });

  it('should fail validation if nested pagination object is invalid', async () => {
    const dto = {
      lat: 13.7563,
      lng: 100.5018,
      pagination: {
        page: 'invalid',
        limit: 'invalid',
      },
    };

    const searchLocationSiteDto = plainToInstance(SearchLocationSiteDto, dto);
    const errors = await validate(searchLocationSiteDto);

    expect(errors.length).toBeGreaterThan(0);
    expect(errors[0].property).toBe('pagination');
  });
});

describe('SearchLocationSiteDtoResponse', () => {
  it('should transform and expose properties correctly', () => {
    const partial = {
      site_id: '123',
      site_desc: 'Test Description',
      site_address: 'Test Address',
      site_tel: '123456789',
      site_close_time: '18:00:00',
      site_open_time: '09:00:00',
      active: true,
      distance: 100,
      location: [13.7563, 100.5018],
    };

    const response = new SearchLocationSiteDtoResponse(partial);
    const transformedResponse = plainToInstance(SearchLocationSiteDtoResponse, response);

    expect(transformedResponse.site_id).toBe('123');
    expect(transformedResponse.site_desc).toBe('Test Description');
    expect(transformedResponse.site_address).toBe('Test Address');
    expect(transformedResponse.site_tel).toBe('123456789');
    expect(transformedResponse.site_close_time).toBe('18:00:00');
    expect(transformedResponse.site_open_time).toBe('09:00:00');
    expect(transformedResponse.active).toBe(true);
    expect(transformedResponse.distance).toBe(100);
    expect(transformedResponse.location).toEqual([13.7563, 100.5018]);
  });
});
