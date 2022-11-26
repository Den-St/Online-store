import { CategoryT } from "../../../../types/category.type"
import {CategoriesContainer,CategoryContainer,CategorySceleton} from "../../../ui-kit/Cabinet/Category"

type Props = {
    loading:boolean,
    categories?:CategoryT[],
    setChosenCategoryId:(id:number) => void,
    chosenCategoryId:number
}

export const Categories:React.FC<Props> = ({chosenCategoryId,setChosenCategoryId,loading,categories}) => {
    return <CategoriesContainer>
        {!loading ? categories?.map(category => 
        <CategoryContainer key={category.id} $isChosen={category.id === chosenCategoryId}
         onClick={() => setChosenCategoryId(category.id)}>{category.name}</CategoryContainer>) 
         : <CategorySceleton/>}
    </CategoriesContainer>
}