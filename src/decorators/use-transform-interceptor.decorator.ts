import { UseInterceptors } from "@nestjs/common";
import { TransformInterceptor } from "../interceptors";
import { IViewDto } from "../interfaces"; // Update this path as needed

export const UseTransformInterceptor = (
    dto: IViewDto,
): ((target: any, key: string, descriptor: PropertyDescriptor) => TypedPropertyDescriptor<any> | void) => {
    return (target: any, key: string, descriptor: PropertyDescriptor): TypedPropertyDescriptor<any> | void => {
        const interceptor = new TransformInterceptor(dto);
        return UseInterceptors(interceptor)(target, key, descriptor);
    };
};
