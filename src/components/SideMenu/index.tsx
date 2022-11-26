import React from 'react';
import {Container, Header, MainMenu, MenuItem} from "./styles";
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {UserType} from "../../types/user.type";
import UserInfo from './UserInfo';
import Sign from './Sign';
import {cabinetRoutes} from "../../constants/routes";
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
            {(user.name && user.email) ? <UserInfo close={close} name={user?.name} email={user.email}/> : <Sign openAuthModal={openAuthModal}/>}
        </UserInfoContainer>
        <MainMenu svgColor={"#000000"}>
            <MenuItem onClick={close} to={cabinetRoutes.orders}><SvgIcon type={"orders"} width={"40px"} height={"40px"} />Orders</MenuItem>
            <MenuItem onClick={close} to={cabinetRoutes.cart}><SvgIcon type={"cart"} width={"40px"} height={"40px"} />Cart</MenuItem>
            <MenuItem onClick={close} to={cabinetRoutes.wishlist}><SvgIcon type={"favorite"} width={"40px"} height={"40px"} />Favorites</MenuItem>
            <MenuItem onClick={close} to={cabinetRoutes.createCompany}><SvgIcon type={"briefcase"} width={"40px"} height={"40px"} />Create company</MenuItem>
            <MenuItem onClick={close} to={cabinetRoutes.createProduct}><SvgIcon type={"product"} width={"40px"} height={"40px"} />Create product</MenuItem>
        </MainMenu>
    </Container>
};

export default SideMenuComponent;