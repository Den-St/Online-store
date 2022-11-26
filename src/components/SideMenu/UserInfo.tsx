import React from 'react';
import {SvgIcon} from "../../assets/svg/SvgIcon";
import {cabinetRoutes} from "../../constants/routes";
import { Email, Name, TextInfo, UserInfoLink } from '../ui-kit/UserHeaderStyles';

type Props = {
    name:string;
    email:string;
    close:() => void;
}

const UserInfo:React.FC<Props> = ({name,email,close}) => {
    return <UserInfoLink fontcolor='white' bg='#211f1f' hoverbg='#1f1d1d' onClick={close} to={cabinetRoutes.personalInformation}>
        <SvgIcon type={"user"} width={"40px"} height={"40px"}/>
        <TextInfo>
            <Name>{name}</Name>
            <Email>{email}</Email>
        </TextInfo>
    </UserInfoLink>
};

export default UserInfo;