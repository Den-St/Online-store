import styled from "styled-components";
import { PaginationStyles } from "../../ui-kit/Pagination";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    ${PaginationStyles}
`;

export const ProductContainer = styled.div`
    display: flex;
    row-gap: 20px;
    box-sizing: border-box;
    column-gap: 20px;
    padding:20px 50px 20px 50px;
    width: 100%;
`;