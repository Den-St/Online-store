import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../atoms/auth-modal.atom";

export const useSignModal = () => {
    const [opened, setOpened] = useState(false);
    const [closePressed,setClosePressed] = useState(false)
    const setAuthModalOpened = useSetRecoilState(authModalState);

    const open = () => {
        setOpened(true);
        setClosePressed(false);
    }
    const close = () => {
        setClosePressed(true);
        setTimeout(() => setOpened(false),390);
    }
    const openAuthModal = () => {
        close();
        setAuthModalOpened(true);
    }

    return {opened,open,close,openAuthModal,closePressed}
}