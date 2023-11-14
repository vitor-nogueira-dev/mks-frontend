export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_ALL_PRODUCT = 'REMOVE_ALL_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_LOADING = 'SET_LOADING';
export const TOGGLE_CART = 'TOGGLE_CART'

export const actionAddProduct = (payload = {}) => ({
  type: ADD_PRODUCT,
  payload,
});

export const actionRemoveProduct = (payload = {}) => ({
  type: REMOVE_PRODUCT,
  payload,
});

export const actionRemoveAllProduct = (payload = {}) => ({
  type: REMOVE_ALL_PRODUCT,
  payload,
});

export const actionSetProducts = (payload = {}) => ({
  type: SET_PRODUCTS,
  payload
});

export const actionSetLoading = (payload = {}) => ({
  type: SET_LOADING,
  payload,
});


export const actionToggleCart = (payload = {}) => ({
  type: TOGGLE_CART,
  payload,
});
