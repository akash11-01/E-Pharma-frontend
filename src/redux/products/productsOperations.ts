import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { IProduct } from "../../types";
import { instance } from "../../services";

export const getProducts = createAsyncThunk<
  { products: IProduct[]; total: number },
  {
    page: number;
    limit: number;
    name: string;
    category: string;
    stock: string;
  },
  { rejectValue: string }
>("products/getProducts", async (params, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/products", {
      params,
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const getOneProduct = createAsyncThunk<
  IProduct,
  string,
  { rejectValue: string }
>("products/getOneProduct", async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.get(`/products/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
