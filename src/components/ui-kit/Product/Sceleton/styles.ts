import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";
import { breatheSceletonAnimation } from "../../animations";

export const Container = styled.div`
    width: 200px;
    height: 150px;
    border-radius: 3px;
    border: 1px solid #8e8d8d;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 10px 7px;
    ${Media.down.m}{
        width: 90px;
        height: 170px;
        gap: 13px;
        padding: 7px;
    }
`;

export const Photo = styled.div`
    width: 150px;
    height: 70px;
    border-radius: 4px;
    animation: ${breatheSceletonAnimation} 1s;
    ${Media.down.m}{
        width: 75px;
        height: 60px;
    }
`;
export const Title = styled.div`
    width: 120px;
    height: 18px;
    border-radius: 15px;
    animation: ${breatheSceletonAnimation} 1s;
    ${Media.down.m}{
        width: 70px;
        height: 10px;
    }
`;

export const SubTitle = styled.div`
    width: 70px;
    height: 18px;
    border-radius: 15px;
    animation: ${breatheSceletonAnimation} 1s;
    ${Media.down.m}{
        width: 40px;
        height: 10px;
    }
`;
