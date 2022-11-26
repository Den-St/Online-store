import React from 'react';
import {Container} from "./styles";
import Signing from "../../Signing";
import {ModalProps} from "../../../types/modal-props.type";
import {Overlay} from "../../../components/ui-kit/Modal/overlay";
import {BasePortal} from "../../../components/ui-kit/Modal/Portal";
import {useAuthModal} from "../../../hooks/auth-modal.hook";

const AuthModal:React.FC<ModalProps> = ({ button,authType}) => {
    const {open,close,opened} = useAuthModal();

    return <>
        <div onClick={open}>
            {button}
        </div>
        {opened && <BasePortal>
            <Container>
                <Overlay onClick={close}/>
                <Signing authType={authType} closeModal={close}/>
            </Container>
        </BasePortal>}
    </>
};

export default AuthModal;