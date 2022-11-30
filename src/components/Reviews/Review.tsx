import { useState } from "react"
import { SvgIcon } from "../../assets/svg/SvgIcon"
import { Comments } from "../../containers/Comments"
import { CreateCommentModal } from "../../containers/modal/create-comment.modal"
import { ReviewT } from "../../types/review.type"
import { Rate } from "../CreateReview/Rate"
import { ReviewContainer,Text,Header, ReviewHeader, DirContainer, MakeResponse, CheckComments, ReviewBlock } from "./styled"

type Props = {
    review:ReviewT,
    isAuthed:boolean
}

export const ReviewComponent:React.FC<Props> = ({isAuthed,review}) => {
    const [isOpenComments,setIsOpenComments] = useState(false);

    return <ReviewBlock>
        <ReviewContainer key={review.id}>
        <ReviewHeader><SvgIcon type={'cart'}/>{review.creator.name}</ReviewHeader>
        <Rate isEditable={false} rateNumber={review.rate} setRateNumber={(n:number) => {}}/>
        
        <DirContainer>
            <Text>{review.text}</Text>
        </DirContainer>

        <DirContainer>
            <Header>Pros:</Header>
            <Text>{review.prosText}</Text>
        </DirContainer>

        <DirContainer>
            <Header>Cons:</Header>
            <Text>{review.consText}</Text>
        </DirContainer>

        {isAuthed && <CreateCommentModal commentCreatorName={''} reviewId={review.id} button={
            <MakeResponse><SvgIcon type={'rollBack'}/>make response</MakeResponse>
        }/>}
        <CheckComments onClick={() => setIsOpenComments(prev => !prev)}>Check comments</CheckComments>
    </ReviewContainer>
    {isOpenComments && <Comments reviewId={review.id}/>}
 </ReviewBlock>
}