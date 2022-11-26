import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const Dir = styled.div<{$isOpened:boolean}>`
    width: 90%;
    padding: 24px;
    min-width: 1000px;

    box-sizing: border-box;
    min-height: 72px;
    border:0.5px solid #a7a7a7;
    border-radius:2px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap: 24px;
    ${Media.down.m}{
        min-width: 200px;
        gap: 12px;
        min-height: 30px;
    }
`;

export const ContentContainer = styled.div`
    width: 100%;
    padding: 0 24px 0 48px;
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap:15px;
    ${Media.down.m}{
        padding: 0 12px 0 24px;
        gap:10px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap:15px;
    column-gap: 24px;
    width: 100%;
    ${Media.down.m}{
        column-gap: 12px;
        row-gap:10px;
        flex-direction: column;

    }
`;

export const ItemContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
`;

export const ItemHeader = styled.div`
    font-size: 15px;
    font-weight: 100;
    font-family: Helvetica;
    color: #8b8b8b;
    ${Media.down.m}{
        font-size: 10px;
    }
`;

export const ItemContent = styled.div`
    font-size: 16px;
    font-weight: 200;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const DirHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
    ${Media.down.m}{
        height: 15px;
    }
`;


export const Label = styled.div`
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 300;
    margin-left: 20px;
    width: 300px;
    ${Media.down.m}{
        width: 100px;
        margin-left: 10px;
        font-size: 12px;
    }
`;

export const Arrow = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60%;
    ${Media.down.m}{
        margin-left: 0;
    }
`;

export const EditButton = styled.button`
    width: 100px;
    height: 35px;
    border-radius: 3px;
    border: none;
    background-color: #4ca321;
    &:hover{
        opacity: 0.95;
    }
    color: white;
    font-family: Futura;
    font-size: 19px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const ConfirmEditingButton = styled.input`
    width: 70px;
    height: 30px;
    border: none;
    color:white;
    cursor: pointer;
    background: green;
    &:hover{
        opacity: 0.95;
    }
    border-radius:3px;
    font-size: 16px;
    font-family: Helvetica;
    font-weight: 400;
    
`;

export const CancelEditingButton = styled.span`
    width: 60px;
    height: 28px;
    border: 1px solid red;
    cursor: pointer;
    border-radius: 2px;
    color:red;
    font-family: Helvetica;
    font-weight: 100px;
    background-color: transparent;
    transition:0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        background-color: red;
        color:white;
    }
`;

export const ButtonsContainer = styled.div`
    width: 140px;
    display: flex;
    justify-content: space-between;
`;