import { useRecoilState } from "recoil"
import { cartProductsState } from "../../atoms/cart-products.atom"
import { ProductDetailedComponent } from "../../components/ProductDetailed"
import { useAddProductToCart } from "../../hooks/add-product-to-cart.hook"
import { useChoosePhoto } from "../../hooks/choose-photo.hook"
import { useDetailedProduct } from "../../hooks/detailed-product.hook"

export const ProductDetailed = () => {
    const {product,categoriesLine} = useDetailedProduct();
    const {choosePhotoIndex,chosenPhotoIndex,nextPhoto,prevPhoto} = useChoosePhoto();
    const {onAddProductToCart,isOnNotificationAnimation} = useAddProductToCart()
    const [productsIdsInCard] = useRecoilState(cartProductsState);
    const isAlreadyInCard = !!productsIdsInCard?.products?.find(productId => productId == product?.getOneProduct.id);

    return <ProductDetailedComponent isOnNotificationAnimation={isOnNotificationAnimation} isAlreadyInCart={isAlreadyInCard} 
    choosePhotoIndex={choosePhotoIndex} onAddProductToCart={onAddProductToCart}
    chosenPhotoIndex={chosenPhotoIndex} nextPhoto={nextPhoto} prevPhoto={prevPhoto} 
    categoriesLine={categoriesLine?.getCategoriesLine} product={product?.getOneProduct}/>
}