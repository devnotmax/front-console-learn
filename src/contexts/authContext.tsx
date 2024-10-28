"use client";

import { IuserSession } from "@/interfaces/Auth";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  dataUser: IuserSession | null;
  setDataUser: (dataUser: IuserSession | null) => void;
  logout: () => void;
  updateUserImage: (image: string) => void;
}

const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
  updateUserImage: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataUser, setDataUser] = useState<IuserSession | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userSession");
    if (storedUser) {
      setDataUser(JSON.parse(storedUser)); // Cargar los datos del usuario en el estado global
    }
  }, []);
  

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    } else {
      localStorage.removeItem("userSession");
    }
  }, [dataUser]);

  const logout = () => {
    setDataUser(null); // Limpia el estado de usuario
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
    <AuthContext.Provider value={{ dataUser, setDataUser, logout, updateUserImage }}>
      {children}
    </AuthContext.Provider>
  );
};

export const getAuthToken = () => {
  const storedUser = localStorage.getItem("userSession");
  const dataUser = storedUser ? JSON.parse(storedUser) : null;
  return dataUser?.token || ""; // Ajusta según la propiedad que contiene el token
};


export const useAuth = () => {
  return useContext(AuthContext);
};
