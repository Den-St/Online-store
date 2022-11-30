import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
  width: 45%;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
  overflow: scroll;
  ${Media.down.m}{
    width: 85%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-sizing: border-box;
  font-weight: lighter;
  font-size: 24px;
  font-family: Futura;
  border-bottom: 1px solid #a7a7a7;
  box-sizing: border-box;
  ${Media.down.m}{
    padding: 5px 10px;
    font-size: 18px;
  }
`;

export const Cross = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    & > svg {
      fill: #cc1313;
    }
  }

  ${Media.down.m}{
    width: 20px;
    height: 20px;
  }
`;

export const MainContainer = styled.div`
  width:100%;
  display: flex;
  padding: 24px;
  box-sizing: border-box;
  position: relative;
  ${Media.down.m}{
    padding: 12px;
  }
`;

export const SigningAsContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  box-sizing: border-box;
  ${Media.down.m}{
    padding-top: 15px;
  }
`;

export const FormContainer = styled.div`
  width: 60%;
  box-sizing: border-box;
  border-right: 1px solid #a7a7a7;
`;
export const Or = styled.div`
  background-color: white;
  height: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-family: Futura;
  position: absolute;
  top: 50%;
  left: 55%;
  ${Media.down.m}{
    height: 15px;
    font-size: 12px;
  }
`;

export const GoogleSign = styled.div`
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(246, 245, 245);
  border-radius: 3px;
  border: 1px solid rgb(182, 182, 182);
  ${Media.down.m}{
    width: 100px;
    height: 30px;
  }
`;
