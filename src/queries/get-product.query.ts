import { gql } from "@apollo/client";

export const GetProductQuery = gql`
query getOneProduct($id:Float!){
    getOneProduct(getOneDetailedProductById:$id){
      name,
      id,
      price,
      confirmed,
      discountPrice,
      isOnSale,
      amountInStorage,
      popularity,
      potentialAmountInStorage,
      rating,
      textDescription,
      seller{
        id,
        name,
        image{
          url,
          id
        }
      },
      images{
        id,
        url,
        isMain
      },
      characteristics{
        name,
        id,
        value{
          value,
          name,
          id,
        }
      },
      category{
        name,
        id,
        parentId,
        isMain,
  
      }
    }
  }
`;