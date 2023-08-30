// noinspection JSUnusedGlobalSymbols

import { Inject, Injectable } from "@nestjs/common";
import { CACHE_MANAGER, CacheStore } from "@nestjs/cache-manager";
import { IUserEntity } from "../../interfaces";

const PREFIX = "hichchi";
const USER_PREFIX = (userId: number): string => `${PREFIX}-user-${userId}`;

@Injectable()
export class RedisCacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cache: CacheStore) {}

    async get<T = unknown>(key: string): Promise<T | undefined> {
        return this.cache.get<T>(`${PREFIX}-${key}`);
    }

    async set<T = unknown>(key: string, value: T): Promise<void> {
        return this.cache.set(`${PREFIX}-${key}`, value);
    }

    async delete(key: string): Promise<void> {
        return this.cache.del(`${PREFIX}-${key}`);
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
