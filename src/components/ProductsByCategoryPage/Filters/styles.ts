import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    min-height: calc(100vh - 92px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    box-sizing: border-box;
    ${Media.down.m}{
        width: 120px;
    }
`;

export const CharacteristicContainer = styled.div`
    width: 100%;
    padding:15px 20px 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    border-right: 0.5px solid #abc2d3;
    gap: 8px;
    ${Media.down.m}{
        padding:10px 15px 0;
    }
`;

export const CharacteristicHeader = styled.span`
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 200;
    color: #0966a8;
    ${Media.down.m}{
        font-size: 15px;
    }
`;

export const ValuesContainer = styled.div`
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: scroll;
    ${Media.down.m}{
        width: 100px;
    }
`;

export const ValueItemContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    gap: 10px;
    &:hover{
        background: #a1d8b6;
    }
`;

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;
    ${Media.down.m}{
        width: 15px;
        height: 15px;
    }
`;

export const ValueItemTitle = styled.div`
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 200;
    ${Media.down.m}{
        font-size:14px;
    }
`;
export const Divider = styled.hr`
    border-top:1px solid #e9e9e9;
    width: 108.5%;
    margin: 0;
    margin-top: 5px;
`;