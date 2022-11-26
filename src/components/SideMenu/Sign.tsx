import React from 'react';
import AuthModal from "../../containers/modal/auth-modal";
import {Login, Register, SignContainer} from './styles';

type Props = {
    openAuthModal:() => void;
}
const Sign:React.FC<Props> = ({openAuthModal}) => {
    return <SignContainer>
        <AuthModal authType={'Login'} button={<Login onClick={openAuthModal}>Login</Login>}/>
        <AuthModal authType={"Register"} button={<Register onClick={openAuthModal}>Register</Register>}/>
    </SignContainer>
};

export default Sign;