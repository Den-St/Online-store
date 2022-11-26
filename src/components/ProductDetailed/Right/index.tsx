import { SvgIcon } from "../../../assets/svg/SvgIcon";
import { routes } from "../../../constants/routes";
import { ProductT } from "../../../types/product.type"
import { CharacteristicHeader } from "../../Cabinet/CreateProduct/Characteristics/styles"
import { AddToCartButton, AlreadyInCart, CharacteristicItem, CharacteristicName, CharacteristicsContainer, CharacteristicValue, CompanyContainer, CompanyLogo, CompanyName, Container, Description, DescriptionContainer, DescriptionHeader, DottedLine, IsInStockContainer, Minus, NoMoreInStock, Price, PriceContainer, Tick } from "./styles"

type Props = {
    product?:ProductT;
    onAddProductToCart:() => Promise<void>;
    isAlreadyInCart:boolean,
}

export const Right:React.FC<Props> = ({isAlreadyInCart,product,onAddProductToCart,}) => {

    return <Container>
        {!!product?.amountInStorage ? <IsInStockContainer>
            <Tick><SvgIcon type="pick"/></Tick>
            In stock!
        </IsInStockContainer> : <NoMoreInStock><Minus>-</Minus>No more in stock(</NoMoreInStock>}
        <PriceContainer>
            <Price>{product?.price} ₴</Price>
            {!isAlreadyInCart && <AddToCartButton $blocked={!product?.amountInStorage} disabled={!product?.amountInStorage} onClick={onAddProductToCart}>
                <SvgIcon type={"cart"}/> Buy
            </AddToCartButton>}

            {isAlreadyInCart && <AlreadyInCart to={routes.cart}>
                <SvgIcon type="cart"/> In cart
            </AlreadyInCart>}

        </PriceContainer>
        <CompanyContainer><CompanyName>Seller: {product?.seller.name}</CompanyName><CompanyLogo src={product?.seller.image.url}/></CompanyContainer>
        
        <CharacteristicsContainer>
            <CharacteristicHeader>Characteristics:</CharacteristicHeader>
            {product?.characteristics.map((char) => 

            <CharacteristicItem key={char.id}>
                <CharacteristicName>{char.name}<DottedLine/></CharacteristicName>
                <CharacteristicValue>{char.value?.name}</CharacteristicValue>
            </CharacteristicItem>)}

        </CharacteristicsContainer>

        <DescriptionContainer>
            <DescriptionHeader>Description:</DescriptionHeader>
            <Description>{product?.textDescription}</Description>
        </DescriptionContainer>
    </Container>
}