import { ProductT } from "./product.type"

export type AddProductToCartT = {
    dto:{
        productId?:number,
        userId?:number,
    }
}

export type CartProductT = {
    product:ProductT,
    number:number
}

export type GetCartRes = {
    getCartByUserId:CartProductT[],
}

export type ChangeProductNumberType = {
    dto:{
        userId?:number;
        productId?:number;
        number?:number;
    }
}

export type DeleteProductFromCartT = {
    dto:{
        productId?:number,
        userId?:number,
    }
}

export type BuyProductT = {
    dto:{
         buyerId?:number;
         cartItems?:{
             productId?:number;
             number?:number;
         }[]
     }
 }


