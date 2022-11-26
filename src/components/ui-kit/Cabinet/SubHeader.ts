import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const SubHeader = styled.div`
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 100;
    ${Media.down.m}{
        font-size: 14px;
    }
`;  