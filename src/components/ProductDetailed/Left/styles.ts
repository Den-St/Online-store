import styled from 'styled-components';
import { Media } from '../../../assets/breakpoints';

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Media.down.m}{
        width: 100%;
        justify-content: center;
    }
`;

export const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${Media.down.m}{
        align-items: center;
    }
`;
export const ChosenImageContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    ${Media.down.m}{
        gap: 7px;
        width: 250px;
        height: 150px;
    }
`;

export const ArrowButton = styled.button<{$isActive:boolean}>`
    border: none;
    outline: none;
    background-color: transparent;
    width: 5%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        ${({$isActive}) => $isActive && `color:#d62f2f;`}
    }
    font-size:20px;
    ${Media.down.m}{
        font-size:14px;
    }
`;

export const ChosenImage = styled.img`
    width: 80%;
    height: 100%;
    max-width: 700px;
    max-height: 400px;
    object-fit: contain;
    ${Media.down.m}{
        width: 250px;
        height: 150px;
    }
`;

export const AllImagesContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    gap: 3px;
    ${Media.down.m}{
        overflow-x: scroll;
        height: 50px;
    }
`;

export const ImageItem = styled.img<{$isChosen:boolean}>`
    max-width:100px;
    height: 68px;
    object-fit: contain;
    box-sizing: border-box;
    cursor: pointer;
    ${Media.down.m}{
        padding-top:10px; 
        width: 80px;
        height: 50px;
    }
    ${({$isChosen}) => $isChosen && `border:1px solid #3ec435`}
`;