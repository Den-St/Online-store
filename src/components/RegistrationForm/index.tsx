import React, {useEffect} from 'react';
import { useForm} from "react-hook-form";
import { InputBlock } from '../ui-kit/Form/InputBlock/styles';
import { Label } from '../ui-kit/Form/Label/styles';
import { Input } from '../ui-kit/Form/Input/style';
import Error from '../ui-kit/Form/Error/Error';
import {RegistrationInterface} from "../../types/registration.interface";
import Select from "@mui/material/Select";
import {MenuItem} from "@mui/material";
import {emailValidation} from "../LoginForm";
import {SignButton} from "../ui-kit/Form/SignButton/styles";
import {AuthTypeChanger} from "../ui-kit/Form/AuthTypeChanger/styles";
import {PhoneInputContainer} from "../ui-kit/Form/PhoneInputContainer/styles";
import {useRegister} from "../../hooks/register.hook";
import {SignFormPropsType} from "../../types/sign-form-props.type";
import { Container } from '../ui-kit/Cabinet/Container';

const RegistrationForm:React.FC<SignFormPropsType> = ({onChangeSignType,onClose}) => {
    const {
        register,
        formState:{errors},
        handleSubmit,

    } = useForm<RegistrationInterface>();

    const {onChangeSelect,submitRegister,phoneNumberPrefixes,error,success} = useRegister();

    useEffect(() => {
        if(success) onClose();
    },[success]);

    return <Container onSubmit={handleSubmit(submitRegister)}>
        <InputBlock>
            <Label>Name</Label>
            <Input error={!!errors?.name?.message} placeholder={"Name"} {...register("name",{
                required: "Name is required",
                minLength:4,
            })}/>
            <Error message={errors.name?.message}/>
        </InputBlock>

        <InputBlock>
            <Label>Phone number</Label>
            <PhoneInputContainer>
                <Select sx={{"height":"34px"}} onChange={onChangeSelect} defaultValue={phoneNumberPrefixes[0]}>
                    {phoneNumberPrefixes.map(pref => <MenuItem key={pref} value={pref}>{pref}</MenuItem>)}
                </Select>
                <Input error={!!errors?.phoneNumber?.message} placeholder={"Phone number"} {...register("phoneNumber",{
                    required: "Phone number is required",
                    minLength:8,
                    maxLength:8
                })}/>
            </PhoneInputContainer>
            <Error message={errors.phoneNumber?.message}/>
        </InputBlock>

        <InputBlock>
            <Label>Email</Label>
            <Input error={!!errors?.email?.message} placeholder={"Email"} {...register("email",{
                required: "Email is required",
                pattern:{
                    value:emailValidation,
                    message:"Please enter valid email"
                }
            })}/>
            <Error message={errors.email?.message}/>
        </InputBlock>

        <InputBlock>
            <Label>Password</Label>
            <Input type={"password"} error={!!errors?.password?.message} placeholder={"Password"} {...register("password",{
                required: "Password is required",
                minLength:4,
                maxLength:16,
            })}/>
            <Error message={errors.password?.message}/>
        </InputBlock>

        <Error message={error?.message}/>

        <SignButton type={"submit"} value={"Register"}/>
        <AuthTypeChanger onClick={onChangeSignType}>Already have an account?</AuthTypeChanger>
    </Container>
};

export default RegistrationForm;