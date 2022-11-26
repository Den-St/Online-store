import { CharacteristicT } from "./characteristic.type";

export type CategoryT = {
    name:string;
    parentId:number;
    id:number;
    isMain:boolean;
}

export type DetailedCategoryT = {
    name:string;
    parentId:number;
    id:number;
    isMain:boolean;
    characteristics:CharacteristicT[];
}

export interface getNotMainCategoryRes {
    getAllNotMainCategories:CategoryT[]
}

export type GetCategoriesLine = {
    getCategoriesLine:CategoryT[],
}

export interface GetCategoryRes {
    getCategoryById:DetailedCategoryT
}

export interface GetMainCategoriesRes {
    getAllMainCategories:CategoryT[]
}

export interface getChildCategoriesRes {
    getChildCategories:CategoryT[]
}