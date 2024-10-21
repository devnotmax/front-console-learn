"use client";

import { IuserSession } from "@/interfaces/Auth";
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
  dataUser: IuserSession | null;
  setDataUser: (dataUser: IuserSession | null) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataUser, setDataUser] = useState<IuserSession | null>(null);

  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const data = localStorage.getItem("userSession");
      if (data) {
        setDataUser(JSON.parse(data));
      }
    }
  }, []);

  const logout = () => {
    setDataUser(null);
    localStorage.removeItem("userSession");
  };

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };

export const useAuth = () => {
  return useContext(AuthContext);
};