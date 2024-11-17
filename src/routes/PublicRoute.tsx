import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "../redux";
import { useAppSelector } from "../hooks";

interface IPublicRouteProps {
  children: ReactNode;
}

export const PublicRoute = ({ children }: IPublicRouteProps) => {
  const location = useLocation();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || "/medicine"} />;
  }
  return children;
};
