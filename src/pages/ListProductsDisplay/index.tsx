'use client'
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { TypeOptions, toast } from 'react-toastify';

import Header from '@/components/Header';
import ListProducts from '@/components/ListProducts';
import DrawerCart from '@/components/DrawerCart';
import Skeleton from '@/components/Skeleton';
import ToastComponent from '@/components/ToastComponent';
import { ProductsContainer } from './styles';
import { IProduct } from '@/interfaces/IProduct';
import { getLoading, getProducts, getProductsCart, getToast, getTotalPrice } from '@/redux/selectors/selectors';
import { SET_LOADING, SET_PRODUCTS } from '@/redux/actions/actions';
import { fetchProducts } from '@/services/fetchProducts';

const ListProductsDisplay = () => {
  const dispatch = useDispatch();

  const productsData = useSelector(getProducts)
  const cartProducts = useSelector(getProductsCart)
  const totalPrice = useSelector(getTotalPrice)
  const isLoading = useSelector(getLoading)
  const toastState = useSelector(getToast);

  interface Toast {
    [key: string]: (message: string) => void;
  }

  const toastFunction: Toast = useMemo(() => ({
    success: (message: string) => {
      toast.success(message);
    },
    error: (message: string) => {
      toast.error(message);
    },
  }), []);

  const toastType = useCallback((type: keyof typeof toast | TypeOptions, message: string) => {
    if (type in toast) {
      return toastFunction[type](message);
    }
  }, [toastFunction]);

  const { data, error } = useQuery('products', fetchProducts) as any;

  useEffect(() => {
    if (data) {
      dispatch({ type: SET_PRODUCTS, payload: data });
      dispatch({ type: SET_LOADING, payload: false });
    }
    if (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return toastType('error', error);
    }
    if (toastState.type && toastState.message) {
      toastType(toastState.type, toastState.message);
    }
  }, [data, error, dispatch, toastState, toastType])

  return (
    <>
      {isLoading ? (
        <Skeleton count={8} />
      ) : (
        <ProductsContainer>
          <Header />
          <ListProducts products={productsData} />
          <DrawerCart productsCart={cartProducts} totalPrice={totalPrice} />
        </ProductsContainer>
      )}
      <ToastComponent />
    </>
  )
}

export default ListProductsDisplay