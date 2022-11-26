import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';
import { breatheSceletonAnimation } from '../ui-kit/animations';
export const Container = styled.div`
    margin-top: 75px;
    width: 100%;
    height: calc(100% - 75px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    &>.antdicon {
        font-size: 50px;
    }
`;

export const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Media.down.m}{
        width: 80%;
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #a7a7a7;
    flex-direction: column;
    align-items: flex-start;
    ${Media.down.m}{
        height: 120px;
        padding: 5px;
    }
`;

export const ItemTop = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    gap:10px;
`;

export const Image = styled.img`
    width: 70px;
    height: 90px;
    object-fit: contain;
    ${Media.down.m}{
        width: 50px;
        height: 40px;
    }
`;

export const Name = styled(Link)`
    width: 500px;
    font-size: 16px;
    font-family: Helvetica;
    font-weight: 100;
    color:black;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    ${Media.down.m}{
        width: unset;
        font-size: 13px;
    }
`;

export const DeleteButton = styled.button`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius:4px;
    outline: none;
    background: transparent;
    font-size: 20px;
    transition: 200ms;
    cursor: pointer;
    margin-left: 200px;
    &:hover{
        background-color: #d5d4d4a1;
    }
    ${Media.down.m}{
        width: 30px;
        height: 30px;
        margin-left: 50px;
        font-size: 14px;
    }
`;


export const ItemBottom = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
    gap: 10px;
`;

export const Number = styled.input`
    font-size: 14px;
    font-family: Helvetica;
    font-weight: 100;
    width: 50px;
    ${Media.down.m}{
        font-size: 14px;
        width: 30px;
    }
`;

export const BuyButtonContainer = styled.div`
    width: 200px;
    margin-left: 77%;
    margin-top: 10px;
    height: 100px;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    align-items: center;
    border: 1px solid #83af76;
    justify-content: space-between;
    box-shadow: 2px 2px 2px #0404;
    gap: 10px;
    border-radius: 5px;
    background-color: #94e37a5d;
    ${Media.down.m}{
        width: 100px;
        height: 50px;
        padding: 10px;
        margin-left: 68%;
        gap: 5px;
    }
`;

export const BuyButton = styled.button`
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 200;
    background-color:#32b70a;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    transition: 300ms;
    &:hover{
        opacity: 0.95;
    }
    ${Media.down.m}{
        width: 50px;
        height: 20px;
        font-size: 14px;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 400;
    height: 24px;
    align-items: center;
    gap: 3px;
    font-family: Helvetica;
`;

export const Price = styled.span`
    font-size: 22px;
    font-weight: 100;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 15px;
    }
`;

export const Total = styled.span`
    font-size: 22px;
    font-weight: 400;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 15px;
    }
`;

export const SceletonContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid #a7a7a7;
    border-radius: 3px;
    display: flex;
    flex-wrap: wrap;
    gap:5px;
    box-sizing: border-box;
    padding:10px;
    
`;

export const SceletonName = styled.div`
    width: 400px;
    height: 20px;
    border-radius: 10px;
    animation: ${breatheSceletonAnimation} 10s;

`;

export const SceletonPhoto = styled.div`
    width: 70px;
    height: 90px;
    border-radius: 5px;
    animation: ${breatheSceletonAnimation} 10s;

`;

export const SceletonPrice = styled.div`
    width: 100px;
    height: 20px;
    border-radius:10px;
    animation: ${breatheSceletonAnimation} 10s;
    margin-left: 700px;
`;

export const EmptyCartContainer = styled.div`
    width: 70%;
    height: 60vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid #a7a7a7;
    border-radius: 30px;
    ${Media.down.m}{
        height: 30vh;

    }
`;
export const EmptyCartImage = styled.img`
    width: 300px;
    height: 300px;
    object-fit: contain;
    ${Media.down.m}{
        width: 100px;
        height: 100px;
    }
`;

export const EmptyCartTitle = styled.h1`
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 100;
    ${Media.down.m}{
        font-size: 15px;
    }
`;