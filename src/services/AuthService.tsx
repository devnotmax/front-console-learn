import { loginForm, registerForm } from "@/interfaces/Auth";

const apiURL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

export const RegisterUser = async (userData: registerForm) => {
  try {
    const res = await fetch(`${apiURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "User creation error");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const LoginUser = async (userData: loginForm) => {
  try {
    const res = await fetch(`${apiURL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      return res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "Login error");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
