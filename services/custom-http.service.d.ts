import { HttpService } from "@nestjs/axios";
import { AxiosError, AxiosRequestConfig } from "axios";
export declare class CustomHttpService {
    private readonly httpService;
    constructor(httpService: HttpService);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    throwException(error: AxiosError): void;
}
//# sourceMappingURL=custom-http.service.d.ts.map