import { ProductT } from './../types/product.type';
import { atom } from 'recoil';
export const favoriteProductsState = atom({
    default:{products:[] as ProductT[],isLoading:false},
    key:"favoriteProductsState"
})