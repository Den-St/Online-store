import styled from "styled-components";
import { Media } from "../../../../assets/breakpoints";

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    background-color: white;
    border-radius: 10px;
    min-height: 75%;
    box-sizing: border-box;
    padding: 10px 15px;
    overflow-y: scroll;
    height: 70%;
    ${Media.down.m}{
        gap: 10px;
        padding: 5px 10px;
    }
`;

export const Header = styled.h1`
    font-size: 24px;
    font-family: Helvetica;
    font-weight: 200;
    letter-spacing: 1.5px;
    ${Media.down.m}{
        font-size: 16px;
    }
`;

export const MainContainer = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
`;

export const PhotosContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 10px;
    align-items: center;
    gap: 10px;
    ${Media.down.m}{
        padding: 5px;
        gap: 5px;
    }
`;

export const InfoContainer = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap:10px;
    box-sizing: border-box;
    padding: 10px;
    ${Media.down.m}{
        padding: 5px;
        gap:5px;
    }
`;

export const ChosenPhoto = styled.div`
    width: 500px;
    height: 300px;
    display: flex;
    align-items:center;
    justify-content: center;
    &>img{
        max-width: 500px;
        max-height: 300px;
        object-fit: cover;
    }
    ${Media.down.m}{
        width: 150px;
        height: 80px;
        &>img{
            width: 150px;
            height: 80px;
            object-fit: cover;
        }
    }

`;

export const Photos = styled.div`
    width: 300px;
    display: flex;
    gap: 3px;
    overflow-x:scroll;
    ${Media.down.m}{
        width: 100px;
    }
`;

export const PhotoItem = styled.div<{$chosen:boolean}>`
    width: 100px;
    height: 60px;
    display: flex;
    align-self: center;
    justify-content: center;
    box-sizing: border-box;
    cursor:pointer;
    position:relative;
    &>img{
        border:${({$chosen}) => $chosen && `2px solid #4fef43;`};
        box-sizing: border-box;
        width: 100px;
        height: 60px;
        object-fit: contain;
    }
    ${Media.down.m}{
        width: 50px;
        height: 30px;
    }
    
`;

export const DeleteButton = styled.button`
    color:white;
    width: 10px;
    height: 10px;
    display: flex;
    align-self: center;
    justify-content: center;
    position: absolute;
    right: 4px;
    top: 4px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: crosshair;
    transition: 0.3s;
    &:hover{
        &>.anticon{
            color:#e01212
        }
    }
    
`;

export const MakeMainButton = styled.button`
    color:white;
    width: 10px;
    height: 10px;
    display: flex;
    align-self: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 4px;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: crosshair;
    transition: 0.3s;
    &:hover{
        &>.anticon{
            color:#00ff04
        }
    }
`;

export const Price = styled.div`
    width: 100%;
    border:1px solid #898888;

    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    justify-content: flex-start;

    font-size: 24px;
    font-weight: 300;
    font-family: Helvetica;
`;  

export const Seller = styled.span`
    font-size: 18px;
    font-family: Helvetica;
    font-weight: 200;
`;

export const CompanyContainer = styled.div`
    width: 100%;
    border:1px solid #898888;
    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    box-sizing: border-box;
    &>img{
        width:80px;
        height:30px;
        object-fit: cover;
    }
`;

export const Company = styled.div`
    width: 200px;
    display: flex;
    gap: 20px;
`;

export const CharacteristicsContainer = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border:1px solid #898888;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 10px;
`;

export const CharacteristicItem = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    font-family: Helvetica;
    font-weight: 200;
    gap: 3px;
`;

export const CharName = styled.span`
    font-size: 20px;
`;

export const CharValue = styled.span`
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 20px;
`;

export const DescriptionHeader = styled.h1`
    font-size: 24px;
    font-weight: 200;
    font-family: Helvetica;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 700px;
`;

export const Description = styled.p`
    padding: 0;
    font-size: 15px;
    font-weight: 100;
    font-family: Helvetica;
`;
