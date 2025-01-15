import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from "../../types";
import { RootState } from "../store";
import { clearToken, instance, setToken } from "../../services";

export const registerUser = createAsyncThunk<
  IRegisterResponse,
  IRegisterRequest,
  { rejectValue: string }
>("auth/registerUser", async (credentials, thunkAPI) => {
  try {
    const { data } = await instance.post("/users/register", credentials);
    const { email, password } = credentials;

    await thunkAPI.dispatch(loginUser({ email, password }));
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const loginUser = createAsyncThunk<
  ILoginResponse,
  ILoginRequest,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await instance.post("/users/login", credentials);
    setToken(data.accessToken);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const logoutUser = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>("auth/logoutUser", async (_, { rejectWithValue }) => {
  try {
    await instance.get("/users/logout");

    clearToken();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message);
    }
  }
});

export const refreshUser = createAsyncThunk<
  ILoginResponse,
  undefined,
  { state: RootState; rejectValue: string }
>("auth/refreshUser", async (_, thunkAPI) => {
  const {
    auth: { refreshToken },
  } = thunkAPI.getState();

  if (!refreshToken) {
    return thunkAPI.rejectWithValue("There is no refreshToken");
  }

  try {
    const { data } = await instance.post("/users/refresh", { refreshToken });
    setToken(data.accessToken);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});
