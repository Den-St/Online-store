import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Media } from "../../assets/breakpoints";
import { palette } from "./palette";

const notificationAnimation = keyframes`
    0% {bottom:0};
    30% {bottom:6%};
    100% {bottom:-40px};
`;

export const Notiification = styled.div`
    width: 30%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #8fd7ab;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: 100;
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    animation: ${notificationAnimation} 5s;
    ${Media.down.m}{
        width: 90%;
    }
`;

export const Open = styled(Link)`
    color: ${palette.linkBlue};
    cursor: pointer;
    transition: 0.4s;
    &:hover{
        color: #f84147;
    }
`;