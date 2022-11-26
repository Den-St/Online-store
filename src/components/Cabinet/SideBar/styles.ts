import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Media } from '../../../assets/breakpoints';


export const Divider = styled.hr`
    margin-top: -5px;
    margin-bottom: -5px;
    border-top: 0.5px solid black;
    width: 100%;
`;

export const Container = styled.div`
    min-width: 300px;
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    border-right:1px solid #a7a7a7;
    min-height: calc(100vh - 72px);
    padding-right: 4px;
    ${Media.down.m}{
        width: 120px;
        min-width:120px;

    }
`;

export const UserHeader = styled(Link)`
    text-decoration: none;
    margin-bottom: 4px;
    padding: 16px 8px 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    ${Media.down.m}{
        padding: 12px 6px 6px;
    }
`;

export const Item = styled(Link)<{$isActive:boolean}>`
    min-width: 300px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap:5px;
    font-size: 20px;
    font-family:Helvetica;
    color:black;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 5px;
    padding: 15px;
    ${({$isActive}) => $isActive && `background-color: #68d06fb8;`}
    transition:0.3s;
    &:hover{
        background-color: #92ff9978;
    }
    .anticon {
        font-size: 25px;
        margin-right: 12px;
    }
    ${Media.down.m}{
        width: 120px;
        min-width:120px;
        padding-left: 3px;
        gap:3px;
        font-size: 10px;
        padding: 8px;
        .anticon {
            font-size: 15px;
            margin-right: 6px;
        }
    }
`;