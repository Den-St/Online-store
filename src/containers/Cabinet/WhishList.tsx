import { useRecoilValue } from 'recoil';
import { cartProductsState } from '../../atoms/cart-products.atom';
import {WishListComponent} from '../../components/Cabinet/WishList';
import { useFavoriteProducts } from '../../hooks/favorite-products.hook';
import {CabinetLayout} from "./CabinetLayout";

export const WhishList = () => {
    const {productsIds,changeFavoriteStatus,checkIfFavorite,products} = useFavoriteProducts() 
    const productsInCart = useRecoilValue(cartProductsState);

    return <CabinetLayout>
        <WishListComponent productsInCart={productsInCart.products}  products={products.products} checkIfFavorite={checkIfFavorite}
         changeFavoriteStatus={changeFavoriteStatus} loading={false}  />
    </CabinetLayout>
}