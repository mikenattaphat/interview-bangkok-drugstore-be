import { Expose } from "class-transformer";
import { PaginationResponse } from "./pagination";

class BaseResponse<T> {
  @Expose()
  statusCode: number;

  @Expose()
  message: string;

  @Expose()
  data: T;

  constructor(statusCode: number, data: T, message: string) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
  }
}

export class ResponsePaginationApi<T> extends BaseResponse<T> {
  @Expose()
  pagination: PaginationResponse;

  constructor(statusCode: number, data: T, message: string, pagination: PaginationResponse) {
    super(statusCode, data, message);
    this.pagination = pagination;
  }
}

export class ResponseApi<T> extends BaseResponse<T> {}