import { DynamicModule, Global, Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisCacheService } from "./services/redis-cache.service";
import { CacheModuleOptions } from "@nestjs/cache-manager/dist/interfaces/cache-module.interface";
import { CACHE_OPTIONS } from "../tokens";
import { ICacheOptions } from "../interfaces/cache-options.interface";

// noinspection JSUnusedGlobalSymbols
@Global()
@Module({})
export class RedisCacheModule {
    static registerAsync(options: CacheModuleOptions & ICacheOptions): DynamicModule {
        return {
            module: RedisCacheModule,
            imports: [
                CacheModule.registerAsync({
                    isGlobal: true,
                    useFactory: async (): Promise<CacheModuleOptions> => options,
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
}
