import React from 'react'
import { ProductT } from '../../../types/product.type'
import { Header } from '../../ui-kit/Cabinet/Header'
import { ProductItem } from '../../ui-kit/Product'
import { ProductSceleton } from '../../ui-kit/Product/Sceleton/ProductSceleton'
import { ProductsContainer } from '../RecentlyViewed/styles'

type Props = {
  products?:ProductT[],
  loading:boolean,
  checkIfFavorite:(id:number) => boolean,
  changeFavoriteStatus:(id:number) => Promise<void>,
  productsInCart?:number[]
}

export const WishListComponent:React.FC<Props> = ({productsInCart,products,loading,changeFavoriteStatus,checkIfFavorite}) => {
  return <ProductsContainer>
      <Header>Favorite products</Header>
      {!loading ? products?.map(prod =>
        <ProductItem key={prod.id} isAlreadyInCart={!!productsInCart?.find(prodId => prodId == prod.id)} photo={prod.images.find(img => img.isMain)?.url} id={prod.id} name={prod.name} 
        price={prod.price} changeFavoriteStatus={changeFavoriteStatus} checkIfFavorite={checkIfFavorite} />) 
      : <ProductSceleton/>}
    </ProductsContainer>
}
