import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';

export const Container = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-top: 30px;
`;

export const RateContainer = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 5px 0;
    gap:2px;
    ${Media.down.m}{
        width: 150px;
        height: 35px;
    }
`;

export const RateStar = styled.div<{$isActive:boolean,$isEditable?:boolean}>`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({$isActive}) => $isActive ? `color:orange;` : `color:gray;`};
    
    ${({$isEditable}) => 
        $isEditable && `
        width: 30px;
        height: 30px;
        font-size: 30px;
        cursor: pointer;
        &:hover{
            color:orange;
        };`};
    
    ${Media.down.m}{
        width: 20px;
        height: 20px;
        font-size:15px;
        ${({$isEditable}) => 
            $isEditable && `
            width: 20px;
            height: 20px;
            font-size: 20px;
            cursor: pointer;
            &:hover{
                color:orange;
            };`
        };
    }
`;