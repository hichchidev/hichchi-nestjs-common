// noinspection JSUnusedGlobalSymbols

import { IsArray, IsNotEmpty, IsUUID } from "class-validator";
import { Errors } from "../responses";

export class BulkDeleteDto {
    @IsUUID(4, { each: true, message: Errors.E_400_INVALID_UUID.message })
    @IsArray(Errors.E_400_NOT_ID_ARRAY)
    @IsNotEmpty(Errors.E_400_EMPTY_IDS)
    ids: string[];
}
