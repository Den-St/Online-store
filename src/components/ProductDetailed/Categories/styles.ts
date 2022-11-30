import { Link } from "react-router-dom";
import styled from "styled-components";
import { palette } from "../../ui-kit/palette";

export const CategoriesContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap:10px;
    align-items: center;
    height: 30px;
`;

export const CategoryItemContainer = styled(Link)`
    display: flex;
    gap:5px;
    height: 20px;
    align-items: center;
    text-decoration: none;
    &:hover{
        &>span{
            color: #f84147;
        }
        &>.anticon{
        color:black;
    }
    }
    &>.anticon{
        color:black;
        text-decoration: none;
    }
`;

export const CategoryName = styled.span`
    font-size: 16px;
    font-family: Helvetica;
    font-weight: 100;
    cursor: pointer;
    color: ${palette.linkBlue};
`;

export const Home = styled(Link)`
    width: 40px;
    display: flex;
    justify-content: flex-start;
    gap:10px;
    color:black;
    text-decoration: none;
`;