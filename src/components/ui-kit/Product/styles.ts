import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Media } from "../../../assets/breakpoints";

export const Container = styled.div`
    width: 190px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 0.7px solid #858484;
    gap: 10px;
    border-radius: 2px;
    box-sizing: border-box;
    padding: 10px;
    text-decoration: none;
    color: black;
    ${Media.down.m}{
        width: 90px;
        height: 170px;
        gap: 7px;
        padding: 7px;
    }
`;

export const Photo = styled(Link)`
    width: 160px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>img{
        width: 100%;
        max-width: 160px;
        max-height: 200px;
    }
    ${Media.down.m}{
        width: 75px;
        height: 60px;
    }
`;

export const Name = styled(Link)`
    font-size: 15px;
    font-family: Helvetica;
    font-weight: 100;
    color:black;
    text-decoration: none;
    height: 50px;
    ${Media.down.m}{
        font-size: 11px;
    }
`;

export const Price = styled.span`
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 300;
    ${Media.down.m}{
        font-size: 14px;
    }
`;

export const AddToCartContainer = styled.div`
    width: 100%;
    display: flex;  
    justify-content: space-between;
    &.anticon{
        color:black;
    }
`;

export const AlreadyInCart = styled.div`
    width: 20px;
    height: 20px;
    position: relative;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.down.m}{
        width: 16px;
        height: 16px;
        font-size: 16px;
    }
`;

export const Tick = styled.div`
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #0fb74a;
    font-size: 12px;
    position: absolute;
    border-radius: 50%;
    top: -3px;
    right: -3px;
    ${Media.down.m}{
        width: 12px;
        height: 12px;
        font-size: 8px;
    }
`;


export const FavoriteButton = styled.button`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    color:orange;
`;

export const ProductsContainer = styled.div`
    display: flex;
    row-gap: 20px;
    box-sizing: border-box;
    column-gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;

    ${Media.down.m}{
        row-gap: 10px;
        column-gap: 10px;
    }
`;

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;