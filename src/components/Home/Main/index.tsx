import { Pagination } from "antd";
import { ProductT } from "../../../types/product.type";
import { ProductItem } from "../../ui-kit/Product/index";
import { PaginationContainer, ProductsContainer } from "../../ui-kit/Product/styles";
import { ProductSceleton } from "../../ui-kit/Product/Sceleton/ProductSceleton";
import { Container } from "./styles";

type Props = {
    products?:ProductT[];
    loading:boolean;
    productsIdsInCart:number[] | undefined,
    changeFavoriteStatus:(id:number) => Promise<void>,
    checkIfFavorite:(id:number) => boolean,
    pageNumber:number,
    onChangePage:(pageNumber:number) => void,
    total?:number
}

export const MainComponent:React.FC<Props> = ({total,onChangePage,pageNumber,changeFavoriteStatus,checkIfFavorite,productsIdsInCart,products,loading}) => {
    return <Container>
        <ProductsContainer>
            {!loading ? products?.map(product => 
            <ProductItem changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite} isAlreadyInCart={!!productsIdsInCart?.find(prodId => prodId == product.id)} key={product.id} id={product.id} photo={product.images.find(img => img.isMain)?.url} name={product.name} price={product.price}/>)
            : <ProductSceleton/>}
        </ProductsContainer>
        <PaginationContainer><Pagination defaultCurrent={pageNumber} total={total} onChange={onChangePage}/></PaginationContainer>
    </Container>
}