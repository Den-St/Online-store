import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const UserInfoLink = styled(Link)<{bg:string,hoverbg:string,fontcolor:string}> `
  width: 98%;
  transition:0.3s;
  ${({bg}) => bg && `background:${bg};`}
  box-sizing: border-box;
  padding: 8px;
  display: flex;
  align-items: center;
  height: 72px;
  text-decoration: none;
  border-radius:4px;
  margin:3px 2px;
  ${({fontcolor}) => fontcolor && `color:${fontcolor};`}

  &:hover{
    ${({hoverbg}) => hoverbg && `background:${hoverbg};`}
  }
  .anticon{
    text-decoration: none;
    ${({fontcolor}) => fontcolor && `color:${fontcolor};`}
    font-size:32px;
  }


  ${Media.down.m}{
    font-size:12px;
    .anticon{
      font-size:15px;
    }
    height: 36px;
  }
`;

export const Name = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 15px;
  text-decoration: none;
  font-weight: 400;
  font-family: Helvetica;
  ${Media.down.m}{
    height: 15px;
    padding-left: 3px;
    font-size: 12px;
  }
`;

export const Email = styled.div`
  width: 80%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 13px;
  font-weight: lighter;
  font-family: Helvetica;
  text-decoration: none;
  ${Media.down.m}{
    font-size: 9px;
    height: 15px;
    padding-left: 3px;
  }
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  background-color: #211f1f;
  box-sizing: border-box;
  padding: 8px 8px 8px 16px;
  display: flex;
  align-items: center;
  height: 72px;
  ${Media.down.m}{
    height: 40px;
    padding: 4px 4px 4px 10px;
  }
`;

export const TextInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
