import { atom } from 'recoil';
export const cartProductsState = atom({
    default:{products:[] as number[] | undefined,isLoading:true},
    key:"cartProductState"
})