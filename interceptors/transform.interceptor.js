"use strict";
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
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let TransformInterceptor = class TransformInterceptor {
    constructor(viewDto) {
        this.viewDto = viewDto;
    }
    intercept(_context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            if (data === null) {
                return null;
            }
            if (Array.isArray(data)) {
                return data.map((item) => this.viewDto.formatDataSet(item));
            }
            if (data.hasOwnProperty("data")) {
                return Object.assign(Object.assign({}, data), { data: data.data.map((item) => this.viewDto.formatDataSet(item)) });
            }
            return this.viewDto.formatDataSet(data);
        }));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], TransformInterceptor);
//# sourceMappingURL=transform.interceptor.js.map