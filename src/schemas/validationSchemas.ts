import * as yup from "yup";

import { emailRegExp } from "../constants";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(13, "Enter a valid phone number")
    .max(13, "Enter a valid phone number"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Min length must be more than 8 chars")
    .max(64, "Max length must be less than 64 chars"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  password: yup.string().required("Password is required"),
});

export const cartSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  phone: yup
    .string()
    .required("Phone number is required")
    .min(13, "Enter a valid phone number")
    .max(13, "Enter a valid phone number"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Min length must be more than 8 chars")
    .max(200, "Max length must be less than 64 chars"),
  paymentMethod: yup
    .string()
    .oneOf(["Cash On Delivery", "Bank"])
    .required("Payment method source is required"),
});
