import { GetChildCategoriesQuery } from './../queries/get-child-categories.query';
import { useQuery } from '@apollo/client';
import { getChildCategoriesRes } from '../types/category.type';

export const useGetChildCategories = (id?:number) =>{
    const {data,loading} = useQuery<getChildCategoriesRes,{id?:number}>(GetChildCategoriesQuery,{variables:{id:id}});
    return {data,loading};
}