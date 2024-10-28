// noinspection JSUnusedGlobalSymbols

import { ClassConstructor, plainToInstance } from "class-transformer";
import { isUUID, validate } from "class-validator";
import { BadRequestException, ValidationError } from "@nestjs/common";
import { Errors } from "../responses";
import { IEntityErrorResponse } from "../interfaces";
import { applyTemplate, toErrorObject } from "../converters";
import { LoggerService } from "../services";
import { Request } from "express";

export const throwDtoValidationError = (errors: string | string[]): void => {
    const errorObject = { statusCode: 400, message: Array.isArray(errors) ? errors : [errors], error: "Bad Request" };
    throw new BadRequestException(errorObject, "Bad Request Exception");
};

export const addErrors = (validationErrors: ValidationError[], errs: string[] = []): string[] => {
    const errors: string[] = errs;
    if (validationErrors.length) {
        validationErrors.forEach((error) => {
            errors.push(...Object.values(error.constraints ?? []));
            if (error.children?.length) {
                errors.push(...addErrors(error.children, errors));
            }
        });
    }
    return errors;
};

export const validateDto = async <T extends object, V>(dto: ClassConstructor<T>, obj: V): Promise<T> => {
    const objInstance = plainToInstance(dto, obj);
    const validationErrors = await validate(objInstance);
    const errors = addErrors(validationErrors);
    if (errors.length) {
        throwDtoValidationError(errors);
    }
    return objInstance;
};

export const checkUUID = (id: string, version: 1 | 3 | 4 | 5 = 4): void => {
    if (!isUUID(id, version)) {
        throw new BadRequestException(Errors.E_400_INVALID_UUID);
    }
};

export const isOriginAllowed = (origin: string, allowedOrigins: string[]): boolean => {
    return allowedOrigins.some((allowedOrigin) => {
        if (allowedOrigin.includes("*")) {
            const regex = new RegExp("^" + allowedOrigin.replace(/\./g, "\\.").replace("*", ".*") + "$");
            return regex.test(origin);
        } else {
            return allowedOrigin === origin;
        }
    });
};

export const httpExceptionFilter = (exception: any, request?: Request, logUnknown?: boolean): any => {
    const ex: any = exception;
    try {
        const [, prefix] = request
            ? (request.url.replace(/\/?v\d+/, "").split("/") as [string, string, string])
            : [undefined, "ERROR", undefined];

        let errObj = ex.response as IEntityErrorResponse;
        if (ex.response.statusCode && Array.isArray(ex.response.message)) {
            errObj = toErrorObject(ex.response.message[0]);
        }
        ex.response = {
            status: errObj.status,
            code: applyTemplate(errObj.code, prefix),
            message: applyTemplate(errObj.message, prefix),
        } as IEntityErrorResponse;
    } catch (err: any) {
        if (logUnknown) LoggerService.error(ex);
        try {
            const message = ex.response.message ? ex.response.message : ex.message ? ex.message : ex.response;
            ex.response = {
                status: ex.status,
                code: "ERROR",
                message: Array.isArray(message) ? message[0] : message,
            };
        } catch (err: any) {}
    }
    return ex;
};

export const extractSubdomain = (splitDomain: string, origin?: string, ifLocalhost?: string): string | undefined => {
    if (origin) {
        const parts = origin.split(RegExp(`http://|https://|\\.|${splitDomain}`));
        return parts?.[1] ? (parts[1].includes("localhost") ? ifLocalhost : parts[1]) : undefined;
    }
};
