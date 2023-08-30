"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyTemplate = exports.toErrorObject = exports.toErrString = void 0;
const json_converter_1 = require("./json.converter");
const hichchi_utils_1 = require("hichchi-utils");
const toErrString = (errObj) => {
    return {
        message: (0, json_converter_1.toString)(errObj),
    };
};
exports.toErrString = toErrString;
const toErrorObject = (str) => {
    return (0, json_converter_1.toJSON)(str);
};
exports.toErrorObject = toErrorObject;
const applyTemplate = (str, prefix) => {
    return str
        .replace("#{upperCase}", prefix.toUpperCase())
        .replace("#{snakeCase}", (0, hichchi_utils_1.toSnakeCase)(prefix))
        .replace("#{upperSnakeCase}", (0, hichchi_utils_1.toSnakeCase)(prefix, true))
        .replace("#{lowerCase}", prefix.toLowerCase())
        .replace("#{sentenceCase}", (0, hichchi_utils_1.toSentenceCase)(prefix))
        .replace("#{firstCase}", (0, hichchi_utils_1.toFirstCase)(prefix));
};
exports.applyTemplate = applyTemplate;
//# sourceMappingURL=error-message.converter.js.map