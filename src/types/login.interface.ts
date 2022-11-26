import {RoleType} from "./role.type";

export interface LoginInterface {
    email:string;
    password:string;
}

export type LoginReq = {
    dto: {
        email:string,
        password:string,
    }
}

export type LoginRes = {
    login:{
        token?: string
        id:number;
        name:string;
        email:string;
        phoneNumber:string;
        roles:RoleType[];
    }
}