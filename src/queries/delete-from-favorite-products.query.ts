import { gql } from '@apollo/client';
export const DeleteFromFavoriteProductsQuery = gql`
mutation deleteFromFavoriteProducts($dto:AddToViewedProductsDto!){
    deleteFromFavoriteProducts(deleteFromFavoriteProducts:$dto){
      id
    }
  }
`;