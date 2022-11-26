import { gql } from "@apollo/client";

export const GetCategoriesLineQuery = gql`
query getCategoriesLine($id:Float!) {
    getCategoriesLine(getCategoriesLine:$id){
      name,
      isMain,
      id,
      parentId
    }
  }
`;