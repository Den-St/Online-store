import { Media } from './../../assets/breakpoints';
import styled from "styled-components";

export const Container = styled.form`
    width: 30%;
    height: 50%;
    min-width: 420px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    align-items: center;
    gap: 15px;

    ${Media.down.m}{
        min-width: 220px;
        height: 220px;
        width: 90%;
    }
`;
