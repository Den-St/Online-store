import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartProductsState } from "../atoms/cart-products.atom";
import { userState } from "../atoms/user.atom";
import { GetProductIdsInCart } from "../queries/get-product-ids-in-cart.query";

export const useCartProvider = () => {
    const [user] = useRecoilState(userState);

    const {data} = useQuery<{getProductIdsInCartByUserId:number[]},{id?:number}>(GetProductIdsInCart,{variables:{id:user.user.id},skip:!user.user.id})
    const setProductsId = useSetRecoilState(cartProductsState);
    
    useEffect(() => {
        if(data?.getProductIdsInCartByUserId?.length !== undefined){
            setProductsId({products:data?.getProductIdsInCartByUserId,isLoading:false});
        }
    },[data?.getProductIdsInCartByUserId?.length]);
}