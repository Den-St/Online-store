import styled from "styled-components";
import { Media } from "../../assets/breakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top:75px;
    padding-top: 16px;
    gap: 10px;
    padding: 10px 32px;
    box-sizing: border-box;
`;

export const Name = styled.div`
    width: 100%;
    font-size: 30px;
    font-weight: 300;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 18px;
    }
`;

export const Rating = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 20px;
    align-items: center;
`;

export const Main = styled.div`
    width: 100%;
    display: flex;
    ${Media.down.m}{
        flex-direction:column;
    }
`;

export const ReviewsBlock = styled.div`
    width: 100%;
    display: flex;
    ${Media.down.m}{
        flex-direction: column;
    }
`;



