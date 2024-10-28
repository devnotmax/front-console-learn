"use client";

//hooks
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

//assets
import "boxicons/css/boxicons.min.css";

//context
import { useAuth } from "@/contexts/authContext";

//interfaces
import { loginForm } from "@/interfaces/Auth";


//services
import { LoginUser } from "@/services/AuthService";

//components
import EmailInput from "@/components/Inputs/email";
import PasswordInput from "@/components/Inputs/Password";

// SweetAlert2
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const router = useRouter();
  const { setDataUser } = useAuth();

  const [userData, setUserData] = useState<loginForm>({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState({
    email: false,
    password: false,
  });

  const handleEmailValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, email: isValid }));
    setUserData((prev) => ({ ...prev, email: value }));
  };

  const handlePasswordValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, password: isValid }));
    setUserData((prev) => ({ ...prev, password: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid.email || !isFormValid.password) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please fill out all fields correctly",
      });
      return;
    }

    try {
      const res = await LoginUser(userData);
      if (res && res.token) {
        setDataUser(res);
        document.cookie = `userSession=${JSON.stringify(res)}; path=/`;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: res.message || "Welcome back!",
        }).then(() => {
          router.push("/");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "No token found in the response.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to login. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[var(--foreground)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
          <i
            className="bx bxs-graduation"
            style={{ color: "var(--principal-text)", fontSize: "6rem" }}
          ></i>
          <h2 className="text-2xl font-bold text-[var(--principal-text)]">
            Log in to <span className="text-[var(--primary)]">ConsoLearn</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <EmailInput onValid={handleEmailValidation} />
          <PasswordInput onValid={handlePasswordValidation} />
          <button
            type="submit"
            className="w-full bg-[var(--primary)] text-white py-2 rounded hover:bg-[var(--accent-color)] transition"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-4"></div>
        <div className="text-center mt-2">
          <p className="text-[var(--principal-text)] text-sm">
            You don&apos;t have an account?{" "}
            <Link href="/register" className="text-[var(--secondary)]">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
