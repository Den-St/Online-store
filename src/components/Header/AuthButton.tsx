import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { SvgIcon } from "../../assets/svg/SvgIcon";
import { authModalState } from "../../atoms/auth-modal.atom";
import AuthModal from "../../containers/modal/auth-modal";
import { SignButtonContainer } from "./styles";

export const AuthButton = () => {
    const [isOpened,setOpened] = useState(false);
    const [authModal,setAuthModal] = useRecoilState(authModalState);
    useEffect(() => {
        if(isOpened || authModal){
            document.body.style.overflowY = 'hidden'
        }else{
            document.body.style.overflowY = 'unset'
        }
    },[isOpened,authModal]);

    const onBlur = () => {
        setOpened(false)
        setAuthModal(false);
    }

    const onOpen = () => {
        setOpened(true);
        setAuthModal(true);
    }
    return <div>
            <SignButtonContainer onClick={onOpen}><SvgIcon type="user" width="30px" height="30px"/></SignButtonContainer>
            {(isOpened || authModal) && <AuthModal authType={'Login'} onBlur={onBlur}/>}
        </div>

}