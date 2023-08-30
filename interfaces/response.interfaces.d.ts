export interface ClassValidatorErrorResponse {
    statusCode: number;
    message: string[];
    error: string;
}
export interface EntityErrorResponse {
    status: number;
    code: string;
    message: string;
}
export interface IStatusResponse {
    status: boolean;
    message: string;
}
export interface IPaginatedResponse<T> {
    data: T[];
    rowCount: number;
}
//# sourceMappingURL=response.interfaces.d.ts.map