import { ArgumentsHost, Catch } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { LoggerService } from "../services";
import { Request } from "express";
import { httpExceptionFilter } from "../utils";

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): any {
        LoggerService.error(exception);
        super.catch(httpExceptionFilter(exception, host.switchToHttp().getRequest<Request>(), true), host);
    }
}
