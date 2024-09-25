// noinspection JSUnusedGlobalSymbols

import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER, CacheStore } from "@nestjs/cache-manager";
import { CACHE_OPTIONS } from "../../tokens";
import { ICacheOptions } from "../../interfaces";

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
        try {
            return await this.cache.get<T>(`${this.prefix}-${key}`);
        } catch {
            return undefined;
        }
    }

    async set<T = unknown>(key: string, value: T): Promise<boolean> {
        try {
            await this.cache.set(`${this.prefix}-${key}`, value);
            return true;
        } catch {
            return false;
        }
    }

    async delete(key: string): Promise<boolean> {
        try {
            await this.cache.del(`${this.prefix}-${key}`);
            return true;
        } catch {
            return false;
        }
    }
}
