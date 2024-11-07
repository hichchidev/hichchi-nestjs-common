// noinspection JSUnusedGlobalSymbols

import { IRoleEntity } from "./role-entity.interface";

export interface IUserEntity {
    id: string | number;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    username?: string;
    email?: string;
    password: string;
    salt: string;
    role?: IRoleEntity | string;
}
