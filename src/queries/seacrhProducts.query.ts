import { gql } from '@apollo/client';
export const SearchProductsQuery = gql`
query searchProducts($dto:SearchProductsDto!){
  searchProducts(searchProducts:$dto){
    products{
      name,
    id,
    price,
    images{
      id,
      url,
      isMain
    }
  }
   total 
  }
}
`;