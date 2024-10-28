import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Asegúrate de importar los estilos

interface PhoneInputProps {
  onValid: (isValid: boolean, value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneInputProps> = ({ onValid }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validatePhone = (phone: string) => {
    // Permite solo números y espacios
    const phoneRegex = /^[0-9\s]+$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (phone: string) => {
    setValue(phone);

    if (!validatePhone(phone)) {
      setError("Invalid phone number");
      onValid(false, phone);
    } else {
      setError("");
      onValid(true, phone);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-[var(--secondary-text)] mb-2">
        Phone number
      </label>
      <div className="">
        <PhoneInput
          country={"es"}
          value={value}
          onChange={handleChange}
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: true,
          }}
          inputStyle={{
            width: "100%",
            height: "2.5rem",
            backgroundColor: "var(--background)",
            color: "var(--principal-text)",
          }}
          buttonStyle={{
            backgroundColor: "var(--background)",
          }}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
