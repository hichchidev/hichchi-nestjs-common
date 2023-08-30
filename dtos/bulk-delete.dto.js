"use strict";
// noinspection JSUnusedGlobalSymbols
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulkDeleteDto = void 0;
const class_validator_1 = require("class-validator");
const converters_1 = require("../converters");
const responses_1 = require("../responses");
class BulkDeleteDto {
}
exports.BulkDeleteDto = BulkDeleteDto;
__decorate([
    (0, class_validator_1.IsArray)((0, converters_1.toErrString)(responses_1.Errors.E_400_INVALID_IDS)),
    (0, class_validator_1.IsNotEmpty)((0, converters_1.toErrString)(responses_1.Errors.E_400_EMPTY_IDS)),
    __metadata("design:type", Array)
], BulkDeleteDto.prototype, "ids", void 0);
//# sourceMappingURL=bulk-delete.dto.js.map