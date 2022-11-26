import { CreateReviewComponent } from "../../components/CreateReview"
import { useCreateReview } from "../../hooks/create-review.hook"

export const CreateReview = () => {
    const {onCreate,rateNumber,setRateNumber} = useCreateReview();

    return <CreateReviewComponent rateNumber={rateNumber} setRateNumber={setRateNumber} onCreate={onCreate}/>
}