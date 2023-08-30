"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTransformer = void 0;
const DateTransformer = ({ value }) => {
    if (typeof value.getMonth === "function") {
        return value;
    }
    return new Date(value);
};
exports.DateTransformer = DateTransformer;
//# sourceMappingURL=date.transformer.js.map