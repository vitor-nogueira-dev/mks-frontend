'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { ProductsContainer } from './styles'
import Header from '@/components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/selectors/selectors';
import { IProduct } from '@/interfaces/IProduct';
import ListProducts from '@/components/ListProducts';
import { useQuery } from 'react-query';
import { SET_PRODUCTS } from '@/redux/actions/actions';
import { fetchProducts } from '@/services/fetchProducts';
import { DrawerCart } from '@/components/DrawerCart';



type Props = {}
export interface IPropsDispatch {
  type: string;
  payload: any;
}

const Products = (props: Props) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<string>('')

  const getData = useSelector(getProducts)

  const { data, error, isLoading } = useQuery('products', fetchProducts) as any;

  const setStateGlobal = useCallback(async () => {
    if (isLoading) setLoading(isLoading)
    if (error) setErrorState(error)

    dispatch({ type: SET_PRODUCTS, payload: data })
  }, [data, dispatch, error, isLoading])

  useEffect(() => {
    setStateGlobal()
    setProducts(getData)
  }, [dispatch, getData, products, setStateGlobal])

  return (
    <ProductsContainer>
      <Header />
      <ListProducts products={products} />
      <DrawerCart />
    </ProductsContainer>
  )
}

export default Products