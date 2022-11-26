import styled from 'styled-components';
import { Media } from '../../assets/breakpoints';
export const CommentsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    font-family: Helvetica;
`;

export const CommentsBlock = styled.div`
    width: 88%;
    display: flex;
    justify-content: space-between;
`;

export const Divider = styled.hr`
    height: calc(100% - 35px);
    border: 1px solid #aeacac;
    border-radius: 5px;
    margin: 0;
`;

export const CommentContainer = styled.div`
    width: 100%;
    min-height:115px;
    border: 1px solid #dadada;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

export const Header = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    gap: 5px;
    align-items: flex-end;
`;

export const Name = styled.span`
    font-size: 18px;
    font-weight: 700;
    ${Media.down.m}{
        font-size: 15px;
    }

`;

export const ResponsedToName = styled.span`
    font-size: 14px;
    font-weight: 100;
    color: #676666;
    ${Media.down.m}{
        font-size: 12px;
    }
`;

export const Text = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 100;
    ${Media.down.m}{
        font-size: 15px;
    }
`;

export const NoComments = styled.span`
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-family: Helvetica;
    text-align: center;
`;