"use client";

import React, { useState, ChangeEvent } from "react";

interface passwordInputProps {
    onValid: (isValid: boolean, value: string) => void;
}

const passwordInput = ({ onValid }: passwordInputProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validatePassword = (password: string) => {
        // Requisitos:
        // - Al menos 6 caracteres
        // - Al menos una letra mayúscula
        // - Al menos un número
        // - Al menos un símbolo especial
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/;
        return passwordRegex.test(password);
      };
      

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setValue(password);

        if (!validatePassword(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, and one number");
            setIsValid(false);
            onValid(false, password);
        } else {
            setError("");
            setIsValid(true);
            onValid(true, password);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mb-4">
            <label className="block text-[var(--secondary-text)]">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              id="password"
              value={value}
              onChange={handleChange}
              className={`w-full px-4 py-2 border border-[var(--secondary-text)] rounded bg-[var(--background)] text-[var(--principal-text)] ${isValid ? "border-green-600" : ""}`}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="flex items-center text-sm text-[var(--accent-color)] mt-2"
            >
              {showPassword ? (
                <>
                  <i className="bx bx-hide mr-2 text-[1rem]"></i>
                  Hide password
                </>
              ) : (
                <>
                  <i className="bx bx-show mr-2 text-[1rem]"></i>
                  Show password
                </>
              )}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );

}

export default passwordInput;