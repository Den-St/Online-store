import { useRecoilValue } from "recoil"
import { userState } from "../../atoms/user.atom"
import { ReviewComponent } from "../../components/Reviews/Review"
import { ReviewT } from "../../types/review.type"

type Props = {
    review:ReviewT
}

export const Review:React.FC<Props> = ({review}) => {
    const isAuthed = !!useRecoilValue(userState).user.id;
    return <ReviewComponent isAuthed={isAuthed} review={review}/>
}