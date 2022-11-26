import { useState } from 'react';
import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { CreateCommentFormInterface, CreateCommentReq } from './../types/comment.type';
import { useMutation } from '@apollo/client';
import { CreateCommentQuery } from '../queries/create-comment.query';
import { SubmitHandler } from 'react-hook-form';
export const useCreateComment = () => {
    const [create] = useMutation<undefined,CreateCommentReq>(CreateCommentQuery);
    const user = useRecoilValue(userState);
    const [responseToCommentCreatorName,setResponseOfCommentCreatorName] = useState<string>('');
    const [reviewId,setReviewId] = useState<number>(0);
    const [success,setSuccess] = useState(false);

    const onCreate:SubmitHandler<CreateCommentFormInterface> = async (formData:CreateCommentFormInterface) => {
        if(!user.user.id) return;

        try{
            await create({variables:{
                dto:{
                    creatorId:Number(user.user.id),
                    responseToCommentCreatorName:responseToCommentCreatorName,
                    reviewId:Number(reviewId),
                    text:formData.text
                }
            }})
            setSuccess(true);
        }catch(err){
            console.log(err);
        }
    }

    return {onCreate,setReviewId,setResponseOfCommentCreatorName,success};
}