import { gql } from '@apollo/client';
export const GetCategoryById = gql`
query getCategoryById($id:Float!){
    getCategoryById(getCategoryById:$id){
      name,
      isMain,
      parentId,
      id,
      characteristics{
        id,
        name,
        values{
          name,
          value,
          id
        }
      }
    }
  }
`;