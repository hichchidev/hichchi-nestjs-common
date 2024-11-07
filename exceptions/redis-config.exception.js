"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisConfigException = void 0;
const exceptions_1 = require("@nestjs/core/errors/exceptions");
class RedisConfigException extends exceptions_1.RuntimeException {
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.RedisConfigException = RedisConfigException;
//# sourceMappingURL=redis-config.exception.js.map