import { EntityErrorResponse } from "../interfaces";
export declare const toErrString: (errObj: EntityErrorResponse) => {
    message: string;
};
export declare const toErrorObject: (str: string) => EntityErrorResponse;
export declare const applyTemplate: (str: string, prefix: string) => string;
//# sourceMappingURL=error-message.converter.d.ts.map