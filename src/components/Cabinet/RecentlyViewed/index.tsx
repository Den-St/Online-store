import React from 'react'
import { routes } from '../../../constants/routes'
import { ProductT } from '../../../types/product.type'
import { Header } from '../../ui-kit/Cabinet/Header'
import { ProductItem } from '../../ui-kit/Product'
import { ProductSceleton } from '../../ui-kit/Product/Sceleton/ProductSceleton'
import { Container, ProductsContainer } from './styles'

type Props = {
  products?:ProductT[],
  loading:boolean,
  productsInCart?:number[],
  changeFavoriteStatus:(id:number) => Promise<void>,
  checkIfFavorite:(id:number) => boolean
}

export const RecentlyViewedComponent:React.FC<Props> = ({changeFavoriteStatus,checkIfFavorite,productsInCart,loading,products}) => {
  return <Container>
      <Header>Recently viewed</Header>
      <ProductsContainer>
        {!loading ? products?.map(product => <ProductItem key={product.id} changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite} photo={product.images.find(img => img.isMain)?.url}
         name={product.name} price={product.price} id={product.id} isAlreadyInCart={!!productsInCart?.find(prodId => prodId == product.id)}/>) : <ProductSceleton/>}
      </ProductsContainer> 
    </Container>
}
