// noinspection JSUnusedGlobalSymbols

import {
    BadRequestException,
    ForbiddenException,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { AxiosError, AxiosRequestConfig } from "axios";
import { take } from "rxjs";

@Injectable()
export class CustomHttpService {
    constructor(private readonly httpService: HttpService) {}

    /**
     * HTTP GET request
     *
     * @template T Response data type
     * @param {string} url URL
     * @param {AxiosRequestConfig} config Axios request config
     * @returns {Promise<T>} Response data
     */
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const res = this.httpService.get<T>(url, config).pipe(take(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error: AxiosError) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            this.throwException(error as AxiosError<unknown, any>);
        }
    }

    /**
     * HTTP POST request
     *
     * @template T Response data type
     * @param {string} url URL
     * @param {*} data Request data
     * @param {AxiosRequestConfig} config Axios request config
     * @returns {Promise<T>} Response data
     */
    async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const res = this.httpService.post<T>(url, data, config).pipe(take(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error: AxiosError) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            this.throwException(error as AxiosError<unknown, any>);
        }
    }

    /**
     * HTTP PUT request
     *
     * @template T Response data type
     * @param {string} url URL
     * @param {*} data Request data
     * @param {AxiosRequestConfig} config Axios request config
     * @returns {Promise<T>} Response data
     */
    async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const res = this.httpService.put<T>(url, data, config).pipe(take(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error: AxiosError) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            this.throwException(error as AxiosError<unknown, any>);
        }
    }

    /**
     * HTTP PATCH request
     *
     * @template T Response data type
     * @param {string} url URL
     * @param {*} data Request data
     * @param {AxiosRequestConfig} config Axios request config
     * @returns {Promise<T>} Response data
     */
    async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        try {
            const res = this.httpService.patch<T>(url, data, config).pipe(take(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error: AxiosError) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            this.throwException(error as AxiosError<unknown, any>);
        }
    }

    /**
     * HTTP DELETE request
     *
     * @template T Response data type
     * @param {string} url URL
     * @param {AxiosRequestConfig} config Axios request config
     * @returns {Promise<T>} Response data
     */
    async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const res = this.httpService.delete<T>(url, config).pipe(take(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error: AxiosError) => {
                        reject(error);
                    },
                });
            });
        } catch (error) {
            this.throwException(error as AxiosError<unknown, any>);
        }
    }

    /**
     * Throw exceptions
     *
     * @private
     * @param {AxiosError} error Axios error
     * @returns {void}
     */
    private throwException(error: AxiosError): void {
        switch (error.response?.status as HttpStatus) {
            case HttpStatus.BAD_REQUEST:
                throw new BadRequestException(error.response.data);
            case HttpStatus.UNAUTHORIZED:
                throw new UnauthorizedException(error.response.data);
            case HttpStatus.FORBIDDEN:
                throw new ForbiddenException(error.response.data);
            default:
                throw new HttpException(error.response?.data ?? error.response ?? error, error.response?.status ?? 500);
        }
    }
}
