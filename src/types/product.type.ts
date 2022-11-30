import { CategoryT } from './category.type';
import { CharacteristicT } from './characteristic.type';
import { CompanyT} from './company.type';
import { ImageT } from './image.type';
import { OrderRuleT } from './order-rule.type';
import { DetailedCategoryT } from "./category.type";

export type ProductT = {
    id:number;
    name:string;
    category:CategoryT;
    price:number;
    textDescription: string;
    confirmed: boolean;
    discountPrice: number;
    isOnSale: boolean;
    amountInStorage: number;
    rating: number;
    characteristics:CharacteristicT[];
    popularity: number;
    seller:CompanyT;
    images:ImageT[];
}


export interface GetFilteredProductsRes {

    filterProducts:{
        products:ProductT[],
        total:number
    }
}

export interface GetProduct {
    getOneProduct:ProductT
}

export type FilterProductReq = {
    dto:{
        categoryId?:number,
        charValuesId:string[],
        page?:number,
        orderRule:OrderRuleT;
    }
}

export interface GetAllProductsRes{
    getAllProducts:{
        products:ProductT[],
        total:number
    }
}

export interface GetCategoryReq {
    getCategoryById:DetailedCategoryT;
}

export interface CreateProductInterface {
    categoryId: number,
    name: string,
    price: number,
    amountInStorage: number,
    sellerId: number,
    textDescription: string,
    valuesIds: number[],
    mainProductId:number,
    companyId:number,
    images:File[]
}

export interface CreateProductReq {
    dto:CreateProductInterface
}

export type SearchProductsRes = {
    searchProducts:{
        products:ProductT[],
        total:number
    }
}

export type SearchProductsReq = {
    dto:{
        productName?:string,
        orderRule:{
            fieldName:"popularity" | "price",
            orderValue:"DESC" | "ASC"
        },
        page:number,
    }
}