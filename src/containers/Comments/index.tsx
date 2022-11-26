import { CommentsComponent } from "../../components/Comments"
import { useGetComments } from "../../hooks/get-comments.hook";

type Props = {
    reviewId:number;
}

export const Comments:React.FC<Props> = ({reviewId}) => {
    const {seeMore,comments,commentLoading} = useGetComments(reviewId);

    return <CommentsComponent commentLoading={commentLoading} comments={comments} seeMore={seeMore}/>
}