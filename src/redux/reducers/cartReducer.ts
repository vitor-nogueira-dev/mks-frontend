import { IPropsInitialState } from "@/interfaces/IPropsInitialState";
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_ERROR, SET_LOADING, SET_PRODUCTS } from "../actions/actions";


const initialState: IPropsInitialState = {
  productsCart: {},
  products: [],
  loading: false,
  error: '',
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
      return {
        ...state,
        products: payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    case SET_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default:
      return state;
  }
};

export default CartReducer;
