import axios from "axios";

export const instance = axios.create({
  // baseURL: "https://e-pharma-backend-7x0e.onrender.com/api",
  baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};
