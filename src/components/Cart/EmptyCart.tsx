import { EmptyCartContainer, EmptyCartImage, EmptyCartTitle } from "./styles"

export const EmptyCart = () => {
    return <EmptyCartContainer>
        <EmptyCartImage src={'https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg'}/>
        <EmptyCartTitle>Your cart is empty.</EmptyCartTitle>
    </EmptyCartContainer>
}