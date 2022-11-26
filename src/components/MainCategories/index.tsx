import { routes } from "../../constants/routes";
import { CategoryT } from "../../types/category.type";
import {CategoryItem, CategorySceleton, Container, Wrapper} from "./styles";

type Props = {
    categories?:CategoryT[],
    loading:boolean
}

export const MainCategoriesComponent:React.FC<Props> = ({categories,loading}) => {
    return <Container>
            <Wrapper>
                {!loading ? categories?.map(category => <CategoryItem key={category.id} to={routes.productsByCategory.replace(":id",category.id.toString())}>{category.name}</CategoryItem>) : <CategorySceleton/>}
            </Wrapper>
        </Container>
}