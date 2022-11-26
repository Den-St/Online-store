import { gql } from "@apollo/client";

export const AddToFavoriteProductsQuery = gql`
mutation addToFavoriteProducts($dto:AddToViewedProductsDto!){
    addToFavoriteProducts(addToFavoriteProducts:$dto){
      id
    }
  }
`;