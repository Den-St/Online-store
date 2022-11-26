import {gql} from "@apollo/client";

export const Login = gql`
    mutation login($dto:AuthLoginDto!) {
      login(login:$dto){
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