import styled from 'styled-components';
import { Media } from '../../../../assets/breakpoints';

export const Container = styled.div`
    width: 150px;
    height: 70px;
    box-sizing: border-box;
    position: relative;
    ${Media.down.m}{
        width: 80px;
        height: 50px;
    }
`;

export const FakeInput = styled.span`
    width: 150px;
    height: 70px;
    background-color: cornflowerblue;
    border-radius:3px;
    border: 0.5px solid #a7a7a7;
    font-size: 25px;
    font-family: Helvetica;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
    cursor: pointer;
    ${Media.down.m}{
        width: 80px;
        height: 50px;
        font-size: 15px;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 70px;
    border: none;
    outline: none;
    z-index: 1;
    opacity: 0;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${Media.down.m}{
        height: 50px;
    }
`;