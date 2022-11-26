import React from 'react';
import SideMenuComponent from '../../components/SideMenu';
import {useRecoilValue} from "recoil";
import {userState} from "../../atoms/user.atom";

type Props = {
    close:() => void;
    $opened:boolean;
    $closePressed:boolean;
    openAuthModal:() => void;
}

const SideMenu:React.FC<Props> = ({close,$opened,$closePressed,openAuthModal}) => {
    const user = useRecoilValue(userState);
    return <SideMenuComponent openAuthModal={openAuthModal} $closePressed={$closePressed}
     $opened={$opened} close={close} user={user.user}/>
};

export default SideMenu;