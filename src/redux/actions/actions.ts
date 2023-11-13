export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const actionAddProduct = (payload = {}) => ({
  type: ADD_PRODUCT,
  payload,
});

export const actionRemoveProduct = (payload = {}) => ({
  type: REMOVE_PRODUCT,
  payload,
});