import { useSearchParams } from 'react-router-dom';
import { getAllProductsQuery } from '../queries/get-all-products.query';
import { useQuery } from '@apollo/client';
import { GetAllProductsRes } from '../types/product.type';

export const useGetAllProducts = () => {
    const [params, setParams] = useSearchParams();
    const pageNumber = Number(params.get('page')) || 1;

    const {data,loading} = useQuery<GetAllProductsRes,{dto:{page:number}}>(getAllProductsQuery,{variables:{dto:{page:Number(pageNumber)}}});
    const onChangePage = (page: any) => {
        params.set('page', page);
        setParams(params)
    }
    return {data,loading,pageNumber, onChangePage};
}