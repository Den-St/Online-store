import { FiltersComponent } from "../../../components/ProductsByCategoryPage/Filters"
import { useGetCategory } from "../../../hooks/get-category.hook";

type Props = {
    onChangeChars:(value:string) => void
}

export const Filters:React.FC<Props> = ({onChangeChars}) => {
    const {data,loading} = useGetCategory();
    return <FiltersComponent onChangeChars={onChangeChars} category={data?.getCategoryById} loading={loading} />
}