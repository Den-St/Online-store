import { setToken } from './../helpers/cookies.helper';
import { UserEditRes, UserEditInterface, UserEditReq } from './../types/user.type';
import { useMutation,  } from '@apollo/client';
import { useState } from "react";
import { UserEdit } from '../queries/user-edit.query';
import { SubmitHandler } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/user.atom';


export const usePersonalInformation = () => {
    const [isOpened,setIsOpened]  = useState(false);
    const [isOnEditing,setisOnEditing]  = useState(false);
    const [confirmEdit,{error}] = useMutation<UserEditRes,UserEditReq>(UserEdit);
    const user = useRecoilValue(userState);
    

    const toggleOpen = () => {
        setIsOpened(prev => !prev);
    }
    const onOpen = () => {
        setIsOpened(true);
    }
    const onBlurOpen = () => {
        setIsOpened(false);
    }

    const onEditing = () => {
        setisOnEditing(true);
    }
    const onBlurEditing = () => {
        setisOnEditing(false);
    }
    const toggleEditing = () => {
        setisOnEditing(prev => !prev);
    }


    const onConfirmEditing:SubmitHandler<UserEditInterface> = async (data:UserEditInterface) => {
        try{
            const res = await confirmEdit({variables:{
                dto:{
                    ...data,
                    id:user.user.id
                }
            }})
            
            setToken(res.data?.editUserInfo.token)
        }catch(err){
            console.log(err);
        }
    }

    return {isOnEditing,isOpened,onBlurEditing,onBlurOpen,
        onOpen,onEditing,toggleEditing,toggleOpen,onConfirmEditing,error};

 }