import { IPropsInitialState } from "@/interfaces/IPropsInitialState";
import { ADD_PRODUCT, REMOVE_ALL_PRODUCT, REMOVE_PRODUCT, SET_LOADING, SET_PRODUCTS, TOGGLE_CART } from "../actions/actions";
import { IProduct } from "@/interfaces/IProduct";

const initialState: IPropsInitialState = {
  productsCart: [],
  products: [],
  loading: true,
  error: '',
  isOpenCart: false,
  totalPrice: 0,
  totalItems: 0,
  toast: {
    type: 'success',
    message: ''
  },
}

function calculateTotalPrice(products: IProduct[]) {
  return products.reduce((total, product) => total + product.price * product.amount, 0);
}

function calculateTotalItems(products: IProduct[]) {
  return products.reduce((total, product) => total + product.amount, 0);
}


const CartReducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
  switch (type) {
    case ADD_PRODUCT: {
      const productId = payload.id || payload.payload.id;
      const productIndex = state.productsCart.findIndex(product => product.id === productId);

      let updatedCart = [...state.productsCart];

      if (productIndex !== -1) {
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          amount: updatedCart[productIndex].amount + 1
        };
      } else {
        const newProduct = { ...payload.payload, amount: 1 };
        updatedCart.push(newProduct);
      }

      return {
        ...state,
        productsCart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
        totalItems: calculateTotalItems(updatedCart),
        toast: {
          type: 'success',
          message: 'Produto adicionado com sucesso!'
        }
      };
    }
    case REMOVE_PRODUCT: {
      const productIdRemove = payload.id || payload.payload.id;

      const productIndexRemove = state.productsCart.findIndex(product => product.id === productIdRemove);

      if (productIndexRemove === -1) {
        return state;
      }

      let updatedCart = [...state.productsCart];
      let removedProduct = updatedCart[productIndexRemove];

      if (removedProduct.amount > 1) {
        updatedCart[productIndexRemove] = { ...removedProduct, amount: removedProduct.amount - 1 };
      } else {
        updatedCart.splice(productIndexRemove, 1);
      }
      return {
        ...state,
        productsCart: updatedCart,
        totalPrice: calculateTotalPrice(updatedCart),
        totalItems: calculateTotalItems(updatedCart),
        toast: {
          type: 'success',
          message: 'Produto removido com sucesso!'
        }
      };
    }
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload?.products,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    case TOGGLE_CART: {
      return {
        ...state,
        isOpenCart: payload
      }
    }
    case REMOVE_ALL_PRODUCT: {
      const productIdToRemove = payload.id || payload.payload.id;
      const newCart = state.productsCart.filter(product => product.id !== productIdToRemove);

      return {
        ...state,
        productsCart: newCart,
        totalPrice: calculateTotalPrice(newCart),
        totalItems: calculateTotalItems(newCart),
        toast: {
          type: 'success',
          message: 'Produto removido com sucesso!'
        }
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
