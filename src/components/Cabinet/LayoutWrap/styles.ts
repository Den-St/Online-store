import { Media } from './../../../assets/breakpoints';
import styled from "styled-components";

export const LayoutWrapper = styled.div`
    position: relative;
  display: flex;
  padding: 0 32px;
  margin-top: 72px;
  box-sizing: border-box;
  ${Media.down.m}{
    padding: 0 5px;
  }
`;


export const Main = styled.div`
  padding: 24px 40px;
  box-sizing: border-box;
  ${Media.down.m}{
    padding: 10px 15px;
  }
`;
