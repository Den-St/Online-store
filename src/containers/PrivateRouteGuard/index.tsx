import { Navigate } from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../../atoms/user.atom";
import React from "react";
import { useViewer } from "../../hooks/get-me";

export const PrivateRouteGuard:React.FC<{children:React.ReactNode}> = ({children}) => {
    const viewer = useViewer();

    if(!viewer?.user.id) return <Navigate to={"/"}/>
    return <>
        {children}
    </>
}