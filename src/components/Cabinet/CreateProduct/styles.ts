import styled from "styled-components";
import { Media } from "../../../assets/breakpoints";

export const Container = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${Media.down.m}{
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    gap: 20px;
    ${Media.down.m}{
        margin-top: 10px;
        gap: 10px;
    }
`;
    
export const RightContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
    gap:10px;
    ${Media.down.m}{
        margin-top: 10px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap:20px;
    margin-top: 10px;
    ${Media.down.m}{
        gap:10px;
    }
`;

export const SeePreview = styled.span`
    width: 170px;
    height: 50px;
    background-color: #28179b;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 20px;
    font-family: Helvetica;
    font-weight: 200;
    cursor: pointer;
    ${Media.down.m}{
        width: 80px;
        height: 30px;
        font-size: 12px;
    }
`;


export const PhotosInput = styled.div`
    display: flex;
    gap: 10px;
    align-self: center;
`;

export const Photos = styled.div`
    display: flex;
    gap: 5px;
    align-self: center;
    width: 300px;
    overflow-x: scroll;
    ${Media.down.m}{
        width: 120px;
    }
`;

export const NotValidMessage = styled.div`
    font-size: 20px;
    margin-top: 15px;
    font-family: Helvetica;
    font-weight:200; 
    padding: 10px;
    background-color: #cfcccc8d;
    border-radius: 5px;
    ${Media.down.m}{
        font-size: 14px;
        padding: 6px;
    }
`;