// noinspection JSUnusedGlobalSymbols

import { IRoleEntity } from "./role-entity.interface";

export interface IUserEntity {
    id: any;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    username?: string;
    email?: string;
    password: string;
    salt: string;
    role?: IRoleEntity | string;
}
