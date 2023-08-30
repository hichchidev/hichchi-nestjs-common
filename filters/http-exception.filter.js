"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const converters_1 = require("../converters");
const services_1 = require("../services");
let AllExceptionsFilter = class AllExceptionsFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        services_1.LoggerService.error(exception);
        const ex = exception;
        const request = host.switchToHttp().getRequest();
        try {
            const [, , prefix] = request.url.split("/");
            let errObj = ex.response;
            if (ex.response.statusCode && Array.isArray(ex.response.message)) {
                errObj = (0, converters_1.toErrorObject)(ex.response.message[0]);
            }
            ex.response = {
                status: errObj.status,
                code: (0, converters_1.applyTemplate)(errObj.code, prefix),
                message: (0, converters_1.applyTemplate)(errObj.message, prefix),
            };
        }
        catch (err) {
            services_1.LoggerService.error(ex);
            try {
                ex.response = {
                    status: ex.status,
                    code: "ERROR",
                    message: ex.response.message ? ex.response.message : ex.message ? ex.message : ex.response,
                };
            }
            catch (err) { }
        }
        super.catch(ex, host);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
//# sourceMappingURL=http-exception.filter.js.map