export interface IPropsInitialState {
  items: {
    [key: string]: {
      id: string,
      name: string,
      price: number,
      photo: string,
      amount: number,
    }
  }
}