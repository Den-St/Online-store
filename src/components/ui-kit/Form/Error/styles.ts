import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const ErrorContainer = styled.div`
  color: red;
  font-size: 14px;
  font-weight: lighter;
  font-family: Helvetica;
  display: flex;
  gap:5px;
  align-items: center;
  height: 20px;
  box-sizing: border-box;
  ${Media.down.m}{
    height: 15px;
    font-size: 11px;
  }
`;

export const ErrorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;