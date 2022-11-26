import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Media } from '../../../assets/breakpoints';
export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-family: Helvetica;
`;

export const ReceiptContainer = styled.div<{status:string}>`
    width: 70%;
    min-width: 900px;
    height: 10vh;
    box-sizing: border-box;
    border: 1px solid #a7a7a7;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    ${({status}) => status === 'Done' && `border-left:15px solid #00a046;`};
    ${({status}) => status === 'Not confirmed' && `border-left:15px solid #ebb81f;`};
    ${({status}) => status === 'Declined' && `border-left:15px solid #ed0c2e`};

    ${Media.down.m}{
        min-width:210px;
        height: 9vh;
        ${({status}) => status === 'Done' && `border-left:7px solid #00a046;`};
        ${({status}) => status === 'Not confirmed' && `border-left:7px solid #ebb81f;`};
        ${({status}) => status === 'Declined' && `border-left:7px solid #ed0c2e`};
    }
`;

export const ReceiptDirContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
    box-sizing: border-box;
`;

export const IdAndDateContainer = styled.div`
    gap: 3px;
    font-size: 14px;
    font-weight:100;
    color:#797878;
    display: flex;
    align-items: flex-end;
    ${Media.down.m}{
        font-size: 9px;
        flex-direction: column;
        align-items: flex-start;
    }
`;
export const IdContainer = styled.div`
    display: flex;
    gap: 3px;
`;
export const Value = styled.span`
    font-size: 15px;
    ${Media.down.m}{
        font-size: 9px;
    }
`;

export const Status = styled.span`
    font-size: 16px;
    font-weight: 200;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const Title = styled.span`
    font-size: 13px;
    font-weight: 100;
    color: #8f8f8f;
    ${Media.down.m}{
        font-size: 10px;
    }
`;
export const TotalPrice = styled.span`
    font-size: 16px;
    font-weight: 200;
    gap: 2px;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    gap: 3px;
    width: 20%;
    justify-content: space-between;
`;

export const Name = styled(Link)`
    font-size: 14px;
    color:black;
    font-weight:200;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    ${Media.down.m}{
        font-size: 8px;
    }
`;

export const Image = styled.img`
    width: 30%;
    object-fit: contain;
    ${Media.down.m}{
        display: none;
    }
`;

export const NoOrders = styled.div`
    width: 70%;
    min-width: 900px;
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    ${Media.down.m}{
        gap: 6px;
        min-width: 200px;
    }
`;

export const NoOrdersImage = styled.img`
    width: 40%;
    height: 40%;
    object-fit: contain;
`;

export const NoOrdersTitle = styled.h1`
    font-size: 20px;
    font-weight: 200;
    ${Media.down.m}{
        font-size: 16px;
    }
`;