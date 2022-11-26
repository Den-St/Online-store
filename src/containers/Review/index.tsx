import { ReviewComponent } from "../../components/Reviews/Review"
import { ReviewT } from "../../types/review.type"

type Props = {
    review:ReviewT
}

export const Review:React.FC<Props> = ({review}) => {
    return <ReviewComponent review={review}/>
}