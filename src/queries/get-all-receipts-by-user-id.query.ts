import { gql } from '@apollo/client';
export const GetAllReceiptsQuery = gql`
query getAllReceiptsByUserId($userId:Float!) {
	getAllReceiptsByUserId(getAllReceiptsByUserId:$userId){
    id,
    product{
      id,
      name,
      images{
        id,
        url,
        isMain
      },
      price
    },
    amountToBuy,
    status,
    createdAt
  }
}
`;