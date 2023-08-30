import { LoggerService as NestLogger } from "@nestjs/common";
export declare const LOG_FILE_NAME = "errors";
export declare class LoggerService implements NestLogger {
    private logger;
    private static logger;
    private filename;
    private static filename;
    constructor();
    static staticInitialize(): void;
    static attachTransports(): void;
    private attachTransports;
    private static logToTransport;
    silly(message: any, ...optionalParams: any[]): void;
    static silly(message: any, ...optionalParams: any[]): void;
    debug(message: any, ...optionalParams: any[]): void;
    static debug(message: any, ...optionalParams: any[]): void;
    trace(message: any, ...optionalParams: any[]): void;
    static trace(message: any, ...optionalParams: any[]): void;
    log(message: any, ...optionalParams: any[]): void;
    static log(message: any, ...optionalParams: any[]): void;
    warn(message: any, ...optionalParams: any[]): void;
    static warn(message: any, ...optionalParams: any[]): void;
    error(message: any, ...optionalParams: any[]): void;
    static error(message: any, ...optionalParams: any[]): void;
    fatal(message: any, ...optionalParams: any[]): void;
    static fatal(message: any, ...optionalParams: any[]): void;
}
//# sourceMappingURL=logger.service.d.ts.map