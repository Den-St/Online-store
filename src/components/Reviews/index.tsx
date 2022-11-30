import { Loading3QuartersOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import { Review } from "../../containers/Review"
import { ReviewT } from "../../types/review.type"
import { NoComments } from "../Comments/styles"
import { Container, SeeMore } from "./styled"

type Props = {
    reviews?:ReviewT[],
    onSeeMore:() => void,
    reviewLoading:boolean,
}

export const ReviewsComponent:React.FC<Props> = ({reviews,onSeeMore,reviewLoading}) => {
    
    return <Container>
        {reviewLoading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
        {!reviews?.length && <NoComments>No reviews (</NoComments>}
        {(!reviewLoading && !!reviews?.length) && reviews?.map(review => <Review key={review.id} review={review}/>)}
        {(!reviewLoading && !!reviews?.length) && <SeeMore onClick={() => onSeeMore()}>SEE MORE</SeeMore>}
    </Container>
}