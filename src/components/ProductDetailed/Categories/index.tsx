import { useCallback } from "react"
import { SvgIcon } from "../../../assets/svg/SvgIcon"
import { routes } from "../../../constants/routes"
import { CategoryT } from "../../../types/category.type"
import { CategoriesContainer, CategoryItemContainer, CategoryName, Home } from "./styles"

type Props = {
    categories?:CategoryT[],
}

export const Categories:React.FC<Props> = ({categories}) => {

    const getRoute = useCallback((isMain:boolean,id:number) => {
        if(isMain) {
            return routes.productsByCategory.replace(":id",id.toString())
        }
        return routes.categories.replace(":id",id.toString())
    },[])

    const getName = useCallback((name:string) => {
        return name.replace(name[0],name[0].toUpperCase());
    },[])


    return <CategoriesContainer>
        <Home to={'/'}><SvgIcon type={'home'}/><SvgIcon type={'rightArrow'}/></Home>
        {categories?.map((category,i) => 
            <CategoryItemContainer key={category.id} to={getRoute(category.isMain,category.id)}>
                <CategoryName >{getName(category.name)}</CategoryName>
                {i !== categories.length - 1 && <SvgIcon type={'rightArrow'} />}
            </CategoryItemContainer>)
            
        }
    </CategoriesContainer>
}