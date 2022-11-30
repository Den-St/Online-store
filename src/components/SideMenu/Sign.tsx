import React, { useEffect, useState } from 'react';
import AuthModal from "../../containers/modal/auth-modal";
import {Login, Register, SignContainer} from './styles';

const Sign = () => {
    const [openModalLogin,setOpenModalLogin] = useState(false);
    const [openModalRegistration,setModalRegistration] = useState(false);
    const onLogin = () => {
        setModalRegistration(false);
        setOpenModalLogin(true);
    }
    const onRegistration = () => {
        setModalRegistration(true);
        setOpenModalLogin(false);
    }
    const onBlur = () => {
        setModalRegistration(false);
        setOpenModalLogin(false);
    }

    useEffect(() => {
        if(openModalLogin || openModalRegistration){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'unset'
        }
    },[openModalLogin,openModalRegistration])
    return <SignContainer>
        <Login onClick={onLogin}>Login</Login>
        <Register onClick={onRegistration}>Register</Register>
        {openModalLogin && <AuthModal authType={'Login'} onBlur={onBlur}/>}
        {openModalRegistration && <AuthModal authType={'Register'} onBlur={onBlur}/>}
    </SignContainer>
};

export default Sign;