import React, {PropsWithChildren} from 'react';
import {CabinetLayoutWrap} from "../../components/Cabinet/LayoutWrap";
import {useLocation} from "react-router-dom";
import {cabinetLinks} from "../../constants/routes";
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/user.atom';

export const CabinetLayout:React.FC<PropsWithChildren> = ({children}) => {
    const {pathname} = useLocation();
    const user = useRecoilValue(userState);

    return <CabinetLayoutWrap user={user.user} path={pathname} links={cabinetLinks}>
        {children}
    </CabinetLayoutWrap>
}