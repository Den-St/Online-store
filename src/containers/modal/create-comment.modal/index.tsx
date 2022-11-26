import { useState } from "react"
import { Overlay } from "../../../components/ui-kit/Modal/overlay"
import { BasePortal } from "../../../components/ui-kit/Modal/Portal"
import { CreateCommentForm } from "../../CreateCommentForm"
import { Container } from "./styles"

type Props = {
    button:React.ReactNode,
    reviewId?:number,
    commentCreatorName?:string
}

export const CreateCommentModal:React.FC<Props> = ({reviewId,commentCreatorName,button}) => {
    const [opened,setOpened] = useState(false);
    return <>
        <div onClick={() => setOpened(true)}>
            {button}
        </div>
        {opened && <BasePortal>
            <Container>
                <Overlay onClick={() => setOpened(false)}/>
                <CreateCommentForm close={() => setOpened(false)} commentCreatorName={commentCreatorName} reviewId={reviewId}/>
            </Container>
        </BasePortal>}
    </>
}