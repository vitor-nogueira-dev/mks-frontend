export interface IProduct {
  count: number,
  products: {
    id: string,
    name: string,
    price: number,
    photo: string,
    amount: number,
    brand: string,
  }[]
}