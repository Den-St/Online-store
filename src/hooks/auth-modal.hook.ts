import {useRecoilState} from "recoil";
import {authModalState} from "../atoms/auth-modal.atom";

export const useAuthModal = () => {
    const [opened,setOpened] = useRecoilState(authModalState);
    const open = () => setOpened(true);
    const close = () => setOpened(false);

    return {open,close,opened};
}