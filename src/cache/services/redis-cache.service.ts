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

    /**
     * Get Value from Cache
     * @template T Type of the Cache value
     * @param {string} key Key of the Cache value
     * @return {Promise<T | undefined>} Value from Cache
     */
    async get<T = unknown>(key: string): Promise<T | undefined> {
        try {
            return await this.cache.get<T>(`${this.prefix}-${key}`);
        } catch {
            return undefined;
        }
    }

    /**
     * Set Value in Cache
     * @template T Type of the Cache value
     * @param {string} key Key of the Cache value
     * @param {T} value Value to be set in Cache
     * @return {Promise<boolean>} Status of the operation
     */
    async set<T = unknown>(key: string, value: T): Promise<boolean> {
        try {
            await this.cache.set(`${this.prefix}-${key}`, value);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Delete Value from Cache
     * @param {string} key Key of the Cache value
     * @return {Promise<boolean>} Status of the operation
     */
    async delete(key: string): Promise<boolean> {
        try {
            await this.cache.del(`${this.prefix}-${key}`);
            return true;
        } catch {
            return false;
        }
    }
}
