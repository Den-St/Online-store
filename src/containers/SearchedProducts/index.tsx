import { useRecoilState } from "recoil";
import { cartProductsState } from "../../atoms/cart-products.atom";
import { SearchedProductsComponent } from "../../components/SearchedProducts"
import { useFavoriteProducts } from "../../hooks/favorite-products.hook";
import { useSearchProducts } from "../../hooks/searchProducts.hook"

export const SearchedProducts = () => {
    const {loading,data,onChangePage,setOrderRule,pageNumber,searchText} = useSearchProducts();
    const {changeFavoriteStatus,checkIfFavorite} = useFavoriteProducts();
    const productsIdsInCart = useRecoilState(cartProductsState)[0];
    
    return <SearchedProductsComponent searchText={searchText} changeFavoriteStatus={changeFavoriteStatus}
     loading={loading} total={data?.searchProducts.total} products={data?.searchProducts.products} checkIfFavorite={checkIfFavorite}
    onChangePage={onChangePage} setOrderRule={setOrderRule} pageNumber={pageNumber} productsIdsInCart={productsIdsInCart.products} />
}