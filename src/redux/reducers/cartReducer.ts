import { IPropsInitialState } from "@/interfaces/IPropsInitialState";
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCTS } from "../actions/actions";


const initialState: IPropsInitialState = {
  productsCart: {},
  products: [],
}

const CartReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
      };
    case SET_PRODUCTS:
    default:
      return state;
  }
};

export default CartReducer;
