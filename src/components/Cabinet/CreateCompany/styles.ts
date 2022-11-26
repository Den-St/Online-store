import styled from "styled-components";
import { Media } from "../../../assets/breakpoints";

export const MainContainer = styled.div`
    display: flex;
    width: 100%;
    padding-right:40px;
    ${Media.down.m}{
        padding-right: 20px;
        flex-direction: column;
    }
`;
export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 50%;
    ${Media.down.m}{
        gap: 10px;
    }
`;

export const PreviewContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    ${Media.down.m}{
        gap:10px
    }
`;

export const PreviewImage = styled.img`
    max-width:300px;
    max-height:300px;
    object-fit: contain;
    ${Media.down.m}{
        max-width:70px;
        max-height:70px;
    }
`;

export const PreviewName = styled.span`
    font-size: 20px;
    font-weight: 300;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const PreviewHeader = styled.h2`
    font-size: 24px;
    font-weight: 300;
    font-family: Helvetica;
    ${Media.down.m}{
        font-size: 14px;
    }
`;