import { Media } from './../../assets/breakpoints';
import { breatheSceletonAnimation } from './../ui-kit/animations';
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 72px);
    box-sizing: border-box;
    padding: 32px;
    margin-top: 72px;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`;
export const CategoryItem = styled(Link)`
    width: 150px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #8f8e8e;
    border-radius: 3px;
    ${Media.down.m}{
        width: 90px;
    }
`;


export const CategorySceleton = styled.div`
    width: 150px;
    height: 100px;
    border: 1px solid #8f8e8e;
    animation: ${breatheSceletonAnimation} 1s;
`;