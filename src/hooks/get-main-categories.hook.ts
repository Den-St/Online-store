import { GetMainCategoriesQuery } from './../queries/get-main-categories.queries';
import { useQuery } from '@apollo/client';
import { GetMainCategoriesRes } from '../types/category.type';

export const useGetMainCategory = () => {
    const {data,loading} = useQuery<GetMainCategoriesRes,undefined>(GetMainCategoriesQuery);
    
    return {categoriesData:data,categoriesLoading:loading};
}