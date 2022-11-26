import { gql } from "@apollo/client";

export const GetFilteredProductsQuery = gql`
  query filterProducts($dto:ProductFilterDto!) {
  filterProducts(filterProducts:$dto) {
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