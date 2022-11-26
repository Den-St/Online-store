import { useRecoilValue } from 'recoil';
import { cartProductsState } from '../../atoms/cart-products.atom';
import {RecentlyViewedComponent} from '../../components/Cabinet/RecentlyViewed';
import { useFavoriteProducts } from '../../hooks/favorite-products.hook';
import { useRecentlyViewed } from '../../hooks/recently-viewed.hook';
import {CabinetLayout} from "./CabinetLayout";

export const RecentlyViewed = () => {
    const {data,loading} = useRecentlyViewed();
    const productsInCart = useRecoilValue(cartProductsState);
    const {changeFavoriteStatus,checkIfFavorite} = useFavoriteProducts();

    return <CabinetLayout>
        <RecentlyViewedComponent changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite} productsInCart={productsInCart.products } loading={loading} products={data?.getUsersRecentlyViewed} />
    </CabinetLayout>
}