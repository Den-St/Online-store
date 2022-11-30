import { MenuItem,  } from "@mui/material"
import {Select} from "@mui/material";
import { Pagination } from "antd"
import { OrderRuleT } from "../../../types/order-rule.type"
import { ProductT } from "../../../types/product.type"
import { ProductItem } from "../../ui-kit/Product/index"
import { Container } from "../../ui-kit/Product/Container/styles"
import { PaginationContainer, ProductsContainer } from "../../ui-kit/Product/styles";
import { ProductSceleton } from "../../ui-kit/Product/Sceleton/ProductSceleton"

type Props = {
    products?:ProductT[],
    loading:boolean,
    productsIdsInCart:number[] | undefined,
    changeFavoriteStatus:(id:number) => Promise<void>,
    checkIfFavorite:(id:number) => boolean,
    pageNumber?:number,
    onChangePage:(pageNumber:number) => void,
    total?:number,
    onChangeOrderRule:(orderRule:OrderRuleT) => void,
    currentOrderRule:OrderRuleT
}


export const ProductsComponent:React.FC<Props> = ({currentOrderRule,onChangeOrderRule,onChangePage,pageNumber,total,changeFavoriteStatus,checkIfFavorite,productsIdsInCart,products,loading}) => {
    return <Container>
            <Select defaultValue={"Popularity(asc.)"} className={'main-select'}>
                <MenuItem value={"Popularity(asc.)"} onClick={() => onChangeOrderRule({fieldName:"popularity",orderValue:"ASC"})}>Popularity(asc.)</MenuItem>
                <MenuItem value={"Popularity(desc.)"} onClick={() => onChangeOrderRule({fieldName:"popularity",orderValue:"DESC"})}>Popularity(desc.)</MenuItem>
                <MenuItem value={"Price(asc.)"} onClick={() => onChangeOrderRule({fieldName:"price",orderValue:"ASC"})}>Price(asc.)</MenuItem>
                <MenuItem value={"Price(desc.)"} onClick={() => onChangeOrderRule({fieldName:"price",orderValue:"DESC"})}>Price(desc.)</MenuItem>
            </Select>

        <ProductsContainer>
            {!loading ? products?.map(product => 
                <ProductItem changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite}  isAlreadyInCart={!!productsIdsInCart?.find(prodId => prodId === product.id)} id={product.id} key={product.id} photo={product.images[0].url} name={product.name} price={product.price}/>) 
                : <ProductSceleton/>}
        </ProductsContainer>

        {!!total && (total > 10) && <PaginationContainer><Pagination defaultCurrent={pageNumber} onChange={onChangePage} total={total}/></PaginationContainer>}
    </Container>
}