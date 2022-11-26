import { ProductT } from "./product.type"
import { UserType } from "./user.type"

export type GetReviewReq = {
    dto:{
        productId: number,
        skip:number,
        limit:number
      }
}

export type GetReviewRes = {
  getReviews:ReviewT[]
}

export interface CreateReviewFormInterface {
  text:string,
  consText:string,
  prosText:string
}

export type ReviewT = {
    id:number;
    createdAt:Date;
    updatedAt:Date;
    creator:UserType;
    text:string;
    parentId:number;
    product:ProductT;
    consText:string;
    prosText:string;
    rate:number;
}

export type CreateReviewReq = {
  dto:{
      userId: number,
      productId: number,
      text: string,
      consText?: string,
      prosText?: string,
      rate: number
  }
}