import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { userState } from './../atoms/user.atom';
import { useParams } from 'react-router-dom';
import { AddProductToCartQuery } from './../queries/add-product-to-cart.query';
import { AddProductToCartT } from './../types/cart.type';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { cartProductsState } from '../atoms/cart-products.atom';

export const useAddProductToCart = () => {
    const {id:productId} = useParams();
    const user = useRecoilValue(userState);
    const [onAdd] = useMutation<undefined,AddProductToCartT>(AddProductToCartQuery);
    const [productsIdsInCart,setProductsIdsInCart] = useRecoilState(cartProductsState);
    const [isOnNotificationAnimation,setIsOnNotificationAnimation] = useState(false);

    const onAddProductToCart = async () => {
        try{
            await onAdd({variables:{
                dto:{
                    productId:Number(productId),
                    userId:Number(user.user.id),
                }
            }});
            setProductsIdsInCart((prev) => ({products:[...(prev.products || []), Number(productId)],isLoading:false}));
            setIsOnNotificationAnimation(true);
            setTimeout(() => setIsOnNotificationAnimation(false),4900);
        }catch(err){
            console.log(err);
        }
    }

    
    return {isOnNotificationAnimation,onAddProductToCart};
}