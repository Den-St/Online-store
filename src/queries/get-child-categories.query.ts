import { gql } from '@apollo/client';
export const GetChildCategoriesQuery = gql`
query getChildCategories($id:Float!){
    getChildCategories(getChildCategories:$id){
      name,
      parentId,
      id
    }
  }
`;