// noinspection JSUnusedGlobalSymbols

import { ClassConstructor, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { BadRequestException } from "@nestjs/common";

export const throwDtoValidationError = (errors: string | string[]): void => {
    const errorObject = { statusCode: 400, message: Array.isArray(errors) ? errors : [errors], error: "Bad Request" };
    throw new BadRequestException(errorObject, "Bad Request Exception");
};

export const validateDto = async <T extends object, V>(dto: ClassConstructor<T>, obj: V): Promise<T> => {
    const objInstance = plainToInstance(dto, obj);
    const validationErrors = await validate(objInstance);
    if (validationErrors.length) {
        const errors: string[] = [];
        validationErrors.forEach((error) => errors.push(...Object.values(error.constraints ?? [])));
        throwDtoValidationError(errors);
    }
    return objInstance;
};
