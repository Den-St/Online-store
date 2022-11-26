import styled from "styled-components";
import { Media } from "../../../assets/breakpoints";
import { breatheSceletonAnimation } from './../animations';

export const CategoryContainer = styled.div<{$isChosen:boolean}>`
    font-size: 16px;
    font-family: Helvetica;
    width: 100%;
    font-weight: 300;
    color: #3e77aa;
    cursor: pointer;
    ${({$isChosen}) => $isChosen && `color: #f7373d;`}
    &:hover{
        color: #f84147;
    }

    ${Media.down.m}{
        font-size:12px;
    }
`;

export const CategoriesContainer = styled.div`
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: flex-start;
`;

export const CategorySceleton = styled.div`
    width: 150px;
    height: 20px;
    animation: ${breatheSceletonAnimation} 1s;
    ${Media.down.m}{
        width: 100px;
    }
`;