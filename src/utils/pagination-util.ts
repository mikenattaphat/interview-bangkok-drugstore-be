import { Injectable } from "@nestjs/common";
import { PaginationRequest,PaginationModel, PaginationResponse } from "../models/pagination";


@Injectable()
export class PaginationUtil {

  static skip(pagination: PaginationRequest) {
    return (pagination.page - 1) * pagination.limit
  }

  static Response(page: number, limit: number, totalPage: number , totalSize: number) {
    const paginationModel = new PaginationModel(page, limit, totalPage, totalSize)
    return new PaginationResponse(paginationModel);
  }

}
