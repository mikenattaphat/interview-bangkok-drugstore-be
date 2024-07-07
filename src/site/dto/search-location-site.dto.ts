import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from "class-validator";
import { PaginationRequest } from "../../models/pagination";

export class SearchLocationSiteDto {

    @IsString()
    @IsOptional()
    readonly site_desc: string;

    @IsNumber()
    @IsNotEmpty()
    readonly lat: number;

    @IsNumber()
    @IsNotEmpty()
    readonly lng: number;

    @ValidateNested({ each: true })
    @IsObject()
    @IsNotEmpty()
    @Type(() => PaginationRequest)
    readonly pagination: PaginationRequest;

}


export class SearchLocationSiteDtoResponse {

    @Expose()
    site_id: string;
    @Expose()
    site_desc: string;
    @Expose()
    site_address: string;
    @Expose()
    site_tel: string;
    @Expose()
    site_close_time: string;
    @Expose()
    site_open_time: string;
    @Expose()
    active: boolean;
    @Expose()
    distance: number;
    @Expose()
    location: number[];
    

    constructor(partial: Partial<SearchLocationSiteDtoResponse>) {
        Object.assign(this, partial);
    }

}