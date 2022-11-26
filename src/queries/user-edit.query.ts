import { gql } from '@apollo/client';
export const UserEdit = gql`
    mutation editUserInfo($dto:UserEditDto!){
        editUserInfo(editUserInfo:$dto){
            token
        }
    }`