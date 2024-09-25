// noinspection JSUnusedGlobalSymbols

import { Injectable, NestMiddleware, Type } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { extractSubdomain } from "../utils";

export const SubdomainMiddleware = (splitDomain: string, ifLocalhost?: string): Type => {
    @Injectable()
    class DynamicSubdomainMiddleware implements NestMiddleware {
        use(req: Request, _res: Response, next: NextFunction): void {
            const origin = req.headers.origin;
            req["originUrl"] = origin;
            req["subdomain"] = extractSubdomain(splitDomain, origin, ifLocalhost);
            next();
        }
    }

    return DynamicSubdomainMiddleware;
};
