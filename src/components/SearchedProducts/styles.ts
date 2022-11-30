import { Media } from './../../assets/breakpoints';
import styled from 'styled-components';

export const Header = styled.span`
    font-size: 25px;
    font-family: Helvetica;
    font-weight: 100;
    margin-bottom: -20px;
    ${Media.down.m}{
        font-size: 17px;
    }
`;

export const Top = styled.div`
margin-top: 75px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 10px 22px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -10px;
    .menu-select {
        height:60px;
        width:170px;
        border-radius:10px;
        margin-top:20px;
        margin-bottom:-20px;
        ${Media.down.m}{
            width: 140px;
            height: 40px;
        }
    }
    ${Media.down.m}{
        gap:10px;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
        justify-content: center;
    }
    
`;