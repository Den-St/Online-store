import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const Input = styled.input<{error?:boolean}>`
  width: 200px;
  height: 30px;
  border-radius: 2px;
  border: ${({error}) => error ? `1px solid #f1a9a9` : `1px solid gray`};
  outline: none;
  font-size: 14px;
  font-family: Helvetica;
  font-weight: lighter;
  color: #1f1f1f;
  padding-left: 3px;

  &:focus {
    border: ${({error}) => error ? `1px solid red` : `1px solid blue`};
  }

  ${Media.down.m}{
    width: 70px;
    height: 20px;
    font-size: 11px;
  }
`;