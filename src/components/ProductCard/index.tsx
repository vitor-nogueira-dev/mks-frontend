import React from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '@/interfaces/IProduct';
import { ADD_PRODUCT, actionAddProduct } from '@/redux/actions/actions';
import { formatPriceListProducts } from '@/services/formatNumber';
import {
  ContainerProduct,
  ContentProduct,
  NameProduct,
  DescriptionProduct,
  PriceProduct,
  ButtonAddProduct,
  PhotoProduct,
  ContentTextsProduct,
  BagIconProduct
} from './styles';

function ProductCard({ products }: { products: IProduct[] }) {

  const dispatch = useDispatch();

  const handleAddProduct = (product: IProduct) => {
    return dispatch(actionAddProduct({ type: ADD_PRODUCT, payload: product }))
  }

  return (
    products?.map((product) => (
      <ContainerProduct key={product.id} >
        <PhotoProduct src={product.photo} />
        <ContentProduct>
          <ContentTextsProduct>
            <NameProduct>{product.name}</NameProduct>
            <PriceProduct>{formatPriceListProducts(product.price)}</PriceProduct>
            <DescriptionProduct>
              Redesigned from scratch and completely revised.
            </DescriptionProduct>
          </ContentTextsProduct>
          <ButtonAddProduct onClick={() => handleAddProduct(product)}>
            <BagIconProduct src="/shopping-bag.png" />
            comprar
          </ButtonAddProduct>
        </ContentProduct>
      </ContainerProduct>
    ))
  )
}

export default ProductCard