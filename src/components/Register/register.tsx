// "use client";
// import React, { ChangeEvent, useState, useEffect } from "react";
// import { registerForm, ErrregisterForm } from "@/interfaces/Auth";
// import { validateRegisterForm } from "@/utils/registerValidator";
// import { RegisterUser } from "@/services/AuthService";
// import "boxicons/css/boxicons.min.css";
// import { useRouter } from "next/navigation";

// const Register = () => {
//   const router = useRouter();

//   const [userData, setUserData] = useState<registerForm>({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     confirmPassword: "",
//     termsAccepted: false,
//   });

//   const [error, setError] = useState<ErrregisterForm>({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     confirmPassword: "",
//     termsAccepted: false,
//   });
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value, // Atributo name utilizado para actualizar el estado
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await RegisterUser(userData);
//       router.push("/login");
//     } catch (error: any) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const errors = validateRegisterForm(userData);
//     setError(errors);
//   }, [userData]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
//         <div className="text-center mb-6">
//           <i
//             className="bx bxs-graduation"
//             style={{ color: "#ffffff", fontSize: "5rem" }}
//           ></i>
//           <i
//             className="bx bxs-graduation"
//             style={{ color: "#ffffff", fontSize: "5rem" }}
//           ></i>
//           <h2 className="text-center text-2xl font-bold text-white mb-4">
//             Regístrate en <span className="text-purple-500">ConsoLearn</span>
//           </h2>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Nombre Completo"
//             value={userData.name}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Numero"
//             value={userData.phone}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Correo Electrónico"
//             value={userData.email}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Contraseña"
//             value={userData.password}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded"
//           />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirmar Contraseña"
//             value={userData.confirmPassword}
//             onChange={handleChange}
//             className="w-full p-2 mb-4 rounded"
//           />
//           <label className="flex items-center mb-4">
//             <input
//               type="checkbox"
//               name="termsAccepted"
//               checked={userData.termsAccepted}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             <span className="text-white">
//               Acepto los términos y condiciones
//             </span>
//           </label>
//           <button
//             type="submit"
//             className="w-full p-2 bg-purple-500 text-white rounded"
//           >
//             Registrarse
//           </button>
//         </form>
//         <p className="text-center text-white mt-4">
//           ¿Ya tienes una cuenta?{" "}
//           <a href="/login" className="text-purple-500">
//             Inicia sesión
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;

"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { registerForm, ErrregisterForm } from "@/interfaces/Auth";
import { validateRegisterForm } from "@/utils/registerValidator";
import { RegisterUser } from "@/services/AuthService"; // Asegúrate de que esta ruta sea correcta
import "boxicons/css/boxicons.min.css";
import { useRouter } from "next/navigation";

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
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value, // Maneja el checkbox correctamente
    });
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

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setError(errors);
  }, [userData]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
          <i
            className="bx bxs-graduation"
            style={{ color: "#ffffff", fontSize: "5rem" }}
          ></i>
          <h2 className="text-center text-2xl font-bold text-white mb-4">
            Regístrate en <span className="text-purple-500">ConsoLearn</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
          />
          {error.name && <p className="text-red-500">{error.name}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Número (ej: +543813887102)"
            value={userData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
          />
          {error.phone && <p className="text-red-500">{error.phone}</p>}

          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
          />
          {error.email && <p className="text-red-500">{error.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
          />
          {error.password && <p className="text-red-500">{error.password}</p>}

          {/* <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={userData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
          />
          {error.confirmPassword && <p className="text-red-500">{error.confirmPassword}</p>} */}

          {/* <label className="flex items-center mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={userData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-white">Acepto los términos y condiciones</span>
          </label>
          {error.termsAccepted && <p className="text-red-500">{error.termsAccepted}</p>} */}

          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded"
          >
            Registrarse
          </button>
        </form>
        <p className="text-center text-white mt-4">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-purple-500">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
