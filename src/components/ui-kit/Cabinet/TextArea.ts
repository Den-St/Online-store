import styled from "styled-components";
import { Media } from "../../../assets/breakpoints";

export const TextArea = styled.textarea`
  width: 400px;
  height: 180px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  font-family: Helvetica;
  resize: none;
  ${Media.down.m}{
    width: 200px;
    height: 90px;
    padding: 6px 10px;
    font-size: 12px;
  }
`;