import { gql } from '@apollo/client';
export const BuyProductsQuery = gql`
mutation buyProduct($dto:ProductBuyDto!){
    buyProduct(buyProduct:$dto) {
      id,
      product{
        name
      },
      buyer{
        name
      },
      amountToBuy
    }
  }
`;