"use client";

import { useState, ChangeEvent,  } from "react";

interface EmailInputProps {
  onValid: (isValid: boolean, value: string) => void;
}
const EmailInput: React.FC<EmailInputProps> = ({ onValid }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setValue(email);

    if (!validateEmail(email)) {
      setError("Invalid email address");
      setIsValid(false);
      onValid(false, email);
    } else {
      setError("");
      setIsValid(true);
      onValid(true, email);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-[var(--secondary-text)]">Email</label>

      <div className="flex justify-center items-center">
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className={`w-full px-4 py-2 border border-[var(--secondary-text)] rounded bg-[var(--background)] text-[var(--principal-text)] focus:outline-none focus:ring-2 ${
            isValid ? "border-green-600 border-[2px]" : ""
          }`}
          value={value}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;
