import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import type { IStore } from "../../types";
import { getAllStores, getNearStores } from "./storesOperations";

export interface IStoresSlice {
  stores: IStore[];
  nearStores: IStore[];
  isLoading: boolean;
}

const initialState: IStoresSlice = {
  stores: [],
  nearStores: [],
  isLoading: false,
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStores.fulfilled, (state, action) => {
        state.stores = action.payload;
        state.isLoading = false;
      })
      .addCase(getNearStores.fulfilled, (state, action) => {
        state.nearStores = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getAllStores.pending, getNearStores.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getAllStores.rejected, getNearStores.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectStores: (state) => state.stores,
    selectNearStores: (state) => state.nearStores,
    selectIsLoadingStores: (state) => state.isLoading,
  },
});

export const storesReducer = storesSlice.reducer;
export const { selectStores, selectNearStores, selectIsLoadingStores } =
  storesSlice.selectors;
