import {RoleType} from "./role.type";

export interface RegistrationInterface{
    email:string;
    password:string;
    name:string;
    phoneNumber:string;
}

export type RegisterReq = {
    dto: {
        email:string,
        name:string,
        password:string,
        phoneNumber:string,
    }
}

export type RegisterRes = {
    register:{
        token?: string;
        id:number;
        name:string;
        email:string;
        phoneNumber:string;
        roles:RoleType[];
    }
}