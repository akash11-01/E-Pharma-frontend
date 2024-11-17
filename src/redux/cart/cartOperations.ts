import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type {
  ICart,
  ICartProductRequest,
  INewOrder,
  IOrder,
} from "../../types";
import { instance } from "../../services";

export const getCart = createAsyncThunk<
  ICart,
  undefined,
  { rejectValue: string }
>("cart/getCart", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/cart");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const updateCart = createAsyncThunk<
  ICart,
  { products: ICartProductRequest[] },
  { rejectValue: string }
>("cart/updateCart", async (updatedCart, { rejectWithValue }) => {
  try {
    const { data } = await instance.put("/cart/update", updatedCart);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const addOrder = createAsyncThunk<
  IOrder,
  INewOrder,
  { rejectValue: string }
>("cart/addOrder", async (order, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/cart/checkout", order);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
