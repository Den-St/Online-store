import { Media } from './../../../assets/breakpoints';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette } from '../../ui-kit/palette';

export const Container = styled.div`
    width:23%;
    min-width: 300px;
    padding: 24px 12px 24px 44px;
    box-sizing: border-box;
    border-right: 0.5px solid #abc2d3;
    min-height: calc(100vh - 72px);
    ${Media.down.m} {
        min-width: unset;
        width: 50%;
        padding: 20px 8px 24px 8px;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
`;

export const CategoryItem = styled(Link)`
    font-size: 16px;
    font-family: Helvetica;
    width: 100%;
    font-weight: 300;
    color: ${palette.linkBlue};
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: #f84147;
        text-decoration: underline;
    }
    
`;

