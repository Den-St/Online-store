import { GetCommentRes, GetCommentsReq } from './../types/comment.type';
import { GetCommentsQuery } from './../queries/get-comments.query';
import { useQuery } from '@apollo/client';

export const useGetComments = (reviewId:number) => {
    const {data,loading, fetchMore} = useQuery<GetCommentRes,GetCommentsReq>(GetCommentsQuery,{variables:{
        dto:{
            reviewId:Number(reviewId),
            limit:3,
            skip:0
        }
    }, fetchPolicy: 'cache-and-network'});

    const seeMore = () => {
        fetchMore({variables: { dto:{reviewId:Number(reviewId),limit:3,skip:data?.getComments.length}}});
    }
    console.log("kmlk",reviewId);
    
    return {seeMore,comments:data?.getComments,commentLoading:loading};
}