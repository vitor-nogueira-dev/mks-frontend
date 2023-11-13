import { IPropsInitialState } from "@/interfaces/IPropsInitialState";

export const getProducts = (state: IPropsInitialState) => state.products;

export const getProductsCart = (state: IPropsInitialState) => state.productsCart

export const getLoading = (state: IPropsInitialState) => state.loading

export const getError = (state: IPropsInitialState) => state.error

export const getToggleCart = (state: IPropsInitialState) => state.isOpenCart
