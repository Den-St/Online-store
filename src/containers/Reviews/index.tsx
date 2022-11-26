import { ReviewsComponent } from "../../components/Reviews"
import { useGetReviews } from "../../hooks/get-reviews.hook"

export const Reviews = () => {
    const {reviews,onSeeMore,reviewLoading} = useGetReviews();

    return <ReviewsComponent reviewLoading={reviewLoading} reviews={reviews} onSeeMore={onSeeMore}/>
}