import { gql } from '@apollo/client';
export const DeleteProductFromCartQuery = gql`
mutation deleteProductFromCart($dto:DeleteProductFromCartDto!){
  deleteProductFromCart(deleteProductFromCart:$dto){
    id
  }
}
`;