import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IViewDto } from "../interfaces";
import { IPaginatedResponse } from "../interfaces";

type Data<T> = T | T[] | IPaginatedResponse<T> | null;
type Response<R> = R | R[] | IPaginatedResponse<R> | null;

@Injectable()
export class TransformInterceptor<T, R> implements NestInterceptor<Data<T>, Response<R>> {
    constructor(private readonly viewDto: IViewDto<T, R>) {}

    intercept(_context: ExecutionContext, next: CallHandler): Observable<Response<R>> {
        return next.handle().pipe(
            map((data: Data<T>): Response<R> => {
                if (data === null) {
                    return null;
                }

                if (Array.isArray(data)) {
                    return data.map((item: T): R => this.viewDto.formatDataSet(item));
                }

                if (data.hasOwnProperty("data")) {
                    return {
                        ...data,
                        data: (data as IPaginatedResponse<T>).data.map(
                            (item: T): R => this.viewDto.formatDataSet(item),
                        ),
                    } as IPaginatedResponse<R>;
                }

                return this.viewDto.formatDataSet(data as T);
            }),
        );
    }
}
