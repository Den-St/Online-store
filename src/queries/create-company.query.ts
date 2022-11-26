import { gql } from '@apollo/client';

export const CreateCompanyQuery = gql`
    mutation createCompany($dto:CompanyCreateDto!){
        createCompany(createCompany:$dto){
            name
        }
    }
`;