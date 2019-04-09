import { BaseHttp } from './../http/base-http.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export abstract class BaseService implements BaseHttp {

  constructor(protected http: HttpClient) { }

  get(url: string, params?: object, options?: any): Promise<any> {
    const urlParams = new URLSearchParams();

    if (params) {
      for (let key of Object.keys(params)) {
        urlParams.append(key, params[key]);
      }

      url = `${url}?${urlParams.toString()}`;
    }

    return this.http.get(url, options).toPromise();
  }

  post(url: string, body: any, options?: any): Promise<any> {
    return this.http.post(url, body, options).toPromise();
  }

  put(url: string, param: any, options?: any): Promise<any> {
    return this.http.put(url, param, options).toPromise();
  }

  patch(url: string, param: any, options?: any): Promise<any> {
    return this.http.patch(url, param, options).toPromise();
  }

  delete(url: string, params?: object, options?: any): Promise<any> {
    const urlParams = new URLSearchParams();

    if (params) {
      for (let key of Object.keys(params)) {
        urlParams.append(key, params[key]);
      }

      url = `${url}?${urlParams.toString()}`;
    }

    return this.http.delete(url, options).toPromise();
  }

  protected addHeaders(options: any): object {
    if (!options) {
      options = { headers: {} };
    }

    options.headers = {
      ...options.headers
    };

    return options;
  }
}