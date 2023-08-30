"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJSON = exports.toString = void 0;
const toString = (object) => {
    return JSON.stringify(object);
};
exports.toString = toString;
const toJSON = (string) => {
    return JSON.parse(string);
};
exports.toJSON = toJSON;
//# sourceMappingURL=json.converter.js.map