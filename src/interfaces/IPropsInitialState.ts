import { TypeOptions } from "react-toastify"
import { IProduct } from "./IProduct"


export interface IPropsInitialState {
  productsCart: IProduct[],
  products: IProduct[],
  loading: boolean,
  error: string,
  isOpenCart: boolean,
  totalPrice: number,
  totalItems: number,
  toast: {}
}
