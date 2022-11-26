import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";
import { PaginationStyles } from "../../Pagination";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-top: 75px;
    min-height: calc(100vh - 75px);
    ${PaginationStyles}
    .main-select{
        width: 170px;
        height: 50px;
        margin-left:20px;
        margin-top: 20px;
    }
    ${Media.down.m}{
        .main-select{
            width: 120px;
            height: 30px;
            margin-left:10px;
            margin-top: 10px;
        }
    }
`;
