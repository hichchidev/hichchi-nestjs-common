import { DynamicModule, Global, Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisCacheService } from "./services/redis-cache.service";
import { CacheModuleOptions } from "@nestjs/cache-manager/dist/interfaces/cache-module.interface";
import { CACHE_OPTIONS } from "../tokens";
import { ICacheOptions } from "../interfaces";
import { RedisConfigException } from "../exceptions/redis-config.exception";

// noinspection JSUnusedGlobalSymbols
@Global()
@Module({})
export class RedisCacheModule {
    static registerAsync(options: CacheModuleOptions & ICacheOptions): DynamicModule {
        this.validateConfigs(options);

        return {
            module: RedisCacheModule,
            imports: [
                CacheModule.registerAsync({
                    isGlobal: true,
                    useFactory: async (): Promise<CacheModuleOptions> => ({
                        ...options,
                        ttl: options.ttl || 10,
                        port: options.port || 6379,
                    }),
                }),
            ],
            providers: [
                {
                    provide: CACHE_OPTIONS,
                    useValue: <ICacheOptions>{ prefix: options.prefix },
                },
                RedisCacheService,
            ],
            exports: [RedisCacheService],
        };
    }

    private static validateConfigs(options: CacheModuleOptions & ICacheOptions): boolean {
        if (!options.store) {
            throw new RedisConfigException("Redis store is not provided while registering RedisCacheModule");
        }

        if (!options.host && !options.url) {
            throw new RedisConfigException("Redis host or url is not provided while registering RedisCacheModule");
        }

        return true;
    }
}
