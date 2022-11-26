import { getNotMainCategories } from './../queries/get-not-main-categories.query';
import { useQuery } from '@apollo/client';
import { getNotMainCategoryRes } from '../types/category.type';

export const useGetNotMainCategories = () => {
    const {data,loading} = useQuery<getNotMainCategoryRes,undefined>(getNotMainCategories);
    return {data,loading};
}