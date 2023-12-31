// noinspection JSUnusedGlobalSymbols

import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER, CacheStore } from "@nestjs/cache-manager";
import { IUserEntity } from "../../interfaces";
import { CACHE_OPTIONS } from "../../tokens";
import { ICacheOptions } from "../../interfaces/cache-options.interface";

const PREFIX = "hc-cache";
const USER_PREFIX = (userId: number): string => `user-${userId}`;

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
        console.log("hichchi-nestjs-common => cacheOptions: ", this.cacheOptions);
        return this.cache.get<T>(`${this.prefix}-${key}`);
    }

    async set<T = unknown>(key: string, value: T): Promise<void> {
        console.log("hichchi-nestjs-common => cacheOptions: ", this.cacheOptions);
        return this.cache.set(`${this.prefix}-${key}`, value);
    }

    async delete(key: string): Promise<void> {
        return this.cache.del(`${this.prefix}-${key}`);
    }

    async setUser(user: IUserEntity): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, salt, ...rest } = user;
        await this.set<Omit<IUserEntity, "password" | "salt">>(USER_PREFIX(user.id), rest);
    }

    async getUser(id: number): Promise<Omit<IUserEntity, "password" | "salt">> {
        return await this.get<IUserEntity>(USER_PREFIX(id));
    }

    async clearUser(id: number): Promise<void> {
        return await this.delete(USER_PREFIX(id));
    }
}
