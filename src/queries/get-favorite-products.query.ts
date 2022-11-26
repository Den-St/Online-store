import { gql } from '@apollo/client';
export const GetFavoriteProductsQuery = gql`
query getUsersFavoriteProducts($userId:Float!){
    getUsersFavoriteProducts(getUsersFavoriteProducts:$userId) {
      id,
      name,
      images{
        id,
        url,
        isMain
      },
      price
    }
  }
`;