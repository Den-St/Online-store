import { SvgIcon } from "../../../assets/svg/SvgIcon"
import { routes } from "../../../constants/routes"
import { AddToCartContainer, AlreadyInCart, Container, FavoriteButton, Name, Photo, Price, Tick } from "./styles"

type Props = {
    photo?:string,
    name?:string,
    price?:number,
    id:number,
    isAlreadyInCart:boolean,
    changeFavoriteStatus:(id:number) => Promise<void>,
    checkIfFavorite:(id:number) => boolean,
}

export const ProductItem:React.FC<Props> = ({changeFavoriteStatus,checkIfFavorite,isAlreadyInCart,id,photo,name,price}) => {
    return <Container>
        <FavoriteButton onClick={() => changeFavoriteStatus(id)}>
            {checkIfFavorite(id) ? <SvgIcon type="favoriteFilled"/> : <SvgIcon type="favorite"/>}
        </FavoriteButton>
        <Photo to={routes.product.replace(':id',id.toString())}><img src={photo}/></Photo>
        <Name to={routes.product.replace(':id',id.toString())}>{name?.slice(0,40)}</Name>
        <AddToCartContainer>
            <Price>{price} ₴</Price>
            {isAlreadyInCart ? <AlreadyInCart><SvgIcon type={"cart"}/><Tick><SvgIcon type={"pick"}/></Tick></AlreadyInCart> :  <SvgIcon type={"cart"}/>}
        </AddToCartContainer>
    </Container>
}