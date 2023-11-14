import React from 'react'
import { useDispatch } from 'react-redux';

import { IProduct } from '@/interfaces/IProduct';
import { ADD_PRODUCT, REMOVE_ALL_PRODUCT, REMOVE_PRODUCT } from '@/redux/actions/actions';
import { formatPriceListProducts } from '@/services/formatNumber';

import { NameProduct, PhotoProduct, PriceProduct } from '../ProductCard/styles';
import { ContainerProductCart, CloseButton, ContentQuantity, ContentButtonsQuantity, Button } from './styles';

type Props = {
  productsCart: any;
}

function ProductCart({ productsCart }: Props) {

  const dispatch = useDispatch();

  const handleAddProduct = (product: IProduct) => {
    return dispatch(({ type: ADD_PRODUCT, payload: product }))
  }

  const handleRemoveProduct = (product: IProduct) => {
    return dispatch(({ type: REMOVE_PRODUCT, payload: product }))
  }

  const handleRemoveCompleteProduct = (product: IProduct) => {
    return dispatch(({ type: REMOVE_ALL_PRODUCT, payload: product }))
  }
  return (
    productsCart.map((product: any) => (
      <ContainerProductCart key={product.id}>
        <PhotoProduct src={product.photo} width={46} height={57} />
        <CloseButton onClick={() => handleRemoveCompleteProduct(product)}>
          X
        </CloseButton>
        <NameProduct fontSize='13px' width='100px'>{product.name}</NameProduct>
        <ContentQuantity>
          <small>Qtd:</small>
          <ContentButtonsQuantity>
            <Button onClick={() => handleRemoveProduct(product)}>-</Button>
            <span>{product.amount}</span>
            <Button onClick={() => handleAddProduct(product)}>+</Button>
          </ContentButtonsQuantity>
        </ContentQuantity>
        <PriceProduct $width="27%" $backgroundColor="transparent" color="#000">{formatPriceListProducts(product.price)}</PriceProduct>
      </ContainerProductCart>
    ))
  )
}

export default ProductCart