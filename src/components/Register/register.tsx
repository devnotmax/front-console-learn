"use client";
import React, { useState } from "react";
import { registerForm } from "@/interfaces/Auth";
import { RegisterUser } from "@/services/AuthService";
import "boxicons/css/boxicons.min.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//components
import EmailInput from "@/components/Inputs/email";
import PasswordInput from "@/components/Inputs/Password";
import NameInput from "@/components/Inputs/Name";
import PhoneNumberInput from "@/components/Inputs/phone";

const Register = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<registerForm>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [isFormValid, setIsFormValid] = useState({
    name: false,
    email: false,
    password: false,
    phone: false,
  });

  const handleEmailValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, email: isValid }));
    setUserData((prev) => ({ ...prev, email: value }));
  };

  const handlePasswordValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, password: isValid }));
    setUserData((prev) => ({ ...prev, password: value }));
  };

  const handleNameValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, name: isValid }));
    setUserData((prev) => ({ ...prev, name: value }));
  };

  const handlePhoneValidation = (isValid: boolean, value: string) => {
    setIsFormValid((prev) => ({ ...prev, phone: isValid }));
    setUserData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !isFormValid.email ||
      !isFormValid.password ||
      !isFormValid.name ||
      !isFormValid.phone
    ) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill out all fields correctly.",
      });
      return;
    }

    try {
      const res = await RegisterUser(userData);
      if (res) {
        document.cookie = `userSession=${JSON.stringify(res)}; path=/`;
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: res.message || "Welcome to ConsoLearn!",
        }).then(() => {
          router.push("/login");
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Failed to register. Please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[var(--foreground)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
          <i
            className="bx bxs-graduation"
            style={{ color: "var(--principal-text)", fontSize: "6rem" }}
          ></i>
          <h2 className="text-2xl font-bold text-[var(--principal-text)]">
            Sign Up to{" "}
            <span className="text-[var(--primary)]">ConsoLearn</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <NameInput onValid={handleNameValidation} />
          <EmailInput onValid={handleEmailValidation} />
          <PhoneNumberInput onValid={handlePhoneValidation} />
          <PasswordInput onValid={handlePasswordValidation} />
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
