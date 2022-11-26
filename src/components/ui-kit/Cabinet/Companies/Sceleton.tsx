import { SceletonContainer, SceletonImage, SceletonName } from "./styles"

export const CompanySceleton = () => {
    return <SceletonContainer>
        <SceletonImage/>
        <SceletonName/>
    </SceletonContainer>
}