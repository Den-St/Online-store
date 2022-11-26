import { useEffect } from "react"
import { CreateCommentFormComponent } from "../../components/CreateCommentForm"
import { useCreateComment } from "../../hooks/create-comment.hook"

type Props = {
    reviewId?:number,
    commentCreatorName?:string;
    close:() => void
}

export const CreateCommentForm:React.FC<Props> = ({close,reviewId,commentCreatorName}) => {
    const {setReviewId,onCreate,setResponseOfCommentCreatorName,success} = useCreateComment();
    useEffect(() => {
        reviewId && setReviewId(reviewId);
        commentCreatorName && setResponseOfCommentCreatorName(commentCreatorName);
    },[reviewId]);
    
    return <CreateCommentFormComponent success={success} close={close} onCreate={onCreate}/>
}