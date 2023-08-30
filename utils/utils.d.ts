import { ClassConstructor } from "class-transformer";
export declare const throwDtoValidationError: (errors: string | string[]) => void;
export declare const validateDto: <T extends object, V>(dto: ClassConstructor<T>, obj: V) => Promise<T>;
//# sourceMappingURL=utils.d.ts.map