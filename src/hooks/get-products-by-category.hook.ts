import { FilterProductReq } from './../types/product.type';
import { useParams, useSearchParams } from 'react-router-dom';
import { GetFilteredProductsRes } from './../types/product.type';
import { useQuery } from '@apollo/client';
import { GetFilteredProductsQuery } from '../queries/get-products-by-category.query';
import { useState } from 'react';
import { OrderRuleT } from '../types/order-rule.type';

export const useGetProductsByCategory = () => {
    const {id} = useParams();
    const [characteristics,setCharacteristics] = useState<string[]>([]);
    const [params, setParams] = useSearchParams();
    const pageNumber = Number(params.get('page')) || 1;
    const [orderRule,setOrderRule] = useState<OrderRuleT>({fieldName:"popularity",orderValue:"ASC"});
    
    const {data,loading} = useQuery<GetFilteredProductsRes,FilterProductReq>
    (GetFilteredProductsQuery,{variables:{dto:{categoryId:Number(id),charValuesId:characteristics,page:Number(pageNumber),orderRule:orderRule}}});
    
    const addChar = (value:string) => {
        setCharacteristics(prev => [...prev,value]);
        params.set('page', '1');
        setParams(params)
    }
    const removeChar = (value:string) => {
        setCharacteristics(prev => prev.filter(el => el !== value));
        params.set('page', '1');
        setParams(params)
    }

    const onChangeChars = (value:string) => {
        if(characteristics.includes(value)){
            removeChar(value);
            return;
        }

        addChar(value);
    }
    const onChangePage = (page: any) => {
        params.set('page', page);
        setParams(params)
    }

    const onChangeOrderRule = (orderRule:OrderRuleT) => {
        setOrderRule(orderRule);
    }
    return {data,onChangeOrderRule,onChangeChars,loading,onChangePage,pageNumber,currentOrderRule:orderRule};
}