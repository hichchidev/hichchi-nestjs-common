"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanTransformer = void 0;
const BooleanTransformer = ({ value }) => String(value) === "true" ? true : String(value) === "false" ? false : undefined;
exports.BooleanTransformer = BooleanTransformer;
//# sourceMappingURL=boolean.transformer.js.map