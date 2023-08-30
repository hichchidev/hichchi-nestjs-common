import { toJSON, toString } from "./json.converter";
import { IEntityErrorResponse } from "../interfaces";
import { toFirstCase, toSentenceCase, toSnakeCase } from "hichchi-utils";

export const toErrString = (errObj: IEntityErrorResponse): { message: string } => {
    return {
        message: toString(errObj),
    };
};

export const toErrorObject = (str: string): IEntityErrorResponse => {
    return toJSON(str) as IEntityErrorResponse;
};

export const applyTemplate = (str: string, prefix: string): string => {
    return str
        .replace("#{upperCase}", prefix.toUpperCase())
        .replace("#{snakeCase}", toSnakeCase(prefix))
        .replace("#{upperSnakeCase}", toSnakeCase(prefix, true))
        .replace("#{lowerCase}", prefix.toLowerCase())
        .replace("#{sentenceCase}", toSentenceCase(prefix))
        .replace("#{firstCase}", toFirstCase(prefix));
};
