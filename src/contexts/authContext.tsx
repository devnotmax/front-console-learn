"use client";

import { IuserSession } from "@/interfaces/Auth";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  dataUser: IuserSession | null;
  setDataUser: (dataUser: IuserSession | null) => void;
  logout: () => void;
  updateUserImage: (image: string) => void;
  isLoading: boolean; // Nuevo indicador de carga
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

  useEffect(() => {
    // Solo intentar acceder a localStorage en el cliente
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("userSession");
      if (storedUser) {
        setDataUser(JSON.parse(storedUser));
      }
      setIsLoading(false); // Cambia el indicador de carga a falso después de cargar
    }
  }, []);

  useEffect(() => {
    // Solo intentar guardar en localStorage en el cliente
    if (typeof window !== "undefined") {
      if (dataUser) {
        localStorage.setItem("userSession", JSON.stringify(dataUser));
      } else {
        localStorage.removeItem("userSession");
      }
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
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("userSession");
    const dataUser = storedUser ? JSON.parse(storedUser) : null;
    return dataUser?.token || ""; // Ajusta según la propiedad que contiene el token
  }
  return ""; // Devuelve un valor por defecto si no está en el cliente
};
