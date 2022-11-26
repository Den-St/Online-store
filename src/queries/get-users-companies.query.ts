import { gql } from '@apollo/client';
export const GetUsersCompanies = gql`
query getUsersCompanies($id:Float!){
    getUsersCompanies(getUsersCompanies:$id){
      name,
      id,
      image{
        url,
        id
      }
    }
  }
`;