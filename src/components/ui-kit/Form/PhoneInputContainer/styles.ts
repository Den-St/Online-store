import { Media } from './../../../../assets/breakpoints';
import styled from "styled-components";

export const PhoneInputContainer = styled.div`
  width: 230px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Media.down.m}{
    width: 100%;
    .phoneSelect{
      height: 24px;
    }
  }
`;