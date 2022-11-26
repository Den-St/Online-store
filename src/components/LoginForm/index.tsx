import React, {useEffect} from 'react';
import {Container} from './styles';
import { useForm} from "react-hook-form";
import {LoginInterface} from "../../types/login.interface";
import {Input} from "../ui-kit/Form/Input/style";
import Error from "../ui-kit/Form/Error/Error";
import { SignButton } from '../ui-kit/Form/SignButton/styles';
import { Label } from '../ui-kit/Form/Label/styles';
import { InputBlock } from '../ui-kit/Form/InputBlock/styles';
import {AuthTypeChanger} from "../ui-kit/Form/AuthTypeChanger/styles";
import {SignFormPropsType} from "../../types/sign-form-props.type";
import {useLogin} from "../../hooks/login.hook";

export const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm:React.FC<SignFormPropsType> = ({onChangeSignType,onClose}) => {
    const {
        register,
        formState:{errors},
        handleSubmit,
    } = useForm<LoginInterface>();

    const {success,submitLogin,error} = useLogin();


    useEffect(() => {
        if(success) onClose();
    },[success])

    return <Container onSubmit={handleSubmit(submitLogin)}>
        <InputBlock>
            <Label>Email or phone number</Label>
            <Input error={!!errors?.email?.message} {...register("email",{
                required: "Login is required",
                pattern: {
                    value: emailValidation,
                    message:"Please, enter valid email"
                   },
            })}/>
            <Error message={errors?.email?.message}/>
        </InputBlock>

        <InputBlock>
            <Label>Password</Label>
            <Input type={"password"} error={!!errors?.password?.message} {...register("password",{
                required: "Password is required",
                minLength:4,
                maxLength:16
            })}/>
            <Error message={errors?.password?.message}/>
        </InputBlock>

        <Error message={error?.message}/>
        <SignButton type={"submit"} value={"Login"}/>
        <AuthTypeChanger onClick={onChangeSignType}>Don't have an account?</AuthTypeChanger>
    </Container>
};

export default LoginForm;