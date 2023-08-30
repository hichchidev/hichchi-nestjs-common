"use strict";
// noinspection JSUnusedGlobalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = exports.throwDtoValidationError = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const throwDtoValidationError = (errors) => {
    const errorObject = { statusCode: 400, message: Array.isArray(errors) ? errors : [errors], error: "Bad Request" };
    throw new common_1.BadRequestException(errorObject, "Bad Request Exception");
};
exports.throwDtoValidationError = throwDtoValidationError;
const validateDto = async (dto, obj) => {
    const objInstance = (0, class_transformer_1.plainToInstance)(dto, obj);
    const validationErrors = await (0, class_validator_1.validate)(objInstance);
    if (validationErrors.length) {
        const errors = [];
        validationErrors.forEach((error) => { var _a; return errors.push(...Object.values((_a = error.constraints) !== null && _a !== void 0 ? _a : [])); });
        (0, exports.throwDtoValidationError)(errors);
    }
    return objInstance;
};
exports.validateDto = validateDto;
//# sourceMappingURL=utils.js.map