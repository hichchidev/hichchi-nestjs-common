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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisCacheService = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const PREFIX = "hichchi";
const USER_PREFIX = (userId) => `${PREFIX}-user-${userId}`;
let RedisCacheService = class RedisCacheService {
    constructor(cache) {
        this.cache = cache;
    }
    async get(key) {
        return this.cache.get(`${PREFIX}-${key}`);
    }
    async set(key, value) {
        return this.cache.set(`${PREFIX}-${key}`, value);
    }
    async delete(key) {
        return this.cache.del(`${PREFIX}-${key}`);
    }
    async setUser(user) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, salt } = user, rest = __rest(user, ["password", "salt"]);
        await this.set(USER_PREFIX(user.id), rest);
    }
    async getUser(id) {
        return await this.get(USER_PREFIX(id));
    }
    async clearUser(id) {
        return await this.delete(USER_PREFIX(id));
    }
};
exports.RedisCacheService = RedisCacheService;
exports.RedisCacheService = RedisCacheService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], RedisCacheService);
//# sourceMappingURL=redis-cache.service.js.map