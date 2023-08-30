"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawBodyMiddleware = void 0;
const common_1 = require("@nestjs/common");
const body_parser_1 = require("body-parser");
/**
 * Copied this middleware to parse the raw response into a param to use later
 * from https://github.com/golevelup/nestjs/blob/master/packages/webhooks/src/webhooks.middleware.ts
 */
let RawBodyMiddleware = class RawBodyMiddleware {
    use(req, res, next) {
        (0, body_parser_1.json)({
            verify: (req, res, buffer) => {
                if (Buffer.isBuffer(buffer)) {
                    req.rawBody = Buffer.from(buffer);
                }
                return true;
            },
        })(req, res, next);
    }
};
exports.RawBodyMiddleware = RawBodyMiddleware;
exports.RawBodyMiddleware = RawBodyMiddleware = __decorate([
    (0, common_1.Injectable)()
], RawBodyMiddleware);
//# sourceMappingURL=row-body-parser.middleware.js.map