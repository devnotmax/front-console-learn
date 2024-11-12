import { IUser } from "./User";
export interface UserBaned extends IUser {
    id: string;
    email: string;
    name: string;
    image: string;
    isBanned: boolean;
}