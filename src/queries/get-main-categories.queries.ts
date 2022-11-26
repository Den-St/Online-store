import { gql } from '@apollo/client';
export const GetMainCategoriesQuery = gql`
query getAllMainCategories{
    getAllMainCategories{
      name,
      parentId,
      id
    }
  }
`;