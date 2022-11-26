import styled from "styled-components";
import { Media } from "../../../assets/breakpoints";

export const Header = styled.div`
    font-size: 24px;
    font-family: Helvetica;
    font-weight: 100;
    width: 100%;
    ${Media.down.m}{
        font-size: 14px;
    }
`;