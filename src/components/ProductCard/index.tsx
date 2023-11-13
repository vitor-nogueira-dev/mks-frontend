import { IProduct } from '@/interfaces/IProduct'
import React from 'react'
import { ContainerProduct, ContentProduct, NameProduct, DescriptionProduct, PriceProduct, ButtonAddProduct, PhotoProduct, ContentTextsProduct, BagIconProduct } from './styles'


function ProductCard({ products }: { products: IProduct[]}) {
  return (
    products?.map((product) => (
      <ContainerProduct key={product.id}>
        <PhotoProduct src={product.photo} />
        <ContentProduct>
          <ContentTextsProduct>
            <NameProduct>{product.name}</NameProduct>
            <PriceProduct>{product.price}</PriceProduct>
            <DescriptionProduct>
              Redesigned from scratch and completely revised.
            </DescriptionProduct>
          </ContentTextsProduct>
          <ButtonAddProduct>
            <BagIconProduct src="/shopping-bag.png" />
            comprar
          </ButtonAddProduct>
        </ContentProduct>
      </ContainerProduct>
    ))
  )
}

export default ProductCard