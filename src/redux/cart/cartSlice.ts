import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { ICartProduct, IOrder } from "../../types";
import { addOrder, getCart, updateCart } from "./cartOperations";
import { logoutUser, refreshUser } from "../auth/authOperations";

export interface ICartSlice {
  products: ICartProduct[];
  order: IOrder | null;
  isLoading: boolean;
}

const initialState: ICartSlice = {
  products: [],
  order: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );

      if (productIndex > -1) {
        state.products[productIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => product._id === action.payload
      );

      if (productIndex > -1) {
        state.products[productIndex].quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.isLoading = false;
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshUser.rejected, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(getCart.pending, updateCart.pending, addOrder.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getCart.rejected, updateCart.rejected, addOrder.pending),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectProductsCart: (state) => state.products,
    selectOrder: (state) => state.order,
    selectIsLoadingCart: (state) => state.isLoading,
  },
});

export const cartReducer = cartSlice.reducer;
export const { selectProductsCart, selectOrder, selectIsLoadingCart } =
  cartSlice.selectors;
export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;
export type CartState = ReturnType<typeof cartReducer>;
