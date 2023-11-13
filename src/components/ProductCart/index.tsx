import React from 'react'
import { NameProduct, PhotoProduct, PriceProduct } from '../ProductCard/styles'
import { ContainerProductCart } from './styles'

type Props = {}

function ProductCart({ }: Props) {
  return (
    <ContainerProductCart>
      <PhotoProduct src='/icon-cart.png' width={46} height={57} />
      <h1>ProductCart</h1>
      <div>
        Qtd:
        {/* botao com a quantidade do produto adicionada ao carrinho e um button mais e outro menos para adicionar ou remover */}
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <h4>300</h4>
    </ContainerProductCart>
  )
}

export default ProductCart