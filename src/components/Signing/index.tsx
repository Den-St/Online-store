import React from 'react';
import {Container, Cross, FormContainer, GoogleSign, Header, MainContainer, Or, SigningAsContainer} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";

type SigningProps = {
    authType?:'Login' | 'Register';
    onLogin:() => void;
    onRegister:() => void;
    closeModal: () => void;
}

const SigningComponent:React.FC<SigningProps> = ({authType,onLogin,onRegister,closeModal}) => {
    return <Container>
        <Header>{authType}<Cross onClick={closeModal}><SvgIcon type={"cross"} width={"30px"} height={"30px"}/></Cross></Header>
        <MainContainer>
            <FormContainer>
                {authType == 'Login' ? <LoginForm onChangeSignType={onRegister} onClose={closeModal}/> : <RegistrationForm onClose={closeModal} onChangeSignType={onLogin}/>}
            </FormContainer>
            <Or>or with</Or>
            <SigningAsContainer>
                <GoogleSign>Google</GoogleSign>
            </SigningAsContainer>
        </MainContainer>
    </Container>
};

export default SigningComponent;