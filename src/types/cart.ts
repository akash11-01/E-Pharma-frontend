import { IDescription, IReviewProduct } from "./product";

export interface ICartProduct {
  _id: string;
  quantity: number;
  photo: string;
  name: string;
  price: string;
  category: string;
  stock: string;
  suppliers: string;
  description: IDescription;
  reviews: IReviewProduct[];
}

export interface ICartProductRequest
  extends Pick<ICartProduct, "_id" | "quantity"> {}

export interface ICart {
  _id: string;
  userId: string;
  products: ICartProduct[];
}

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IOrder {
  _id: string;
  customer: ICustomer;
  products: ICartProductRequest[];
  dateOfOrder: Date;
  totalPrice: number;
}

export interface INewOrder extends Omit<IOrder, "_id"> {}
