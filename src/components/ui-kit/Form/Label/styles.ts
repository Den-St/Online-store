import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const Label = styled.label`
  font-size: 17px;
  color: #918f8f;
  font-family: Helvetica;
  font-weight: lighter;
  ${Media.down.m}{
    font-size: 12px;
  }
`;