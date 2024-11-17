import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from "./authOperations";

export interface IAuthSlice {
  user: { name: string | null; email: string | null };
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
}

const initialState: IAuthSlice = {
  user: { name: null, email: null },
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(registerUser.pending, loginUser.pending, logoutUser.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(registerUser.rejected, loginUser.rejected, logoutUser.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },

  selectors: {
    selectUser: (state) => state.user,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsRefreshing: (state) => state.isRefreshing,
    selectIsLoadingAuth: (state) => state.isLoading,
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectUser,
  selectIsLoggedIn,
  selectIsLoadingAuth,
  selectIsRefreshing,
} = authSlice.selectors;
export type AuthState = ReturnType<typeof authReducer>;
