import { gql } from '@apollo/client';
export const GetCommentsQuery = gql`
    query getComments($dto:GetCommentsDto!){
        getComments(getComments:$dto){
            id,
            commentToReview{
            id,
            creator{
                id,
                name
            }
            },
            responseToCommentCreatorName,
            createdAt,
            text,
            creator{
                id,
                name
            }
        }
    }
`;