import { gql } from '@apollo/client';
export const ChangeProductNumberQuery = gql`
mutation changeProductNumber($dto:ChangeProductNumberDto!) {
    changeProductNumber(changeProductNumber:$dto){
      cartItems{
        id,
        product{
          name
        },
        number
      }
    }
  }
`;