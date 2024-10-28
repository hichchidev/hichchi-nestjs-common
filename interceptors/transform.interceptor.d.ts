import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { IViewDto } from "../interfaces";
import { IPaginatedResponse } from "../interfaces";
type Data<T> = T | T[] | IPaginatedResponse<T> | null;
type Response<R> = R | R[] | IPaginatedResponse<R> | null;
export declare class TransformInterceptor<T, R> implements NestInterceptor<Data<T>, Response<R>> {
    private readonly viewDto;
    constructor(viewDto: IViewDto<T, R>);
    intercept(_context: ExecutionContext, next: CallHandler): Observable<Response<R>>;
}
export {};
//# sourceMappingURL=transform.interceptor.d.ts.map