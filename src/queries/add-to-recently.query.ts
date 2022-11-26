import { gql } from '@apollo/client';
export const AddToRecentlyQuery = gql`
mutation addToViewedProducts($dto:AddToViewedProductsDto!) {
    addToViewedProducts(addToViewedProducts:$dto){
      id,
      name
    }
  }
`;