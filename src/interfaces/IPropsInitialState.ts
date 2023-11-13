import { IProduct } from "./IProduct"

export interface IPropsInitialState {
  productsCart: {
    [key: string]: {
      id: string,
      name: string,
      price: number,
      photo: string,
      amount: number,
    }
  },
  products: IProduct[],
}
