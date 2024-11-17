import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import type { IReview } from "../../types";
import { instance } from "../../services";

export const getReviews = createAsyncThunk<
  IReview[],
  undefined,
  { rejectValue: string }
>("reviews/getReviews", async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get("/customer-reviews");

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});
