import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import { ReceiptT } from '../../../types/receipt.type'
import { Container,Image, ReceiptDirContainer, ReceiptContainer, IdAndDateContainer, Value, Status, Title, TotalPrice, Name, ProductContainer, NoOrders, NoOrdersImage, NoOrdersTitle, IdContainer } from './styles'

type Props = {
  receipts?:ReceiptT[],
  loading:boolean
}

export const OrderedComponent:React.FC<Props> = ({loading,receipts}) => {
  return <Container>
      {!loading && receipts?.length && receipts?.map(receipt => 
        <ReceiptContainer key={receipt.id} status={receipt.status} >

          <ReceiptDirContainer >
            <IdAndDateContainer>
              <IdContainer>
                №
                <Value>{receipt?.id}</Value>
                from
              </IdContainer>
              <Value>{receipt?.createdAt.split("T")?.[0] + " " + receipt?.createdAt.split("T")?.[1].slice(0,5)}</Value>
            </IdAndDateContainer>
            <Status>{receipt.status}</Status>
          </ReceiptDirContainer>

          <ReceiptDirContainer>
            <Title>Order price</Title>
            <TotalPrice>{receipt.product.price * receipt.amountToBuy} ₴</TotalPrice>
          </ReceiptDirContainer>
          
          <ProductContainer>
            <Name to={"/product/"+receipt.product.id}>
              {receipt.product.name.slice(0,34)+ (!(receipt.product.name.length < 34) ? "..." : "")}
            </Name>
            <Image src={receipt.product.images.find(img => img.isMain)?.url}/>
          </ProductContainer>

        </ReceiptContainer>)}
      {!loading && !receipts?.length && <NoOrders>
          <NoOrdersImage src={'https://xl-static.rozetka.com.ua/assets/img/design/cabinet/cabinet-return-illustration.svg'}/>
          <NoOrdersTitle>You have no orders.</NoOrdersTitle>
        </NoOrders>}
      {loading && <Spin indicator={<LoadingOutlined/>}/>}
    </Container>
}
