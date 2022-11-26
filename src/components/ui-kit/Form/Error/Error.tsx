import React from 'react';
import { ErrorContainer } from './styles';
import {SvgIcon} from "../../../../assets/svg/SvgIcon";

const Error:React.FC<{message?:string}> = ({message}) => {
    if(message) {
        return <ErrorContainer>
            <SvgIcon type={"warning"} width={"14px"} height={"14px"}/>
            <span>{message}</span>
        </ErrorContainer>
    }
    return null;
};

export default Error;