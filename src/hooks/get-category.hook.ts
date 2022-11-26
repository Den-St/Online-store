import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GetCategoryById } from "../queries/get-category-by-id.query";
import { GetCategoryRes } from "../types/category.type";

export const useGetCategory = () => {
    const id = useParams();
    const {data,loading} = useQuery<GetCategoryRes,{id?:number}>(GetCategoryById,{variables:{
        id:Number(id.id),
    }});

    return {data,loading};
}