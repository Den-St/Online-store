import {useMutation} from "@apollo/client";
import {Login} from "../queries/login.query";
import {useState} from "react";
import {SubmitHandler} from "react-hook-form";
import {LoginInterface, LoginReq, LoginRes} from "../types/login.interface";
import {setToken} from "../helpers/cookies.helper";
import {userState} from "../atoms/user.atom";
import {UserType} from "../types/user.type";
import { useSetRecoilState} from "recoil";

export const useLogin = () => {
    const [onLogin,{error}] = useMutation<LoginRes,LoginReq>(Login);
    const [success,setSuccess] = useState(false);
    const setUser = useSetRecoilState(userState);

    const submitLogin:SubmitHandler<LoginInterface> = async (loginData:LoginInterface) => {
        try{
            const res = await onLogin({
                variables:{
                    dto:{
                         ...loginData
                    }
                }
            });

            setToken(res.data?.login.token);
            setUser({user:res.data?.login as UserType,isLoading:false});
            if(!res.errors?.length) setSuccess(true);
        }catch (err){
            console.log(err);
        }
    }
    return {submitLogin,success,error};
}