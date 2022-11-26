import {useMutation} from "@apollo/client";
import {Register} from "../queries/register.queries";
import {RegisterReq, RegisterRes, RegistrationInterface} from "../types/registration.interface";
import {SubmitHandler} from "react-hook-form";
import {useState} from "react";
import {SelectChangeEvent} from "@mui/material";
import {setToken} from "../helpers/cookies.helper";
import {useSetRecoilState} from "recoil";
import {UserType} from "../types/user.type";
import {userState} from "../atoms/user.atom";

export const useRegister = () => {
    const [onRegister,{error}] = useMutation<RegisterRes, RegisterReq>(Register);
    const [success,setSuccess] = useState(false);
    const phoneNumberPrefixes = ["+38","+49","+12","+54"]
    const [phonePref,setPhonePref] = useState(phoneNumberPrefixes[0]);
    const setUser = useSetRecoilState(userState);

    const onChangeSelect = (e:SelectChangeEvent<string>) => {
        setPhonePref(e.target.value);
    }

    const submitRegister:SubmitHandler<RegistrationInterface> = async (regData:RegistrationInterface) => {
        console.log('xend', regData);
        
        try {
            const res = await onRegister({
                variables: {
                    dto: {
                        ...regData,
                        phoneNumber: phonePref.slice(1, 3) + regData.phoneNumber,
                    }
                }
            });
            setToken(res.data?.register?.token);
            setUser({user:res.data?.register as UserType,isLoading:false});
            if(!res.errors?.length) setSuccess(true);
        }catch (err){
            console.log(err);
        }
    }

    return {submitRegister,error,onChangeSelect,phoneNumberPrefixes,success};
}