'use client'
import React from 'react'
import { ProductsContainer } from './styles'
import Header from '@/components/Header'

type Props = {}

const Products = (props: Props) => {
  return (
    <ProductsContainer>
      <Header />
    </ProductsContainer>
  )
}

export default Products