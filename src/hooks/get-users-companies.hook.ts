import { userState } from '../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@apollo/client';
import { GetUsersCompanies } from '../queries/get-users-companies.query';
import { GetUsersCompaniesReq, GetUsersCompaniesRes } from '../types/company.type';
export const useGetUsersCompanies = () => {
    const user = useRecoilValue(userState);
    const {data,loading,error,refetch} = useQuery<GetUsersCompaniesRes,GetUsersCompaniesReq>(GetUsersCompanies,{variables:{
        id:user.user.id
    }});
    
    return {data,loading,error,refetch};
}