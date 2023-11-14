import { IPropsInitialState } from "@/interfaces/IPropsInitialState";

export const getProducts = (state: IPropsInitialState) => state.products;

export const getProductsCart = (state: IPropsInitialState) => state.productsCart

export const getLoading = (state: IPropsInitialState) => state.loading

export const getError = (state: IPropsInitialState) => state.error

export const getToggleCart = (state: IPropsInitialState) => state.isOpenCart

export const getTotalPrice = (state: IPropsInitialState) => state.totalPrice

export const getTotalItems = (state: IPropsInitialState) => state.totalItems

export const getToast = (state: IPropsInitialState) => state.toast
