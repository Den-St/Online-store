import { gql } from '@apollo/client';
export const GetCartQuery = gql`
query getCartByUserId($id:Float!) {
  getCartByUserId(getCartByUserId:$id) {
    product{
      id,
      name,
      price,
      amountInStorage,
      images{
        url,
        id,
        isMain
      }
    },
    number
  }
}
`;