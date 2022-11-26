import { gql } from '@apollo/client';
export const GetProductIdsInCart = gql`
query getProductIdsInCartByUserId($id:Float!) {
    getProductIdsInCartByUserId(getProductIdsInCartByUserId:$id) 
  }
`;