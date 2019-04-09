export interface BaseHttp {
    get(url: string, params?: object, headers?: any): Promise<any>;
    post(url: string, body: any, headers?: any): Promise<any>;
    put(url: string, param: any, headers?: any): Promise<any>;
    patch(url: string, param: any, headers?: any): Promise<any>;
}