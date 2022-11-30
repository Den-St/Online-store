import React from 'react';
import {Container} from "./styles";
import Signing from "../../Signing";
import {Overlay} from "../../../components/ui-kit/Modal/overlay";
import {BasePortal} from "../../../components/ui-kit/Modal/Portal";

type Props = {
    onBlur:() => void;
    authType:'Login' | 'Register'
}

const AuthModal:React.FC<Props> = ({authType,onBlur}) => {
    return <BasePortal>
            <Container>
                <Overlay onClick={onBlur}/>
                <Signing authType={authType} closeModal={onBlur}/>
            </Container>
        </BasePortal>
};

export default AuthModal;