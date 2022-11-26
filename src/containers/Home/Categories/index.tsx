import { CategoriesComponent } from "../../../components/Home/Categories"
import { useGetNotMainCategories } from "../../../hooks/get-not-main-categories.hook";

export const Categories = () => {
    const {data,loading} = useGetNotMainCategories();
    return <CategoriesComponent categories={data?.getAllNotMainCategories} loading={loading} />
}