import { SvgIcon } from "../../assets/svg/SvgIcon";
import { BuyButtonContainer, Container,Image,Name,DeleteButton,ItemBottom, Number,ItemContainer, ItemTop, Wrapper, PriceContainer, Price, Total, BuyButton } from "./styles"
import {cabinetRoutes, routes} from "../../constants/routes";
import {CartProductT} from "../../types/cart.type";
import React from "react";
import { CartItemsInvalidValueStateT, CartItemsStateT } from "../../hooks/cart.hook";
import { EmptyCart } from "./EmptyCart";
import Error from "../ui-kit/Form/Error/Error";
import { Notiification, Open } from "../ui-kit/Notification";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

type Props = {
    cart?:CartProductT[];
    loading:boolean;
    onClickDelete:(productId?:number,numberId?:number) => Promise<void>,
    changeCart:(id:number,amountInStorage:number) => (value:React.ChangeEvent<HTMLInputElement>) => void,
    cartProducts?:CartItemsStateT;
    invalidValues:CartItemsInvalidValueStateT,
    onBuy:() => Promise<void>,
    isOnBuyAnimation:boolean
}

export const CartComponent:React.FC<Props> = ({isOnBuyAnimation,onBuy,invalidValues,cartProducts,changeCart,onClickDelete,cart,loading}) => {
    return <Container>
            {!loading ? 
                <Wrapper>{
                cart?.length ?
                cart?.map(
                cartItem => 
                <ItemContainer key={cartItem.product.id}>
                    <ItemTop>
                        <Image key={cartItem.product.id} src={cartItem.product.images.find(img => img.isMain)?.url}/>
                        <Name to={routes.product.replace(":id",cartItem.product.id.toString())}>{cartItem.product.name}</Name>
                        <DeleteButton onClick={() => onClickDelete(cartItem.product.id)}><SvgIcon type={"delete"}/></DeleteButton>
                    </ItemTop>
                    <ItemBottom>
                        {invalidValues?.[cartItem.product.id]?.isInvalid && <Error message="You want to buy to much"/>}
                        <PriceContainer>
                            <Number type={"number"} value={cartProducts?.[cartItem.product.id]?.value} onChange={changeCart(cartItem.product.id,cartItem.product.amountInStorage)}/>
                            x
                            <Price>{cartItem.product.price}</Price>
                            =
                            <Total>{(cartProducts?.[cartItem.product.id]?.value || 1) * cartItem.product.price}</Total>
                        </PriceContainer>
                    </ItemBottom>
                </ItemContainer>) : <EmptyCart/>}
                {!loading && !!cart?.length && <BuyButtonContainer>
                    <Total>{cart?.reduce((prev,cur) => prev + (cartProducts?.[cur.product.id]?.value || 1)*cur.product.price,0)}</Total>
                    <BuyButton onClick={onBuy}>BUY</BuyButton>
                    </BuyButtonContainer>}
                
                </Wrapper>
            : <Spin indicator={<LoadingOutlined/>}/>
            }
            {isOnBuyAnimation && <Notiification>Look at your receipts.<Open to={cabinetRoutes.orders}>Open</Open></Notiification>}
    </Container>
}