import React, {PropsWithChildren} from 'react'
import { LinkT } from '../../../types/link.type';
import { UserType } from '../../../types/user.type';
import { SideBar } from '../SideBar';
import {LayoutWrapper, Main} from "./styles";

type CabinetLayoutWrapPropsT = PropsWithChildren & {
    path?: string;
    links: LinkT[];
    user:UserType;
}

export const CabinetLayoutWrap: React.FC<CabinetLayoutWrapPropsT> = ({user,children, path, links}) => {
    return <LayoutWrapper>
        <SideBar path={path} itemList={links} user={user}/>
        <Main>{children}</Main>
    </LayoutWrapper>
}