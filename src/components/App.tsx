import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout, Loader } from "../components";
import { refreshUser, selectIsRefreshing } from "../redux";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PrivateRoute, PublicRoute } from "../routes";

const HomePage = lazy(() => import("../pages/HomePage"));
const MedicinePage = lazy(() => import("../pages/MedicinePage"));
const MedicineStorePage = lazy(() => import("../pages/MedicineStorePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const Description = lazy(() => import("./Description/Description"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));

export const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/medicine-store" element={<MedicineStorePage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="/product/:id" element={<ProductPage />}>
          <Route path="description" element={<Description />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        {/* <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
