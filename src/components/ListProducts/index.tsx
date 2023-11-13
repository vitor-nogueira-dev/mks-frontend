import React from 'react'
import ProductCard from '../ProductCard'
import { IProduct } from '@/interfaces/IProduct'
import { SectionListProducts } from './styles'

type Props = {
  products: IProduct[]
}

function ListProducts({ products }: Props) {
  return (
    <SectionListProducts>
      <ProductCard products={products} />
    </SectionListProducts>
  )
}

export default ListProducts