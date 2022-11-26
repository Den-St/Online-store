import { SceletonContainer, SceletonName, SceletonPhoto, SceletonPrice } from "./styles"

export const CartSceleton = () => {
    return <SceletonContainer>
        <SceletonPhoto/>
        <SceletonName/>
        <SceletonPrice/>
    </SceletonContainer>
}