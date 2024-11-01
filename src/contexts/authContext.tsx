"use client";

import { IuserSession, loginForm } from "@/interfaces/Auth";
import { LoginUser } from "@/services/AuthService";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  dataUser: IuserSession | null;
  setDataUser: (dataUser: IuserSession | null) => void;
  logout: () => void;
  updateUserImage: (image: string) => void;
  isLoading: boolean; // Nuevo indicador de carga
}

interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  image: string;
  role: "ADMIN" | "USER";
  token: string;
}

const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
  updateUserImage: () => {},
  isLoading: true, // Estado inicial de carga
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataUser, setDataUser] = useState<IuserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Nuevo estado para el indicador de carga

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    userData: loginForm
  ) => {
    e.preventDefault();
    try {
      const res = await LoginUser(userData); // Llama a `LoginUser` para obtener los datos del usuario
      if (res && res.token) {
        setDataUser(res); // Almacena el usuario y su rol en `dataUser`
        document.cookie = `userSession=${JSON.stringify(res)}; path=/`; // Guarda la sesión en la cookie
        // Redirige o realiza otras acciones si es necesario
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      // Aquí puedes manejar el error, mostrar una alerta, etc.
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userSession");
    if (storedUser) {
      setDataUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Cambia el indicador de carga a falso después de cargar
  }, []);

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    } else {
      localStorage.removeItem("userSession");
    }
  }, [dataUser]);

  const logout = () => {
    setDataUser(null);
  };

  const updateUserImage = (image: string) => {
    if (dataUser) {
      setDataUser({
        ...dataUser,
        user: { ...dataUser.user, image },
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ dataUser, setDataUser, logout, updateUserImage, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const getAuthToken = () => {
  const storedUser = localStorage.getItem("userSession");
  const dataUser = storedUser ? JSON.parse(storedUser) : null;
  return dataUser?.token || ""; // Ajusta según la propiedad que contiene el token
};
