import { ReviewT } from "./review.type";
import { UserType } from "./user.type";

export type CommentT = {
    id:number,
    creator:UserType;
    text:string;
    commentToReview:ReviewT
    responseToCommentCreatorName:string;
}

export type CreateCommentReq = {
    dto:{
        creatorId: number,
        text: string,
        responseToCommentCreatorName: string,
        reviewId: number
      }
}

export type GetCommentsReq = {
    dto: {
        reviewId: number,
        skip: number,
        limit: number
      }
}

export type GetCommentRes = {
    getComments:CommentT[]
}

export type CreateCommentFormInterface = {
    text: string,
}