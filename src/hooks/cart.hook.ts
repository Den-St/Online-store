import { BuyProductsQuery } from './../queries/buy-products.query';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import { ChangeProductNumberType,GetCartRes } from './../types/cart.type';
import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { useQuery, useMutation } from '@apollo/client';
import { GetCartQuery } from '../queries/get-cart.query';
import { DeleteProductFromCartQuery } from '../queries/delete-product-from-cart.query';
import { ChangeProductNumberQuery } from '../queries/change-product-number.query';
import { debounce } from '@mui/material';
import { cartProductsState } from '../atoms/cart-products.atom';
import { BuyProductT,DeleteProductFromCartT  } from '../types/cart.type';

export type CartItemsStateT = Record<number, {value: number}>;
export type CartItemsInvalidValueStateT = Record<number, {isInvalid: boolean}>;

export const useCart = () => {
    const user = useRecoilValue(userState);
    const {data,loading,refetch} = useQuery<GetCartRes,{id?:number}>(GetCartQuery,{variables:{id:user.user.id}, nextFetchPolicy: "cache-and-network"});
    const [onDelete] = useMutation<undefined,DeleteProductFromCartT>(DeleteProductFromCartQuery);
    const [onChange] = useMutation<undefined,ChangeProductNumberType>(ChangeProductNumberQuery);
    const [cartProducts,setCartProducts] = useState<CartItemsStateT>({});
    const [productsIdsInCart,setProductsIdsInCart] = useRecoilState(cartProductsState);
    const [invalidValues,setInvalidValues] = useState<CartItemsInvalidValueStateT>({});
    const [buy] = useMutation<undefined,BuyProductT>(BuyProductsQuery);
    const [isOnBuyAnimation,setIsOnBuyAnimation] = useState(false);

    useEffect(() => {
        const cartItemsState: CartItemsStateT = {};
        const cartItemsInvalidState: CartItemsInvalidValueStateT = {};
        data?.getCartByUserId?.forEach(el => {
            const index = Number(el.product.id);
            if(!index) return;

            cartItemsState[index] = {value: el.number};
        })
        setCartProducts(cartItemsState);

        data?.getCartByUserId?.forEach(el => {
            const index = Number(el.product.id);
            if(!index) return;

            cartItemsInvalidState[index] = {isInvalid: false};
        })
    },[data?.getCartByUserId?.length]);

    const changeCart = (id: number,amountInStorage:number) => async (value: React.ChangeEvent<HTMLInputElement>) =>{
        if(Number(value.target.value) >= 1000){
            setInvalidValues(prev => ({...prev,[id]:{isInvalid:true}}));
            setCartProducts(prev => ({...prev, [id]: {value: Number(value.target.value || 0)}}));
            return; 
        } 
        if(Number(value.target.value) > amountInStorage) {
            setInvalidValues(prev => ({...prev,[id]:{isInvalid:true}}));
            setCartProducts(prev => ({...prev, [id]: {value: Number(value.target.value || 0)}}));
            return;
        }
        else if(Number(value.target.value) >= 1 ){
            setInvalidValues(prev => ({...prev,[id]:{isInvalid:false}}));
            setCartProducts(prev => ({...prev, [id]: {value: Number(value.target.value || 0)}}));
        }
        await onChangeNumberOfProducts(id,Number(value.target.value || 0));
    }

    const onClickDelete = async (productId?:number) => {
        setProductsIdsInCart({products:productsIdsInCart?.products?.filter(prodId => prodId != productId),isLoading:false});

        try{
            await onDelete({
            variables:{
                dto:{
                    productId:Number(productId),
                    userId:Number(user.user.id)
                }
            }
        });
        await refetch();
        }
        catch(err){
            console.log(err)
        }
    }

    const onChangeNumberOfProducts = debounce( async (productId:number,number:number) => {
        try{
            await onChange({variables:{
                dto:{
                    userId:Number(user.user.id),
                    productId:Number(productId),
                    number:Number(number)
                }
            }});
        }catch(err){
            console.log(err)
        }
        
    },1000);

    const getCartItems = () => {
        const cartItems:{productId:number,number:number}[] = [];
        const cartProducts = data?.getCartByUserId;
        if(cartProducts) {
            cartProducts.map(el => cartItems.push({productId:Number(el.product.id),number:Number(el.number)}));
        }

        return cartItems;
    }

    const onBuy = async () => {
        try{
            await buy({variables:{
            dto:{
                buyerId:Number(user.user.id),
                cartItems:[...getCartItems()]
            }
        }});

        await refetch();
        setProductsIdsInCart({products:[],isLoading:false});


        setIsOnBuyAnimation(true);
        setTimeout(() => setIsOnBuyAnimation(false),5000);
        }catch(err){
            console.log(err)
        }
    }

    return {isOnBuyAnimation,onBuy,invalidValues,changeCart,cartProducts,
        data,loading,onClickDelete,onChangeNumberOfProducts};
}