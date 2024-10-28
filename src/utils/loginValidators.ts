import { loginForm, ErrloginForm } from "@/interfaces/Auth";

export const validateLogin = (formData: loginForm) => {
  const errors: ErrloginForm = {};

  if (!formData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  }

  return errors;
};
