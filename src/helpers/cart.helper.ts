import { CartProductT } from './../types/cart.type';
import { ProductT } from './../types/product.type';
export const countSameProducts = (arr:ProductT[],id:number):number => {
    let n = 0;

    arr.map(prod => {
        if(prod.id == id){
            ++n;
        }
    })

    return n;
}

export const haveFilteredProduct = (arr:CartProductT[],id:number) => {
    for(let i = 0;i < arr.length;i++) {
        if(arr[i].product.id == id) return true;
    }
    return false;
}