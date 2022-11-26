import { gql } from '@apollo/client';
export const CreateReviewQuery = gql`
  mutation createReview($dto:CreateReviewDto!){
    createReview(createReview:$dto){
      id
  }
}
`;