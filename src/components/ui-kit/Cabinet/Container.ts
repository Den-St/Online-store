import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 20px;
    ${Media.down.m}{
        gap: 10px;
    }
`;