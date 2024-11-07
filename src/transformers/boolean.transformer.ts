// noinspection JSUnusedGlobalSymbols

import { TransformFnParams } from "class-transformer";

/**
 * Boolean transformer
 *
 * A transformer to use in DTOs as a `TransformFn` for the `Transform` property decorator from the `class-transformer` package.
 *
 * This transformer converts the property value to a `boolean` if it is the string `"true"` or `"false"`.
 * Otherwise, it returns `undefined`.
 *
 * @example
 * ```typescript
 * export class DTO {
 *    @Transform(BooleanTransformer)
 *    isActive: boolean | undefined;
 * }
 * ```
 *
 * @param {TransformFnParams} params - Parameters passed to the transformer
 * @returns {boolean|undefined} - Transformed `boolean` value or `undefined`
 */
export function BooleanTransformer(params: TransformFnParams): boolean | undefined {
    return BooleanTransformerWithDefault(undefined)(params);
}

/**
 * Boolean transformer with default value
 *
 * A transformer to use in DTOs as a `TransformFn` for the `Transform` property decorator from the `class-transformer` package.
 *
 * This transformer converts the property value to a `boolean` if it is the string `"true"` or `"false"`.
 * Otherwise, it returns the default value passed to the transformer.
 *
 * @example
 * ```typescript
 * export class DTO {
 *    @Transform(BooleanTransformerWithDefault(false))
 *    isActive: boolean;
 * }
 * ```
 *
 * @param {boolean} defaultValue - Default value to return if the property value is not `"true"` or `"false"`
 * @returns Transformer function with default value added
 */
export function BooleanTransformerWithDefault(
    defaultValue: boolean,
): (params: TransformFnParams) => boolean | undefined {
    return function (params: TransformFnParams): boolean | undefined {
        return String(params.value) === "true" ? true : String(params.value) === "false" ? false : defaultValue;
    };
}
