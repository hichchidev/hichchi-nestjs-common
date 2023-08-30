import { CacheStore } from "@nestjs/cache-manager";
import { IUserEntity } from "../../interfaces";
export declare class RedisCacheService {
    private readonly cache;
    constructor(cache: CacheStore);
    get<T = unknown>(key: string): Promise<T | undefined>;
    set<T = unknown>(key: string, value: T): Promise<void>;
    delete(key: string): Promise<void>;
    setUser(user: IUserEntity): Promise<void>;
    getUser(id: number): Promise<Omit<IUserEntity, "password" | "salt">>;
    clearUser(id: number): Promise<void>;
}
//# sourceMappingURL=redis-cache.service.d.ts.map