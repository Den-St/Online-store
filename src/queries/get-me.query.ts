import {gql} from "@apollo/client";

export const GetMeQuery = gql`
    query getMe($token:String!){
      getMe(getMe:$token){
        name,
        id,
        phoneNumber,
        email,
        roles{
            name,
            value
        }
      }
    }
`;