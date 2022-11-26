import {gql} from "@apollo/client";


export const Register = gql`
    mutation Register($dto:UserCreateDto!){
      register(register:$dto){
        token,
        phoneNumber,
        name,
        roles{
          name,
          value
        },
        email,
        id
      }
    }
`;