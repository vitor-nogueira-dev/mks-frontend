import { IPropsInitialState } from "@/interfaces/IPropsInitialState";
import { ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/actions";


const initialState: IPropsInitialState = {
  items: {},
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
    default:
      return state;
  }
};

export default CartReducer;
