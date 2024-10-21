"use client";

//hooks
import React, { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

//assets
import "boxicons/css/boxicons.min.css";

//context
import { useAuth } from "@/contexts/authContext";

//interfaces
import { loginForm, ErrloginForm } from "@/interfaces/Auth";
import { validateLogin } from "@/utils/loginValidators";
import { LoginUser } from "@/services/AuthService";

const Login: React.FC = () => {
  const router = useRouter();
  const { setDataUser } = useAuth();

  const [userData, setUserData] = useState<loginForm>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<ErrloginForm>({
    email: "",
    password: "",
  });

  // Estado para poder mostrar la contraseña
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await LoginUser(userData);

      console.log("Respuesta completa del servidor:", res); // Mostrar la respuesta para depuración

      // Verificamos si la respuesta contiene el token
      if (res && res.token) {
        setDataUser(res); // Guarda los datos del usuario (puedes guardar el token si es necesario)
        document.cookie = `userSession=${JSON.stringify(res)}; path=/`; // Guarda la sesión en una cookie

        // Alerta de éxito
        alert(res.message || "Inicio de sesión exitoso");
        console.log("Inicio de sesión exitoso");

        // Redirigir a la página de inicio
        router.push("/");
      } else {
        alert("Error: No se encontró el token en la respuesta.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      alert("Error al iniciar sesión. Por favor, intenta de nuevo.");
    }
  };

  useEffect(() => {
    const errors = validateLogin(userData);
    setErrorUser(errors);
  }, [userData]);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
          <i
            className="bx bxs-graduation"
            style={{ color: "#ffffff", fontSize: "6rem" }}
          ></i>
          <h2 className="text-2xl font-bold text-white">
            Iniciar Sesión en{" "}
            <span className="text-purple-500">ConsoLearn</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
              placeholder="tu@ejemplo.com"
              required
            />
            {errorUser.email && (
              <p className="text-sm text-red-500 mt-1">{errorUser.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Contraseña</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-sm text-[var(--foreground)] mt-2"
            >
              {showPassword ? "Ocultar" : "Mostrar"} Contraseña
            </button>
            {errorUser.password && (
              <p className="text-sm text-red-500 mt-1">{errorUser.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="text-center mt-4"></div>
        <div className="text-center mt-2">
          <p className="text-white text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/Register" className="text-purple-500">
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
