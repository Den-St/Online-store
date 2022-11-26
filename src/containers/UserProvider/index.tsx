import React from 'react';
import {useGetMe, useViewer} from "../../hooks/get-me";

const UserProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const viewer = useViewer();
    const {loading} = useGetMe();

    if(loading) return <h1>FAK</h1>
    return <>
        {children}
    </>
};

export default UserProvider;