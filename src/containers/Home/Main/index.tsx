import { useRecoilState } from "recoil";
import { cartProductsState } from "../../../atoms/cart-products.atom";
import { MainComponent } from "../../../components/Home/Main"
import { useFavoriteProducts } from "../../../hooks/favorite-products.hook";
import {useGetAllProducts} from "../../../hooks/get-all-products.hook"

export const Main = () => {
    const {data,loading,pageNumber,onChangePage} = useGetAllProducts();
    const [productsIdsInCart] = useRecoilState(cartProductsState);
    const {changeFavoriteStatus,checkIfFavorite} = useFavoriteProducts();

    return <MainComponent total={data?.getAllProducts.total} pageNumber={pageNumber} onChangePage={onChangePage} changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite} productsIdsInCart={productsIdsInCart.products} loading={loading} products={data?.getAllProducts.products} />
}