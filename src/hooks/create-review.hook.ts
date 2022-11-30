import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { CreateReviewFormInterface, CreateReviewReq } from '../types/review.type';
import { userState } from '../atoms/user.atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CreateReviewQuery } from '../queries/create-review.query';
import { useMutation } from '@apollo/client';
import { SubmitHandler } from 'react-hook-form';
import { authModalState } from '../atoms/auth-modal.atom';
export const useCreateReview = () => {
    const {user} = useRecoilValue(userState);
    const [authForm,setAuthForm] = useRecoilState(authModalState);
    const product = useParams();
    const [create] = useMutation<undefined,CreateReviewReq>(CreateReviewQuery);
    const [rateNumber,setRateNumber] = useState(5);

    const onCreate:SubmitHandler<CreateReviewFormInterface> = async (reviewData:CreateReviewFormInterface) => {
        if(!user.id) {
            setAuthForm(true);
            return;
        }

        if(!product.id) return;
        
        try{
            await create({variables:{
                dto:{
                    userId:user.id,
                    productId: Number(product.id),
                    text: reviewData.text,
                    consText: reviewData.consText,
                    prosText: reviewData.prosText,
                    rate: rateNumber
                }
            }});
        }catch(err){
            console.log(err);
        }
    }

    return {onCreate,setRateNumber,rateNumber}

}