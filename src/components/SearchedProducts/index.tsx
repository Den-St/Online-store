import { MenuItem, Select } from "@mui/material"
import { Pagination } from "antd"
import { OrderRuleT } from "../../types/order-rule.type"
import { ProductT } from "../../types/product.type"
import { ProductItem } from "../ui-kit/Product"
import { Container } from "../ui-kit/Product/Container/styles"
import { ProductSceleton } from "../ui-kit/Product/Sceleton/ProductSceleton"
import { PaginationContainer, ProductsContainer } from "../ui-kit/Product/styles"
import { Header, Top } from "./styles"

type Props = {
    loading:boolean,
    products?:ProductT[],
    onChangePage:(page:any) => void,
    setOrderRule:(orderRule:OrderRuleT) => void,
    pageNumber:number,
    changeFavoriteStatus:(id:number) => Promise<void>,
    checkIfFavorite:(id:number) => boolean,
    productsIdsInCart?:number[],
    total?:number;
    searchText:string;
}

export const SearchedProductsComponent:React.FC<Props> = ({searchText,changeFavoriteStatus,productsIdsInCart,checkIfFavorite,total,loading,onChangePage,setOrderRule,pageNumber,products}) => {
    return <Container>
        <Top>
            <Header>
                Results by searching "<b>{searchText}</b>"
            </Header>
            <Select defaultValue={"Popularity(asc.)"} className={'menu-select'}>
                <MenuItem value={"Popularity(asc.)"} onClick={() => setOrderRule({fieldName:"popularity",orderValue:"ASC"})}>Popularity(asc.)</MenuItem>
                <MenuItem value={"Popularity(desc.)"} onClick={() => setOrderRule({fieldName:"popularity",orderValue:"DESC"})}>Popularity(desc.)</MenuItem>
                <MenuItem value={"Price(asc.)"} onClick={() => setOrderRule({fieldName:"price",orderValue:"ASC"})}>Price(asc.)</MenuItem>
                <MenuItem value={"Price(desc.)"} onClick={() => setOrderRule({fieldName:"price",orderValue:"DESC"})}>Price(desc.)</MenuItem>
            </Select>
        </Top>
        <ProductsContainer>
            {!loading ? products?.map(product => 
                <ProductItem changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite}  
                isAlreadyInCart={!!productsIdsInCart?.find(prodId => prodId === product.id)} id={product.id} key={product.id} photo={product.images[0].url} name={product.name} price={product.price}/>) 
                : <><ProductSceleton/><ProductSceleton/><ProductSceleton/><ProductSceleton/><ProductSceleton/><ProductSceleton/></>}
        </ProductsContainer>

        {!!total && (total > 10) && <PaginationContainer><Pagination defaultCurrent={pageNumber} onChange={onChangePage} total={total}/></PaginationContainer>}
    </Container>
}