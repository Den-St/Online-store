import { GetReviewReq, GetReviewRes } from '../types/review.type';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GetReviewsQuery } from '../queries/get-reviews.query';

export const useGetReviews = () => {
    const product = useParams();
    const {data,loading,fetchMore} = useQuery<GetReviewRes,GetReviewReq>(GetReviewsQuery,{variables:{
        dto:{
            productId:Number(product.id),
            skip:0,
            limit:3
    }}});

    const onSeeMore = () => {
        fetchMore({variables:{dto:{
            skip:data?.getReviews.length
        }}})
    }
    

    return {reviews:data?.getReviews,onSeeMore,reviewLoading:loading}
}