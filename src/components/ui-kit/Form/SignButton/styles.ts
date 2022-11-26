import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const SignButton = styled.input`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2ec52e;
  border-radius:3px;
  outline: none;
  border: none;
  font-size: 20px;
  font-weight: normal;
  font-family: Futura;
  color:white;
  cursor: pointer;
  transition: 0.3s;
  &:hover{
    opacity: 0.9;
  }
  ${Media.down.m}{
    width: 100px;
  }
`;

