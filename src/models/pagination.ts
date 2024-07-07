import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class PaginationModel {

    page: number;
    limit: number;
    totalPage: number;
    totalSize: number;


    constructor(page: number, limit: number , totalPage: number, totalSize: number) {
        this.page = page;
        this.limit = limit;
        this.totalPage = totalPage;
        this.totalSize = totalSize;
      }

}

export class PaginationRequest {

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    readonly page: number = 1;

    @IsNumber()
    @IsNotEmpty()
    @Min(10)
    readonly limit: number = 10;

    constructor(page: number, limit: number) {
        this.page = page;
        this.limit = limit;
    }

}

export class PaginationResponse {
    pagination: PaginationModel

    constructor(pagination: PaginationModel) {
        this.pagination = pagination;
    }

}
