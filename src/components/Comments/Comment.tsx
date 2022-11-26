import { SvgIcon } from "../../assets/svg/SvgIcon"
import { CreateCommentModal } from "../../containers/modal/create-comment.modal"
import { CommentT } from "../../types/comment.type"
import { MakeResponse } from "../Reviews/styled"
import { CommentContainer, Header, Main, Name, ResponsedToName,Text } from "./styles"

type Props = {
    comment?:CommentT
}

export const Comment:React.FC<Props> = ({comment}) => {
    return <CommentContainer>
        <Main>
            <Header>
                <Name>{comment?.creator.name}</Name>
                <ResponsedToName>to {!comment?.responseToCommentCreatorName ? comment?.commentToReview.creator.name : comment?.responseToCommentCreatorName}</ResponsedToName>
            </Header>
            <Text>
                {comment?.text}
            </Text>
        </Main>
        <CreateCommentModal reviewId={comment?.commentToReview.id} commentCreatorName={comment?.creator.name} button={<MakeResponse><SvgIcon type={'rollBack'} />make response</MakeResponse>}/>
    </CommentContainer>
}