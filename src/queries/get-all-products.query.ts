import { gql } from '@apollo/client';
export const getAllProductsQuery = gql`
query getAllProducts($dto:GetAllDto!){
  	getAllProducts(getAllProducts:$dto){
      products{
        name,
    	id,
      images,{
        id,
        url,
        isMain
      },
    	price
      },
      total
    }
}
`;