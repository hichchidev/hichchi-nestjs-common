/// <reference types="node" />
import { NestMiddleware } from "@nestjs/common";
import { IncomingMessage, ServerResponse } from "http";
import { NextFunction } from "express";
/**
 * Copied this middleware to parse the raw response into a param to use later
 * from https://github.com/golevelup/nestjs/blob/master/packages/webhooks/src/webhooks.middleware.ts
 */
export declare class RawBodyMiddleware implements NestMiddleware {
    use(req: IncomingMessage, res: ServerResponse, next: NextFunction): void;
}
//# sourceMappingURL=row-body-parser.middleware.d.ts.map