import { Filters } from "../../containers/ProductsByCategoryPage/Filters"
import { Products } from "../../containers/ProductsByCategoryPage/Products"
import { useGetProductsByCategory } from "../../hooks/get-products-by-category.hook";
import { Container } from "./styles"

export const ProductsByCategoryPageComponent = () => {
    const {data,loading,onChangeChars,currentOrderRule,onChangePage,pageNumber,onChangeOrderRule} = useGetProductsByCategory();

    return <Container>
        <Filters onChangeChars={onChangeChars}/>
        <Products currentOrderRule={currentOrderRule} onChangeOrderRule={onChangeOrderRule} total={data?.filterProducts.total} pageNumber={pageNumber} onChangePage={onChangePage} products={data?.filterProducts.products} loading={loading}/>
    </Container>
}