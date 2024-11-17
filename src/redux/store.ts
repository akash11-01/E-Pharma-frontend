import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { storesReducer } from "./stores/storesSlice";
import { authReducer, AuthState } from "./auth/authSlice";
import { reviewsReducer } from "./reviews/reviewsSlice";
import { productsReducer } from "./products/productsSlice";
import { cartReducer, CartState } from "./cart/cartSlice";

const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["refreshToken"],
};

const cartPersistConfig = {
  key: "cart",
  version: 1,
  storage,
  whitelist: ["products"],
};

const persistedAuthReducer = persistReducer<AuthState>(
  authPersistConfig,
  authReducer
);
const persistedCartReducer = persistReducer<CartState>(
  cartPersistConfig,
  cartReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    stores: storesReducer,
    reviews: reviewsReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
