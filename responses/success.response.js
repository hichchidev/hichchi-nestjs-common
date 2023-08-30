"use strict";
// noinspection JSUnusedGlobalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
class SuccessResponse {
    constructor(message, status) {
        this.code = "SUCCESS";
        this.message = message !== null && message !== void 0 ? message : "success";
        this.status = status !== null && status !== void 0 ? status : 200;
    }
}
exports.SuccessResponse = SuccessResponse;
//# sourceMappingURL=success.response.js.map