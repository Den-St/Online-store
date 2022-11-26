import { favoriteProductsState } from './../atoms/favorite-products.atom';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { useMutation } from '@apollo/client';
import { AddToFavoriteProductsQuery } from '../queries/add-to-favorite-products.query';
import { DeleteFromFavoriteProductsQuery } from '../queries/delete-from-favorite-products.query';

export const useFavoriteProducts = () => {
    const user = useRecoilValue(userState);
    const [onAdd] = useMutation<undefined,{dto:{userId?:number,productId?:number}}>(AddToFavoriteProductsQuery);
    const [onDelete] = useMutation<undefined,{dto:{userId?:number,productId?:number}}>(DeleteFromFavoriteProductsQuery);
    const [favoriteProducts,setFavoriteProducts] = useRecoilState(favoriteProductsState); 
    const [favoriteProductsIds,setIds] = useState<number[]>([]);

    useEffect(() => {
        setIds(favoriteProducts.products.map(prod => prod.id));
    },[favoriteProducts]);

    const changeFavoriteStatus = async (id:number) => {
        if(favoriteProducts.products.findIndex(prodId => prodId.id == id) !== -1){
            try{
                setFavoriteProducts(prev =>
                     ({products:[...prev.products.filter(prod => prod.id !== id)],isLoading:prev.isLoading}));

                setIds(prev => [...prev.filter(prodId => prodId !== id)]);
                await onDelete({variables:{
                    dto:{
                        userId:Number(user.user.id),
                        productId:Number(id)
                    }
                }});
                return;
            }catch(err){
                console.log(err);
            }
        }

        try{
            setIds(prev => [id,...prev]);

            await onAdd({variables:{
                dto:{
                    userId:Number(user.user.id),
                    productId:Number(id)
                }
            }});
        }catch(err){
            console.log(err);
        }
    }

    const checkIfFavorite = (id:number) => {
        return favoriteProductsIds.findIndex(prodId => prodId == id) !== -1;
    }

    return {productsIds:favoriteProductsIds,products:favoriteProducts,checkIfFavorite,changeFavoriteStatus};
}