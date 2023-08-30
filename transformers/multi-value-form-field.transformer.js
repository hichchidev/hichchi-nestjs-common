"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiValueFormFieldTransformer = void 0;
const MultiValueFormFieldTransformer = ({ value }) => {
    return Array.isArray(value) ? value : [value];
};
exports.MultiValueFormFieldTransformer = MultiValueFormFieldTransformer;
//# sourceMappingURL=multi-value-form-field.transformer.js.map