"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RedisCacheModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const redis_cache_service_1 = require("./services/redis-cache.service");
// noinspection JSUnusedGlobalSymbols
let RedisCacheModule = RedisCacheModule_1 = class RedisCacheModule {
    static registerAsync(options) {
        return {
            module: RedisCacheModule_1,
            imports: [
                cache_manager_1.CacheModule.registerAsync({
                    isGlobal: true,
                    useFactory: async () => options,
                }),
            ],
            providers: [redis_cache_service_1.RedisCacheService],
            exports: [redis_cache_service_1.RedisCacheService],
        };
    }
};
exports.RedisCacheModule = RedisCacheModule;
exports.RedisCacheModule = RedisCacheModule = RedisCacheModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], RedisCacheModule);
//# sourceMappingURL=redis-cache.module.js.map