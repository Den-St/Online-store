import { routes } from "../../../constants/routes"
import { CategoryT } from "../../../types/category.type"
import { CategorySceleton } from "../../ui-kit/Cabinet/Category"
import { CategoryItem, Container, Wrapper } from "./styles"

type Props = {
    categories?:CategoryT[],
    loading:boolean
}

export const CategoriesComponent:React.FC<Props> = ({categories,loading}) =>{
    return <Container>
        <Wrapper>
            {!loading ? categories?.map(category => <CategoryItem key={category.id} to={routes.categories.replace(":id",category.id.toString())}>{category.name}</CategoryItem>) : <CategorySceleton/>}
        </Wrapper>
    </Container>
}