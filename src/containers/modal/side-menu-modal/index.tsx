import React from 'react';
import {ModalProps} from "../../../types/modal-props.type";
import { Overlay } from '../../../components/ui-kit/Modal/overlay';
import SideMenu from "../../SideMenu";
import { Container } from './styles';
import {useSignModal} from "../../../hooks/sign-modal.hook";
import {BasePortal} from "../../../components/ui-kit/Modal/Portal";

const SideMenuModal:React.FC<ModalProps> = ({button}) => {
    const {opened,openAuthModal,closePressed,open,close} = useSignModal();

    return <>
        <div onClick={open}>
            {button}
        </div>
        {opened && <BasePortal>
            <Container>
                <Overlay onClick={close}/>
                <SideMenu $closePressed={closePressed} $opened={opened} close={close} openAuthModal={openAuthModal}/>
            </Container>
        </BasePortal>}
    </>
};

export default SideMenuModal;