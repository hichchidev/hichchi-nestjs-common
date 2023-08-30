"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
// noinspection JSUnusedLocalSymbols,JSUnusedGlobalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = exports.LOG_FILE_NAME = void 0;
const fs_1 = require("fs");
const tslog_1 = require("tslog");
exports.LOG_FILE_NAME = "errors";
// import { WebhookService } from "../modules";
class LoggerService {
    constructor() {
        this.logger = new tslog_1.Logger({ displayTypes: false });
        this.filename = exports.LOG_FILE_NAME;
        this.attachTransports();
    }
    static staticInitialize() {
        this.logger = new tslog_1.Logger({ displayTypes: false });
        this.filename = exports.LOG_FILE_NAME;
        this.attachTransports();
    }
    static attachTransports() {
        this.logger.attachTransport({
            silly: LoggerService.logToTransport,
            debug: LoggerService.logToTransport,
            trace: LoggerService.logToTransport,
            info: LoggerService.logToTransport,
            warn: LoggerService.logToTransport,
            error: LoggerService.logToTransport,
            fatal: LoggerService.logToTransport,
        }, "debug");
    }
    attachTransports() {
        this.logger.attachTransport({
            silly: LoggerService.logToTransport,
            debug: LoggerService.logToTransport,
            trace: LoggerService.logToTransport,
            info: LoggerService.logToTransport,
            warn: LoggerService.logToTransport,
            error: LoggerService.logToTransport,
            fatal: LoggerService.logToTransport,
        }, "debug");
    }
    static logToTransport(logObject) {
        if (logObject.logLevelId > 4) {
            let logFileArray;
            const filename = exports.LOG_FILE_NAME;
            try {
                logFileArray = JSON.parse((0, fs_1.readFileSync)(`${filename}.json`).toString());
            }
            catch (err) {
                try {
                    logFileArray = [];
                    (0, fs_1.writeFileSync)(`${filename}.json`, JSON.stringify(logFileArray, null, 2));
                }
                catch (err) { }
            }
            logFileArray.push({ time: new Date().toLocaleString(), logObject });
            if (logFileArray.length > 100) {
                logFileArray.splice(0, logFileArray.length - 100);
            }
            try {
                logFileArray = [];
                (0, fs_1.writeFileSync)(`${filename}.json`, JSON.stringify(logFileArray, null, 2));
            }
            catch (err) { }
        }
    }
    silly(message, ...optionalParams) {
        this.logger.silly(message, ...optionalParams);
    }
    static silly(message, ...optionalParams) {
        this.logger.silly(message, ...optionalParams);
    }
    debug(message, ...optionalParams) {
        this.logger.debug(message, ...optionalParams);
    }
    static debug(message, ...optionalParams) {
        this.logger.debug(message, ...optionalParams);
    }
    trace(message, ...optionalParams) {
        this.logger.trace(message, ...optionalParams);
    }
    static trace(message, ...optionalParams) {
        this.logger.trace(message, ...optionalParams);
    }
    log(message, ...optionalParams) {
        this.logger.info(message, ...optionalParams);
    }
    static log(message, ...optionalParams) {
        this.logger.info(message, ...optionalParams);
    }
    warn(message, ...optionalParams) {
        this.logger.warn(message, ...optionalParams);
    }
    static warn(message, ...optionalParams) {
        this.logger.warn(message, ...optionalParams);
    }
    error(message, ...optionalParams) {
        // WebhookService.sendError(message);
        this.logger.error(message, ...optionalParams);
    }
    static error(message, ...optionalParams) {
        // WebhookService.sendError(message);
        this.logger.error(message, ...optionalParams);
    }
    fatal(message, ...optionalParams) {
        this.logger.fatal(message, ...optionalParams);
    }
    static fatal(message, ...optionalParams) {
        this.logger.fatal(message, ...optionalParams);
    }
}
exports.LoggerService = LoggerService;
LoggerService.staticInitialize();
//# sourceMappingURL=logger.service.js.map