import { ApiResponse } from './../models/api-response.interface';
import { PublicHttp } from './../http/public-http.class';
import { Injectable } from "@angular/core";

@Injectable()
export class TheColorApi {
    constructor(private publicHttp: PublicHttp) { }

    public colorApi(): Promise<any[]> {
        return this.publicHttp.get("http://www.colr.org/json/tags/dark")
            .then((response: any) => {
                return Promise.resolve(response)
            })
    }

}