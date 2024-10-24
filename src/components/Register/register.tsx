"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { registerForm, ErrregisterForm } from "@/interfaces/Auth";
import { validateRegisterForm } from "@/utils/registerValidator";
import { RegisterUser } from "@/services/AuthService"; // Asegúrate de que esta ruta sea correcta
import "boxicons/css/boxicons.min.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<registerForm>({
    name: "",
    email: "",
    password: "",
    phone: "", // Inicializa con el prefijo
  });

  const [error, setError] = useState<ErrregisterForm>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Actualiza los datos del usuario independientemente de los errores
    setUserData({
      ...userData,
      [name]: value,
    });

    // Valida el formulario con los nuevos datos
    const errors = validateRegisterForm({
      ...userData,
      [name]: value,
    });

    // Actualiza los errores si los hay
    setError(errors);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(userData);
      const res = await RegisterUser(userData);
      alert("Registro exitoso");
      router.push("/login");
    } catch (error: any) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   const errors = validateRegisterForm(userData);
  //   setError(errors);
  // }, [userData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[var(--foreground)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
          <i
            className="bx bxs-graduation"
            style={{ color: "var(--principal-text)", fontSize: "6rem" }}
          ></i>
          <h2 className="text-2xl font-bold text-[var(--principal-text)]">
            Regístrate en{" "}
            <span className="text-[var(--primary)]">ConsoLearn</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="block text-[var(--secondary-text)] mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded"
            />
            {error.name && <p className="text-red-500">{error.name}</p>}
          </div>

          <div className="mb-1">
            <label className="block text-[var(--secondary-text)] mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Number (ej: +543813887102)"
              value={userData.phone}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded"
            />
            {error.phone && <p className="text-red-500">{error.phone}</p>}
          </div>

          <div className="mb-1">
            <label className="block text-[var(--secondary-text)] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded"
            />
            {error.email && <p className="text-red-500">{error.email}</p>}
          </div>

          <div className="mb-1">
            <label className="block text-[var(--secondary-text)] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded"
            />
            {error.password && <p className="text-red-500">{error.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[var(--primary)] text-white rounded"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4"></div>
        <div className="text-center mt-2">
          <p className="text-[var(--principal-text)] text-sm">
            You already have an account?{" "}
            <Link href="/login" className="text-[var(--secondary)]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
