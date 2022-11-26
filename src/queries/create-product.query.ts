import { gql } from '@apollo/client';
export const CreateProduct = gql`
mutation createProduct($dto:ProductCreateDto!){
    createProduct(createProduct:$dto){
      name,
      price,
      confirmed,
      textDescription,
      category{
        name
      },
      characteristics{
        name,
        value{
          name,
          value
        },
        values{
          name,
          value,
          id
        }
      }
    }
  }
`;