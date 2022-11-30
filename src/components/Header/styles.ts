import { Media } from '../../assets/breakpoints';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  padding:0 30px;
  background-color: #211f1f;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  position: fixed;
  z-index: 1;
  ${Media.down.m} {
    padding:0 15px;
  }
`;

export const BurgerMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border:none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #575757;
  }
  .anticon {
    color: #ffffff;
    font-size: 20px;
  }
  ${Media.down.m}{
    width:20px;
    height:20px;
    }
`;

export const Logo = styled(Link)`
  width: 100px;
  height: 40px;
  font-size: 24px;
  font-family: Futura;
  font-weight: bolder;
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0 50px;
  text-decoration: none;
  ${Media.down.m}{
  margin: 0 30px 0 30px;

  }
`;

export const SearchMobileBtn = styled.div`
    display: none;
    cursor: pointer;
    & svg {
      color: #fff;
      font-size: 20px;
    }
${Media.down.m} {
    display: block;
  }
`;

export const SearchBarContainer = styled.div<{$show?: boolean}>`
  position: relative;
  width:39%;
  height:40px;
  display:flex;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  margin-left: 15%;
  ${Media.down.m} {
    position: absolute;
    top: 72px;
    width: 98%;
    left: 0;
    margin-left: 0;
    border: 1px solid black;
    display: none;
    ${({$show}) => $show && ` display: flex;`}
  }
`;

export const Magnifier = styled.div`
  width:40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 80%;
  border:none;
  outline:none;
  font-family: Helvetica;
  font-weight: lighter;
`;

export const SearchButton = styled(Link)`
  width:80px;
  height:40px;
  background-color: #01a045;
  color:white;
  font-size: 18px;
  text-decoration: none;
  font-family: Futura;
  font-weight: lighter;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    opacity: 0.95;
  }
`;

export const Menu = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  margin-left: 15%;
  ${Media.down.m} {
    margin-left: 0;
  }
`;

export const MenuLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 5px;
  transition: 0.3s;
  position: relative;
  &:hover {
    background-color: #575757;
  }
  .anticon {
    color: #ffffff;
    font-size: 20px;
  }
`;

export const MenuRegistration = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background-color: #575757;
  }
  .anticon{
    color: white;
  }
`;

export const NumberOfProductsInCart = styled.div`
  width: 20px;
  height: 20px;
  background-color: #00a10b;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color:white;
  font-size: 14px;
  font-weight: 200;
  font-family: Futura;
  position: absolute;
  top: -3px;
  right:-2px;
`;

export const ProductsContainer = styled.div`
  min-width: 31.92%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  position: fixed;
  min-height: 50px;
  border: 0.5px solid #e9e9e9;
  top: 56px;

  ${Media.down.m}{
    top: 113px;
    min-width: 100%;
  }
`;

export const Product = styled(Link)`
  width: 100%;
  height: 30px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  border-top: 0.5px solid transparent;
  border-bottom: 0.5px solid transparent;
  &:hover{
    box-sizing: border-box;
    border-top: 0.5px solid #e9e9e9;
    border-bottom: 0.5px solid #e9e9e9;
  }
  transition: 0.2s;
  padding: 20px;
  text-decoration: none;
  gap: 15px;
  justify-content: space-between;
  color: black;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 10px;
  text-overflow: clip;
`;

export const ProductImage = styled.img`
  width: 25px;
  height: 25px;
  object-fit: contain;
`;

export const ProductName = styled.span`
  font-size: 18px;
  font-family: Helvetica;
  font-weight: 100;
`;

export const ProductPrice = styled.span`
  font-size: 18px;
  font-family: Helvetica;
  font-weight: 100;
`;

export const NoProducts = styled.span`
  font-size: 20px;
  font-family: Helvetica;
  font-weight: 200;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const SignButtonContainer = styled.button`
  width: 40px;
  background: transparent;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 5px;
  transition: 0.3s;
  position: relative;
  &:hover {
    background-color: #575757;
  }
  .anticon {
    color: #ffffff;
    font-size: 20px;
  }
  border: none;
  outline: none;
`;