import { CartComponent } from "../../components/Cart";
import { useCart } from "../../hooks/cart.hook";

export const Cart = () => {
    const {data,loading,changeCart,cartProducts,isOnBuyAnimation,onBuy,onClickDelete,invalidValues,onChangeNumberOfProducts} = useCart();
    
    return <CartComponent isOnBuyAnimation={isOnBuyAnimation} onBuy={onBuy} invalidValues={invalidValues} changeCart={changeCart} cartProducts={cartProducts}
     onClickDelete={onClickDelete}
     cart={data?.getCartByUserId} loading={loading}/>
}