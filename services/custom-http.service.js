"use strict";
// noinspection JSUnusedGlobalSymbols
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const logger_service_1 = require("./logger.service");
let CustomHttpService = class CustomHttpService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async get(url, config) {
        try {
            const res = this.httpService.get(url, config).pipe((0, rxjs_1.take)(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        }
        catch (error) {
            this.throwException(error);
        }
    }
    async post(url, data, config) {
        try {
            const res = this.httpService.post(url, data, config).pipe((0, rxjs_1.take)(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        }
        catch (error) {
            this.throwException(error);
        }
    }
    async put(url, data, config) {
        try {
            const res = this.httpService.put(url, data, config).pipe((0, rxjs_1.take)(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        }
        catch (error) {
            this.throwException(error);
        }
    }
    async patch(url, data, config) {
        try {
            const res = this.httpService.patch(url, data, config).pipe((0, rxjs_1.take)(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        }
        catch (error) {
            this.throwException(error);
        }
    }
    async delete(url, config) {
        try {
            const res = this.httpService.delete(url, config).pipe((0, rxjs_1.take)(1));
            return await new Promise((resolve, reject) => {
                res.subscribe({
                    next: (response) => {
                        resolve(response.data);
                    },
                    error: (error) => {
                        reject(error);
                    },
                });
            });
        }
        catch (error) {
            this.throwException(error);
        }
    }
    throwException(error) {
        var _a, _b, _c, _d, _e, _f;
        logger_service_1.LoggerService.error(error.response);
        switch ((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) {
            case common_1.HttpStatus.BAD_REQUEST:
                throw new common_1.BadRequestException(error.response.data);
            case common_1.HttpStatus.UNAUTHORIZED:
                throw new common_1.UnauthorizedException(error.response.data);
            case common_1.HttpStatus.FORBIDDEN:
                throw new common_1.ForbiddenException(error.response.data);
            default:
                throw new common_1.HttpException((_d = (_c = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data) !== null && _c !== void 0 ? _c : error.response) !== null && _d !== void 0 ? _d : error, (_f = (_e = error.response) === null || _e === void 0 ? void 0 : _e.status) !== null && _f !== void 0 ? _f : 500);
        }
    }
};
exports.CustomHttpService = CustomHttpService;
exports.CustomHttpService = CustomHttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CustomHttpService);
//# sourceMappingURL=custom-http.service.js.map