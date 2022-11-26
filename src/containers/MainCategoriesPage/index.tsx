import React from "react"
import { useParams } from "react-router-dom"
import { MainCategoriesComponent } from "../../components/MainCategories"
import { useGetChildCategories } from "../../hooks/get-child-categories"

export const MainCategories = () => {
    const {id} = useParams();
    const {data,loading} = useGetChildCategories(Number(id));

    return <MainCategoriesComponent categories={data?.getChildCategories} loading={loading}/>
}