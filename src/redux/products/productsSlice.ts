import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { IProduct } from "../../types";
import { getOneProduct, getProducts } from "./productsOperations";

export interface IProductsSlice {
  products: IProduct[];
  oneProduct: IProduct | null;
  isLoading: boolean;
  page: number;
  total: number;
}

const initialState: IProductsSlice = {
  products: [],
  oneProduct: null,
  isLoading: false,
  page: 1,
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getProducts.pending, getOneProduct.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getProducts.rejected, getOneProduct.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectProducts: (state) => state.products,
    selectOneProduct: (state) => state.oneProduct,
    selectIsLoadingProducts: (state) => state.isLoading,
    selectPage: (state) => state.page,
    selectTotalProducts: (state) => state.total,
  },
});

export const productsReducer = productsSlice.reducer;
export const {
  selectProducts,
  selectOneProduct,
  selectIsLoadingProducts,
  selectTotalProducts,
  selectPage,
} = productsSlice.selectors;

export const { setPage } = productsSlice.actions;
