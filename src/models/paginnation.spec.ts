import { PaginationModel, PaginationRequest, PaginationResponse } from './pagination';
import { validate } from 'class-validator';

describe('PaginationModel', () => {
  it('should create a pagination model instance', () => {
    const paginationModel = new PaginationModel(1, 10, 5, 50);
    expect(paginationModel.page).toBe(1);
    expect(paginationModel.limit).toBe(10);
    expect(paginationModel.totalPage).toBe(5);
    expect(paginationModel.totalSize).toBe(50);
  });
});

describe('PaginationRequest', () => {
  it('should validate the pagination request with correct values', async () => {
    const paginationRequest = new PaginationRequest(1,10);
    const errors = await validate(paginationRequest);
    expect(errors.length).toBe(0);
  });

  it('should invalidate the pagination request with incorrect values', async () => {
    const paginationRequest = new PaginationRequest(0,5);
    const errors = await validate(paginationRequest);
    expect(errors.length).toBeGreaterThan(0);
  });
});

describe('PaginationResponse', () => {
  it('should create a pagination response instance', () => {
    const paginationModel = new PaginationModel(1, 10, 5, 50);
    const paginationResponse = new PaginationResponse(paginationModel);
    expect(paginationResponse.pagination).toBe(paginationModel);
  });
});
