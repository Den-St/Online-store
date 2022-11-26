import { userState } from './../atoms/user.atom';
import { useRecoilValue } from 'recoil';
import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToRecentlyQuery } from "../queries/add-to-recently.query";
import { GetCategoriesLineQuery } from "../queries/get-categories-line.query";
import { GetProductQuery } from "../queries/get-product.query";
import { GetCategoriesLine } from "../types/category.type";
import { GetProduct } from "../types/product.type";

export const useDetailedProduct = () =>{
    const {id} = useParams();
    const user = useRecoilValue(userState);
    const {data:product} = useQuery<GetProduct,{id?:number}>(GetProductQuery,{variables:{id:Number(id)}});
    const [onAdd] = useMutation<undefined,{dto?:{productId?:number,userId?:number}}>(AddToRecentlyQuery);

    useEffect(() => {
        try{
            if(user.user.id){
                onAdd({variables:{
                dto:{
                    productId:Number(id),
                    userId:Number(user.user.id)
                }
                }})
            }
        }catch(err){
            console.log(err);
        }
    },[])
    const {data:categoriesLine} = useQuery<GetCategoriesLine,{id?:number}>(GetCategoriesLineQuery,
            {
                skip:!product?.getOneProduct.category.id,
                variables:{id:Number(product?.getOneProduct.category.id)}
            }
        );
    
    return {categoriesLine,product};
}