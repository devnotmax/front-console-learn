"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/authContext";
import React from "react";

import "boxicons/css/boxicons.min.css";
import { useRouter } from "next/navigation";

const UserWidget = () => {
  const { dataUser, logout } = useAuth(); // Obtener los datos del usuario desde el contexto
  const router = useRouter(); // Inicializa el router

  const handleLogout = () => {
    logout(); // Llama a la función de logout del contexto
    router.push("/login"); // Redirige al usuario a la página de login
  };

  return (
    <div className="flex items-center space-x-2">
      {dataUser && dataUser.token ? (
        // Si el usuario está logueado, mostrar un mensaje de bienvenida
        <>
          <Link href="/profile">
            <button className="secondary-btn py-1 px-2 flex items-center justify-center"><i className='bx bxs-user' style={{ fontSize: "1rem" }}></i> Mi perfil</button>
          </Link>
          <button className="secondary-btn py-1 px-2" onClick={handleLogout}><i className='bx bx-log-out' style={{ fontSize: "1rem" }}></i></button>
        </>
      ) : (
        // Si no está logueado, mostrar los botones de iniciar sesión y registrarse
        <>
          <Link href="/login">
            <button className="secondary-btn py-1 px-2">Sign in</button>
          </Link>

          <Link href="/register">
            <button className="secondary-btn py-1 px-2">Sign up</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserWidget;
