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
  toast: {
    type: "info" | "success" | "warning" | "error" | "default",
    message: string
  }
}
