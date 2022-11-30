import React from 'react';
import {useGetMe} from "../../hooks/get-me";

const UserProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
    const {loading} = useGetMe();

    if(loading) return <h1>FAK</h1>
    return <>
        {children}
    </>
};

export default UserProvider;