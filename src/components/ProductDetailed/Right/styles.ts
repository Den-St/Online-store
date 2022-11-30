import { Media } from './../../../assets/breakpoints';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette } from '../../ui-kit/palette';

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 15px;
    ${Media.down.m}{
        width: 100%;
    }
`;

export const PriceContainer = styled.div`
    width: 100%;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    ${Media.down.m}{
       height: 50px;
        padding: 5px;
    }
`;

export const Price = styled.span`
    font-size: 25px;
    font-family: Helvetica;
    font-weight: 300;
    ${Media.down.m}{
        font-size: 20px;
    }
`;

export const CompanyContainer = styled.div`
    width: 100%;
    border: 1px solid #a7a7a7;
    border-radius: 4px;
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 100;
    ${Media.down.m}{
        height: 50px;
        padding: 5px;
    }
`;

export const CompanyName = styled.span`
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 300;
    ${Media.down.m}{
        font-size: 18px;
    }
`;

export const CompanyLogo = styled.img`
    width: 100px;
    height: 100%;
    object-fit: contain;
    ${Media.down.m}{
        width: 40px;
    }

`;

export const CharacteristicsContainer = styled.div`
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    font-size: 20px;
    gap:5px;
    ${Media.down.m}{
        padding: 5px;
    }
`;

export const CharacteristicsHeader = styled.h1`
    font-size:24px;
    font-family: Helvetica;
    font-weight: 300;
    ${Media.down.m}{
    }
`;

export const CharacteristicItem = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    width: 100%;
    ${Media.down.m}{
        font-size: 16px;
        height: 20px;
    }
`;
export const CharacteristicName = styled.span`
    width:40%;
    font-size: 16px;
    font-family: Helvetica;
    font-weight: 100;
    display: flex;
    gap:5px;
    padding-right: 7px;
    box-sizing: border-box;
    align-items: center;
    height: 20px;
    ${Media.down.m}{
        font-size: 14px;
        height: 15px;
    }
`;

export const DottedLine = styled.hr`
    width: 100%;
    border-top: 1px dotted gray;
`;

export const CharacteristicValue = styled.span`
    font-size: 14px;
    font-weight: 100;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 16px;
    }
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap:5px;
    ${Media.down.m}{
        padding: 5px;
    }
`;

export const DescriptionHeader = styled.h1`
    font-size: 24px;
    font-family: Helvetica;
    font-weight: 200;
    ${Media.down.m}{
        font-size: 17px;
    }
`;

export const Description = styled.p`
    max-width: 500px;
    font-size: 15px;
    font-weight: 100;
    font-family: Helvetica;
    margin: 0;
    ${Media.down.m}{
        width: 300px;
        font-size: 15px;
    }
`;

export const AddToCartButton = styled.button<{$blocked:boolean}>`
    width: 70px;
    height: 37px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 200;
    margin-left: 50px;
    border-radius: 5px;
    justify-content: space-between;
    ${({$blocked}) => !$blocked ? `background-color: #00a046;` : `background-color: #cecccc`};
    color:white;
    ${({$blocked}) => !$blocked ? `cursor: pointer;` : `cursor: not-allowed;`};
    &:hover{
        ${({$blocked}) => !$blocked && `opacity: 0.95;`}
    }

    ${Media.down.m}{
        width: 65px;
        padding:2;
        height: 30px;
        font-size: 16px;
        margin-left: 25px;
    }
`;

export const AlreadyInCart = styled(Link)`
    width:100px;
    height: 30px;
    margin-left: 10px;
    color:black;
    text-decoration: none;
    color: ${palette.linkBlue};
    &:hover{
        color: #f84147;
        text-decoration: underline;
    }
    font-weight: 200;
    font-family: Helvetica;
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center;
    .anticon{
        font-size:26px;
        color:#04b20a;
        text-decoration: none;
    }
    ${Media.down.m}{
        font-size: 11px;
        width:40px;
        margin-left: 30px;
        .anticon{
            font-size:20px;
            color:#04b20a;
            text-decoration: none;
        }
    }
`;

export const IsInStockContainer = styled.div`
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #d0ecdbab;
    color: #00a046;
    gap: 5px;
    font-family:Helvetica;
        font-size: 16px;
    ${Media.down.m}{
        margin-top: 10px;
    }
`;

export const Tick = styled.div`
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid green;
    box-sizing: border-box;
    border-radius: 50%;
    font-size: 12px;
    ${Media.down.m}{
        width: 10px;
        height: 10px;
        font-size: 8px;
    }

`;

export const NoMoreInStock = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    color:#797878;
    padding: 7px;
    font-size: 14px;
    font-family: Helvetica;
    border-radius: 3px;
    ${Media.down.m}{
        font-size: 11px;
        height: 20px;
    }
`;

export const Minus = styled.div`
    width: 17px;
    height: 17px;
    border: 1px solid #797878;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${Media.down.m}{
        width: 10px;
        height: 10px;
    }
`;