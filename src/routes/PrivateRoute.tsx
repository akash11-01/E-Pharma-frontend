import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn, selectIsRefreshing } from "../redux";
import { useAppSelector } from "../hooks";

interface IPrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  if (!isLoggedIn && !isRefreshing) {
    return <Navigate state={{ from: location }} to="/login" />;
  }

  return children;
};
