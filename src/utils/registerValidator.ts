import { registerForm, ErrregisterForm } from "@/interfaces/Auth";

export const validateRegisterForm = (values: registerForm) => {
  const errors: ErrregisterForm = {};

  if (!values.name) {
    errors.name = "El campo de nombre no puede estar vacío";
  }

  if (!values.phone) {
    errors.phone = "Debe ingresar un número de telefono";
  } else if (isNaN(Number(values.phone))) {
    errors.phone = "Debe ingresar un número de telefono";
  } else if (values.phone.startsWith("0,1,2,3,4,5,6,7,8,9")) {
    errors.phone = "Debe ingresar primero el prefijo de su pais";
  }

  if (!values.email) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ingrese un email valido";
  }

  if (!values.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (values.password.length < 6) {
    errors.password = "La contraseña debe ser mayor a 6 caracteres";
  }


  return errors;
};
