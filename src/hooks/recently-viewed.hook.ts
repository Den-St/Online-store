import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { ProductT } from './../types/product.type';
import { gql, useQuery } from '@apollo/client';
import { GetViewedProductsQuery } from '../queries/get-viewed-products.query';
export const useRecentlyViewed = () => {
    const user = useRecoilValue(userState)
    const {data,loading} = useQuery<{getUsersRecentlyViewed:ProductT[]},{userId?:number}>(GetViewedProductsQuery,{variables:{userId:user.user.id}})
    
    return {data,loading};
}