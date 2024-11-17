import { ICartProduct } from "./cart";

export interface IDescription {
  text: string;
  antioxidantProperties: string;
  antiDiabeticEffects: string;
  antiCancerProperties: string;
  immuneSupport: string;
  digestiveAid: string;
}

export interface IReviewProduct {
  name: string;
  rating: number;
  date: string;
  review: string;
}

export interface IProduct extends Omit<ICartProduct, "quantity"> {}
