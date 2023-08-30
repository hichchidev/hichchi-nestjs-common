import { DynamicModule, Global, Module } from "@nestjs/common";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisCacheService } from "./services/redis-cache.service";
import { CacheModuleOptions } from "@nestjs/cache-manager/dist/interfaces/cache-module.interface";

// noinspection JSUnusedGlobalSymbols
@Global()
@Module({})
export class RedisCacheModule {
    static registerAsync(options: CacheModuleOptions): DynamicModule {
        return {
            module: RedisCacheModule,
            imports: [
                CacheModule.registerAsync({
                    isGlobal: true,
                    useFactory: async (): Promise<CacheModuleOptions> => options,
                }),
            ],
            providers: [RedisCacheService],
            exports: [RedisCacheService],
        };
    }
}
