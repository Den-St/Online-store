import { useRecoilState } from "recoil";
import { cartProductsState } from "../../../atoms/cart-products.atom";
import { ProductsComponent } from "../../../components/ProductsByCategoryPage/Products"
import { useFavoriteProducts } from "../../../hooks/favorite-products.hook";
import { OrderRuleT } from "../../../types/order-rule.type";
import { ProductT } from "../../../types/product.type";

type Props = {
    products?:ProductT[],
    loading:boolean,
    pageNumber?:number,
    onChangePage:(pageNumber:number) => void,
    total?:number,
    onChangeOrderRule:(orderRule:OrderRuleT) => void;
    currentOrderRule:OrderRuleT
}

export const Products:React.FC<Props> = ({currentOrderRule,onChangeOrderRule,total,onChangePage,pageNumber,products,loading}) => {
    const {changeFavoriteStatus,checkIfFavorite} = useFavoriteProducts();
    const productsIdsInCart = useRecoilState(cartProductsState)[0];
    
    return <ProductsComponent currentOrderRule={currentOrderRule} onChangeOrderRule={onChangeOrderRule} total={total} 
    pageNumber={pageNumber} onChangePage={onChangePage} changeFavoriteStatus={changeFavoriteStatus} 
    checkIfFavorite={checkIfFavorite}  productsIdsInCart={productsIdsInCart.products} 
    products={products} loading={loading} />
}