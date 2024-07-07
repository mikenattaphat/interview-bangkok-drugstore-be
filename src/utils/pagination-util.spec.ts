import { PaginationRequest, PaginationResponse } from '../models/pagination';
import { PaginationUtil } from './pagination-util';

describe('PaginationUtil', () => {
  describe('skip', () => {
    it('should return the correct skip value', () => {
      const paginationRequest: PaginationRequest = {
        page: 2,
        limit: 10
      };

      const result = PaginationUtil.skip(paginationRequest);
      expect(result).toBe(10);
    });

    it('should return 0 when page is 1', () => {
      const paginationRequest: PaginationRequest = {
        page: 1,
        limit: 10
      };

      const result = PaginationUtil.skip(paginationRequest);
      expect(result).toBe(0);
    });
  });

  describe('Response', () => {
    it('should return a PaginationResponse with the correct values', () => {
      const page = 2;
      const limit = 10;
      const totalPage = 5;
      const totalSize = 50;

      const response = PaginationUtil.Response(page, limit, totalPage, totalSize);

      expect(response).toBeInstanceOf(PaginationResponse);
      expect(response.pagination.page).toBe(page);
      expect(response.pagination.limit).toBe(limit);
      expect(response.pagination.totalPage).toBe(totalPage);
      expect(response.pagination.totalSize).toBe(totalSize);
    });

    it('should return a PaginationResponse with different values', () => {
      const page = 1;
      const limit = 5;
      const totalPage = 10;
      const totalSize = 50;

      const response = PaginationUtil.Response(page, limit, totalPage, totalSize);

      expect(response).toBeInstanceOf(PaginationResponse);
      expect(response.pagination.page).toBe(page);
      expect(response.pagination.limit).toBe(limit);
      expect(response.pagination.totalPage).toBe(totalPage);
      expect(response.pagination.totalSize).toBe(totalSize);
    });
  });
});
