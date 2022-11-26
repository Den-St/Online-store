import React from 'react';
import HeaderComponent from "../../components/Header";
import { useRecoilValue} from "recoil";
import {userState} from "../../atoms/user.atom";
import { cartProductsState } from '../../atoms/cart-products.atom';
import { useSearchBarProducts } from '../../hooks/searchProducts.hook';

const Header = () => {
    const user = useRecoilValue(userState);
    const numberOfProductsInCart = useRecoilValue(cartProductsState)?.products?.length;
    const {data,debounceRefetch,loading} = useSearchBarProducts();
    return <HeaderComponent search={debounceRefetch} loading={loading} products={data?.searchProducts.products} numberOfProductsInCart={numberOfProductsInCart} user={user.user}/>
};

export default Header;