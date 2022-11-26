import { ImageT } from "./image.type";

export type CompanyT = {
    name:string;
    creatorId:number;
    id:number;
    image:ImageT;
}

export interface CreateCompanyInterface {
    name:string;
    image?:File;
}

export interface CreateCompanyRes {
    createCompany:{
        name:string;
    }
}

export interface CreateCompanyReq {
    dto:{
        name:string;
        creatorId?:number;
        image?:File;
    }
}

export interface GetUsersCompaniesReq {
    id?:number;
}

export interface GetUsersCompaniesRes {
    getUsersCompanies:CompanyT[]
}