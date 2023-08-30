"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const Errors = {
    E_400_EMPTY_IDS: {
        status: 400,
        code: "#{upperSnakeCase}_400_EMPTY_IDS",
        message: "#{sentenceCase} ids cannot be empty!",
    },
    E_400_INVALID_IDS: {
        status: 400,
        code: "#{upperSnakeCase}_400_INVALID_IDS",
        message: "Invalid value for #{lowerCase} ids!",
    },
    E_404_FILE_NOT_EXIST: {
        status: 404,
        code: "#{upperSnakeCase}_404_FILE_NOT_EXIST",
        message: "Error file does not exists!",
    },
    E_500: {
        status: 500,
        code: "#{upperSnakeCase}_500",
        message: "Unspecific error!",
    },
    ERROR: {
        status: 500,
        code: "ERROR_500",
        message: "Internal Server Error!",
    },
};
exports.Errors = Errors;
//# sourceMappingURL=error.responses.js.map