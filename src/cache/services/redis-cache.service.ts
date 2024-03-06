// noinspection JSUnusedGlobalSymbols

import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER, CacheStore } from "@nestjs/cache-manager";
import { CACHE_OPTIONS } from "../../tokens";
import { ICacheOptions } from "../../interfaces/cache-options.interface";

const PREFIX = "hc-cache";

@Injectable()
export class RedisCacheService {
    private readonly prefix: string;

    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: CacheStore,
        @Inject(CACHE_OPTIONS) private cacheOptions: ICacheOptions,
    ) {
        this.prefix = this.cacheOptions.prefix ? "" : PREFIX;
    }

    async get<T = unknown>(key: string): Promise<T | undefined> {
        // eslint-disable-next-line no-console
        console.log("hichchi-nestjs-common => cacheOptions: ", this.cacheOptions);
        return this.cache.get<T>(`${this.prefix}-${key}`);
    }

    async set<T = unknown>(key: string, value: T): Promise<void> {
        // eslint-disable-next-line no-console
        console.log("hichchi-nestjs-common => cacheOptions: ", this.cacheOptions);
        return this.cache.set(`${this.prefix}-${key}`, value);
    }

    async delete(key: string): Promise<void> {
        return this.cache.del(`${this.prefix}-${key}`);
    }
}
