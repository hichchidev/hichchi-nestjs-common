export interface IUserEntity {
    id: any;
    username?: string;
    email?: string;
    password: string;
    salt: string;
    role?: string;
}
