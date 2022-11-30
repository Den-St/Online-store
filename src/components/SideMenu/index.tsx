import React from 'react';
import {Container, Header, MainMenu, MenuItem} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {UserType} from "../../types/user.type";
import UserInfo from './UserInfo';
import Sign from './Sign';
import {cabinetLinks, cabinetRoutes} from "../../constants/routes";
import { UserInfoContainer } from '../ui-kit/UserHeaderStyles';

type Props = {
    user:UserType,
    close:() => void;
    $opened:boolean;
    $closePressed:boolean;
    openAuthModal:() => void;
}

const SideMenuComponent:React.FC<Props> = ({user,close,$opened,$closePressed,openAuthModal}) => {
    return <Container $opened={$opened} $closePressed={$closePressed}>
        <UserInfoContainer>
            {(user.name && user.email) ? 
                <UserInfo close={close} name={user?.name} email={user.email}/> 
                : <Sign/>}
        </UserInfoContainer>
        <MainMenu svgColor={"#000000"}>
            {cabinetLinks.map(link => 
                <MenuItem key={link.to} onClick={close} to={link.to}>
                    <SvgIcon type={link.svgName} width={"40px"} height={"40px"} />
                    {link.label}
                </MenuItem>)}
        </MainMenu>
    </Container>
};

export default SideMenuComponent;