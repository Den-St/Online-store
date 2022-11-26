import { gql } from '@apollo/client';
export const AddProductToCartQuery = gql`
mutation addProductToCart($dto:AddProductToCartDto!) {
  addProductToCart(addProductToCart:$dto){
    id
  }
}
`