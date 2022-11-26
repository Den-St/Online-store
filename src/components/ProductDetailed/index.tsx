import { routes } from "../../constants/routes"
import { CreateReview } from "../../containers/CreateReview.tsx"
import { Reviews } from "../../containers/Reviews"
import { CategoryT } from "../../types/category.type"
import { ProductT } from "../../types/product.type"
import { Rate } from "../CreateReview/Rate"
import { Notiification, Open } from "../ui-kit/Notification"
import { Categories } from "./Categories"
import { Left } from "./Left"
import { Right } from "./Right"
import {  Container, Main, Name, ReviewsBlock } from "./styles"

type Props = {
    product?:ProductT,
    categoriesLine?:CategoryT[],
    prevPhoto:() => void;
    nextPhoto:() => void;
    choosePhotoIndex:(index:number) => void;
    chosenPhotoIndex:number;
    isAlreadyInCart:boolean,
    onAddProductToCart:() => Promise<void>;
    isOnNotificationAnimation:boolean;
}

export const ProductDetailedComponent:React.FC<Props> = ({isOnNotificationAnimation,isAlreadyInCart,choosePhotoIndex,chosenPhotoIndex,nextPhoto,prevPhoto,
                                                        categoriesLine,product,onAddProductToCart}) => {
    return <Container>
        <Categories categories={categoriesLine}/>
        <Name>{product?.name}</Name>
        <Rate rateNumber={product?.rating} setRateNumber={(n:number) => {}}/>
        <Main>
            <Left choosePhotoIndex={choosePhotoIndex} chosenPhotoIndex={chosenPhotoIndex}
            nextPhoto={nextPhoto} prevPhoto={prevPhoto} images={product?.images}/>
            
            <Right isAlreadyInCart={isAlreadyInCart} 
            onAddProductToCart={onAddProductToCart}
            product={product}/>
        </Main>
        <ReviewsBlock>
            <CreateReview/>
            <Reviews/>
        </ReviewsBlock>
        {isOnNotificationAnimation && <Notiification>Product was added at the cart.<Open to={routes.cart}>Open</Open></Notiification>}
    </Container>
}