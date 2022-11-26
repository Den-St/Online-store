import { gql } from '@apollo/client';
export const GetViewedProductsQuery = gql`
query getUsersRecentlyViewed($userId:Float!) {
    getUsersRecentlyViewed(getUsersRecentlyViewed:$userId){
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