import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";
import { Media } from "../../assets/breakpoints";

const slideInAnimation = keyframes`
 0% { left: -22%;}
 100% { left: 0;}
`
const slideOutAnimation = keyframes`
 0% { left: 0;}
 100% { left: -22%;}
`

const slideInAnimationMobile = keyframes`
 0% { left: -80%;}
 100% { left: 0;}
`
const slideOutAnimationMobile = keyframes`
 0% { left: 0;}
 100% { left: -80%;}
`

export const Container = styled.div<{$opened:boolean,$closePressed:boolean}>`
  width: 22%;
  position: absolute;
  animation-name: ${({$closePressed}) => !$closePressed ? slideInAnimation : slideOutAnimation};
  animation-duration: 0.4s;
  height: 100vh;
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Media.down.m}{
    width:80%;
    animation-name: ${({$closePressed}) => !$closePressed ? slideInAnimationMobile : slideOutAnimationMobile};
  }
`;

export const Header = styled(Link)`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  padding: 12px 8px 8px 24px;
  color: white;
  font-weight: bolder;
  font-family: Futura;
  font-size: 24px;
  background-color: #211f1f;
  text-decoration: none;
`;

export const MainMenu = styled.div<{svgColor:string}>`
  width: 100%;
  display:flex;
  flex-direction: column;
  background-color: white;
  min-height: calc(100vh - 128px);
  padding-left: 10px;
  box-sizing: border-box;
  gap: 5px;
  padding-top: 5px;
  &>svg{
    ${({svgColor}) => `fill:${svgColor}`};
  }
`;

export const MenuItem = styled(Link)`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 3px 5px;
  text-decoration: none;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  font-family: Helvetica;
  font-weight: lighter;
  color: black;
  text-decoration: none;
  transition: 0.3s;
  .anticon {
    font-size: 24px;
  }
  &:hover {
    background-color: rgba(170, 236, 170, 0.24);
  }
`;

export const SignContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const Login = styled.div`
  width: 50px;
  height: 40px;
  font-weight: lighter;
  font-size:17px;
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: white;
  border-right: 1px solid white;
  cursor:pointer;
  &:hover{
    opacity:0.85;
  }
`;

export const Register = styled.div`
  width: 50px;
  height: 40px;
  font-weight: lighter;
  display: flex;
  align-items: center;
  padding-left: 7px;
  font-size:17px;
  font-family: Helvetica;
  color: white;
  cursor:pointer;
  &:hover{
    opacity:0.85;
  }
`;
