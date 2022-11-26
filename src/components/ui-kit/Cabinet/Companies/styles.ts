import { Media } from './../../../../assets/breakpoints';
import styled from "styled-components";
import { breatheSceletonAnimation } from "../../animations";

export const CompaniesContainer = styled.div`
    display: flex;
    gap: 10px;
    width: 1000px;
    flex-wrap: wrap;
    ${Media.down.m}{
        width: 200px;
    }
`;

export const Company = styled.div<{$isChosen:boolean}>`
    ${({$isChosen}) => $isChosen ? `border: 2px solid #4fef43;` : `border: 2px solid black;`}
    padding:0 4px;
    border-radius:2px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 300;
    cursor:pointer;
    transition:0.2s;
    height:60px;
    gap:10px;
    &:hover{
        box-shadow:0px 0px 6px #4fef43;
        border:2px solid #43ce39;
    }
    ${Media.down.m}{
        height:40px;
        font-size: 12px;
        gap:5px;
    }
`;

export const LogoImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    ${Media.down.m}{
        width: 25px;
        height: 25px;
    }
`;

export const CompanySceleton = styled.div`
    width: 100px;
    height: 40px;
    animation: ${breatheSceletonAnimation} 1s;
    ${Media.down.m}{
        width: 60px;
    }
`;

export const SceletonContainer = styled.div`
     padding:0 4px;
    border-radius:2px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height:60px;
    border: 1px solid #878787;
    ${Media.down.m}{
        height: 40px;
        gap: 5px;
    }
`;

export const SceletonImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 2px;
    background-color: ${breatheSceletonAnimation};
    ${Media.down.m}{
        width: 25px;
        height: 25px;
    }
`;

export const SceletonName = styled.div`
    border-radius: 5px;
    height: 20px;
    width: 40px;
    background-color: ${breatheSceletonAnimation};
    
    ${Media.down.m}{
        height: 8px;
        width: 20px;
    }
`;