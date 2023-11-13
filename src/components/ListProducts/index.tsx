import React from 'react'
import ProductCard from '../ProductCard'
import { IProduct } from '@/interfaces/IProduct'

type Props = {
  products: IProduct[]
}

function ListProducts({ products }: Props) {
  return (
    <div><ProductCard products={products} /></div>
  )
}

export default ListProducts