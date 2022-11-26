import {RoleType} from "./role.type";

export type UserType = {
    id?:number;
    name?:string;
    email?:string;
    phoneNumber?:string;
    roles?:RoleType[];
}

export interface UserEditInterface {
    name:string;
    email:string;
    phoneNumber:string;
    id?:number;
}

export interface UserEditRes {
    editUserInfo:{
        token?: string;
    }
}

export interface UserEditReq {
    dto: UserEditInterface
}