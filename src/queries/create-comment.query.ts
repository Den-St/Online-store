import { gql } from '@apollo/client';
export const CreateCommentQuery = gql`
mutation createComment($dto:CreateCommentDto!){
  createComment(createComment:$dto){
    id
  }
}
`;