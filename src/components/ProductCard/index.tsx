import { IProduct } from '@/interfaces/IProduct'
import React from 'react'

type Props = {
  products: IProduct[]
}

function ProductCard({ products }: Props) {
  // console.log(products, 'products')
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard