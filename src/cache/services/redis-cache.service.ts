// noinspection JSUnusedGlobalSymbols

import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER, CacheStore } from "@nestjs/cache-manager";
import { IUserEntity } from "../../interfaces";
import { CACHE_OPTIONS } from "../../tokens";
import { ICacheOptions } from "../../interfaces/cache-options.interface";

const PREFIX = "hc-cache";

@Injectable()
export class RedisCacheService {
    constructor(
        @Inject(CACHE_MANAGER) private readonly cache: CacheStore,
        @Inject(CACHE_OPTIONS) private cacheOptions: ICacheOptions,
    ) {}

    prefix = (): string => this.cacheOptions.prefix || PREFIX;

    userPrefix = (userId: number): string => `${this.prefix()}-user-${userId}`;

    async get<T = unknown>(key: string): Promise<T | undefined> {
        return this.cache.get<T>(`${this.cacheOptions.prefix}-${key}`);
    }

    async set<T = unknown>(key: string, value: T): Promise<void> {
        return this.cache.set(`${this.prefix()}-${key}`, value);
    }

    async delete(key: string): Promise<void> {
        return this.cache.del(`${this.prefix()}-${key}`);
    }

    async setUser(user: IUserEntity): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, salt, ...rest } = user;
        await this.set<Omit<IUserEntity, "password" | "salt">>(this.userPrefix(user.id), rest);
    }

    async getUser(id: number): Promise<Omit<IUserEntity, "password" | "salt">> {
        return await this.get<IUserEntity>(this.userPrefix(id));
    }

    async clearUser(id: number): Promise<void> {
        return await this.delete(this.userPrefix(id));
    }
}
