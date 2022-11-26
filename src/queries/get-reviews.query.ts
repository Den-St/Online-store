import { gql } from '@apollo/client';

export const GetReviewsQuery = gql`
query getReviews($dto: GetReviewsDto!) {
  getReviews(getReviews: $dto) {
    id,
    text,
    creator{
      id,
      name
    },
    createdAt,
    rate,
    consText,
    prosText
  }
}
`;