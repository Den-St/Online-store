import { ProductT } from "./product.type";

export type ReceiptT = {
    id:number,
    product:ProductT,
    amountToBuy:number,
    status:'Not confirmed' | 'Done' | "Declained",
    createdAt:string
}
