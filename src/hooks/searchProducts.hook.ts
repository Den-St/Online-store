import { useCallback, useState } from 'react';
import { SearchProductsQuery } from './../queries/seacrhProducts.query';
import { useQuery } from '@apollo/client';
import _debounce from 'lodash/debounce';
import { SearchProductsReq,SeacrhProductsRes } from '../types/product.type';
import { useSearchParams } from 'react-router-dom';
import { OrderRuleT } from '../types/order-rule.type';

export const useSearchBarProducts = () => {
    const {data,loading,refetch} = useQuery<SeacrhProductsRes,SearchProductsReq>(SearchProductsQuery);
    const search = (value?: string) => refetch({dto:{productName:value,orderRule:{fieldName:"popularity",orderValue:"ASC"},page:1}});
    
    const debounceRefetch = useCallback(_debounce(search, 400), []);

    return {data,debounceRefetch,loading};
}

export const useSearchProducts = () => {
    const [params, setParams] = useSearchParams();
    const pageNumber = Number(params.get('page')) || 1;
    const [orderRule,setOrderRule] = useState<OrderRuleT>({fieldName:"popularity",orderValue:"ASC"});
    const text = params.get('text') || '';

    const {data,loading} = useQuery<SeacrhProductsRes,SearchProductsReq>(SearchProductsQuery,{variables:{
        dto:{
            page:pageNumber,
            orderRule:orderRule,
            productName:text
        }
    }});

    const onChangePage = (page: any) => {
        params.set('page', page);
        setParams(params)
    }
    
    return {searchText:text,onChangePage,data,setOrderRule,pageNumber,loading};
}