import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 30px;
    gap:15px;
    ${Media.down.m}{
        width: 100%;
    }
`;

export const ReviewBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export const ReviewContainer = styled.div`
    width: 90%;
    border-radius:7px;
    box-sizing: border-box;
    padding: 7px 12px;
    border: 0.5px solid #a7a7a7;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ReviewHeader = styled.div`
    width: 100%;
    border-bottom: 0.5px solid #686767;
    display: flex;
    gap: 5px;
    height: 40px;
    align-items: center;
    font-size: 22px;
    font-family: Helvetica;
    font-weight: 400;
    .anticon{
        font-size: 25px;
        color:#00a046;
    }
    ${Media.down.m}{
        font-size: 17px;
        font-weight: 200;
        height: 30px;
    }
`;

export const SeeMore = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 100;
    font-family: Helvetica;
    color:cornflowerblue;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        opacity: 0.85;
        background-color: #b7b7b74e;
    }
`;

export const DirContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 3px;
    flex-direction: column;
`;

export const Header = styled.span`
    font-size: 14px;
    font-family: Helvetica;
    font-weight: 700;
    color: #434343;
`;

export const Text = styled.p`
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-family: Helvetica;
    font-weight: 100;
    margin-bottom: 10px;
`;

export const MakeResponse = styled.span`
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    padding: 5px;
    display: flex;
    gap: 4px;
    cursor: pointer;
    transition: 0.15s;
    &:hover{
        color:#ff7878;
    }
    color:#3e77aa;
`;

export const CheckComments = styled.span`
    width: 100%;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.15s;
    &:hover{
        opacity:0.8;
    }
    color:#3e77aa;
`;