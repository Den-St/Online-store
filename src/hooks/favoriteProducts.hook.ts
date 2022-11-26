import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { favoriteProductsState } from "../atoms/favorite-products.atom";
import { userState } from "../atoms/user.atom";
import { GetFavoriteProductsQuery } from "../queries/get-favorite-products.query";
import { ProductT } from "../types/product.type";

export const useFavoriteProductsProvider = () => {
    const user = useRecoilValue(userState);
    const {data,loading} = useQuery<{getUsersFavoriteProducts:ProductT[]},{userId?:number}>(GetFavoriteProductsQuery,{variables:{userId:user.user.id},skip:!user.user.id});
    const [state,setState] = useRecoilState(favoriteProductsState)
    
    useEffect(() => {
        if(data?.getUsersFavoriteProducts.length !== undefined) {
            setState({products:data?.getUsersFavoriteProducts || [],isLoading:false});
        }
    }, [data?.getUsersFavoriteProducts.length])
    
}