/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols

import { readFileSync, writeFileSync } from "fs";
import { LoggerService as NestLogger } from "@nestjs/common";
import { ILogObject, Logger } from "tslog";

export const LOG_FILE_NAME = "errors.json";

// import { WebhookService } from "../modules";

export class LoggerService implements NestLogger {
    private logger: Logger;

    private static logger: Logger;

    private filename: string;

    private static filename: string;

    constructor() {
        this.logger = new Logger({ displayTypes: false });
        this.filename = LOG_FILE_NAME;
        this.attachTransports();
    }

    /**
     * Initialize the logger service for static use
     */
    static staticInitialize(): void {
        this.logger = new Logger({ displayTypes: false });
        this.filename = LOG_FILE_NAME;
        this.attachTransports();
    }

    /**
     * Attach transports to the logger
     * @private
     */
    private static attachTransports(): void {
        this.logger.attachTransport(
            {
                silly: LoggerService.logToTransport,
                debug: LoggerService.logToTransport,
                trace: LoggerService.logToTransport,
                info: LoggerService.logToTransport,
                warn: LoggerService.logToTransport,
                error: LoggerService.logToTransport,
                fatal: LoggerService.logToTransport,
            },
            "debug",
        );
    }

    /**
     * Attach transports to the logger
     * @private
     */
    private attachTransports(): void {
        this.logger.attachTransport(
            {
                silly: LoggerService.logToTransport,
                debug: LoggerService.logToTransport,
                trace: LoggerService.logToTransport,
                info: LoggerService.logToTransport,
                warn: LoggerService.logToTransport,
                error: LoggerService.logToTransport,
                fatal: LoggerService.logToTransport,
            },
            "debug",
        );
    }

    /**
     * Log Transport
     * @param logObject
     * @private
     */
    private static logToTransport(logObject: ILogObject): void {
        if (logObject.logLevelId > 4) {
            let logFileArray: Array<any>;
            const filename = LOG_FILE_NAME;

            try {
                logFileArray = JSON.parse(readFileSync(`${filename}`).toString());
            } catch (err: any) {
                try {
                    logFileArray = [];
                    writeFileSync(`${filename}`, JSON.stringify(logFileArray, null, 2));
                } catch (err) {}
            }

            logFileArray.push({ time: new Date().toLocaleString(), logObject });

            if (logFileArray.length > 100) {
                logFileArray.splice(0, logFileArray.length - 100);
            }
            try {
                writeFileSync(`${filename}`, JSON.stringify(logFileArray, null, 2));
            } catch (err) {}
        }
    }

    /**
     * Silly log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    silly(message: any, ...optionalParams: any[]): void {
        this.logger.silly(message, ...optionalParams);
    }

    /**
     * Silly log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static silly(message: any, ...optionalParams: any[]): void {
        this.logger.silly(message, ...optionalParams);
    }

    /**
     * Debug log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    debug(message: any, ...optionalParams: any[]): void {
        this.logger.debug(message, ...optionalParams);
    }

    /**
     * Debug log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static debug(message: any, ...optionalParams: any[]): void {
        this.logger.debug(message, ...optionalParams);
    }

    /**
     * Trace log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    trace(message: any, ...optionalParams: any[]): void {
        this.logger.trace(message, ...optionalParams);
    }

    /**
     * Trace log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static trace(message: any, ...optionalParams: any[]): void {
        this.logger.trace(message, ...optionalParams);
    }

    /**
     * Log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    log(message: any, ...optionalParams: any[]): void {
        this.logger.info(message, ...optionalParams);
    }

    /**
     * Log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static log(message: any, ...optionalParams: any[]): void {
        this.logger.info(message, ...optionalParams);
    }

    /**
     * W#arn log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    warn(message: any, ...optionalParams: any[]): void {
        this.logger.warn(message, ...optionalParams);
    }

    /**
     * Warn log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static warn(message: any, ...optionalParams: any[]): void {
        this.logger.warn(message, ...optionalParams);
    }

    /**
     * Error log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    error(message: any, ...optionalParams: any[]): void {
        // WebhookService.sendError(message);
        this.logger.error(message, ...optionalParams);
    }

    /**
     * Error log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static error(message: any, ...optionalParams: any[]): void {
        // WebhookService.sendError(message);
        this.logger.error(message, ...optionalParams);
    }

    /**
     *Fatal log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    fatal(message: any, ...optionalParams: any[]): void {
        this.logger.fatal(message, ...optionalParams);
    }

    /**
     * Fatal log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static fatal(message: any, ...optionalParams: any[]): void {
        this.logger.fatal(message, ...optionalParams);
    }

    /**
     * Verbose log
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    verbose?(message: any, ...optionalParams: any[]): void {
        this.debug(message, ...optionalParams);
    }

    /**
     * Verbose log for static use
     * @param {any} message Log message
     * @param {any[]} optionalParams Optional parameters
     */
    static verbose(message: any, ...optionalParams: any[]): void {
        this.debug(message, ...optionalParams);
    }
}

/**
 * Initialize the logger service
 */
LoggerService.staticInitialize();
