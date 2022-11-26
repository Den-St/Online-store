import { gql } from '@apollo/client';
export const getNotMainCategories = gql`
query getAllNotMainCategories{
    getAllNotMainCategories{
      name,
      parentId,
      id
    }
  }
`;