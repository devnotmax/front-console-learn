"use client";

import React, { useState, ChangeEvent } from "react";

interface nameInputProps {
  onValid: (isValid: boolean, value: string) => void;
}

const nameInput = ({ onValid }: nameInputProps) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const validateName = (name: string) => {
    // Permite solo letras (mayúsculas y minúsculas) y espacios
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nameRegex.test(name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setValue(name);
    if (!validateName(name)) {
      setError("Invalid name");
      setIsValid(false);
      onValid(false, name);
    } else {
      setError("");
      setIsValid(true);
      onValid(true, name);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-[var(--secondary-text)]">Name</label>
      <div className="flex justify-center items-center">
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className={`w-full px-4 py-2 border border-[var(--secondary-text)] rounded bg-[var(--background)] text-[var(--principal-text)] focus:outline-none focus:ring-2 ${
            isValid ? "border-green-500" : ""
          }`}
          value={value}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default nameInput;