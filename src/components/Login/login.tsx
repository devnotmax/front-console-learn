"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext'
import 'boxicons/css/boxicons.min.css';

interface LoginFormState {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState<LoginFormState>({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [errors, setErrors] = useState<Partial<LoginFormState>>({});
    const router = useRouter();

    const validate = () => {
        const newErrors: Partial<LoginFormState> = {};

        if (!formData.email) {
            newErrors.email = 'El correo electrónico es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        return newErrors;
    };

        const handleLogin = async (e: React.FormEvent) => {
            e.preventDefault();
            const validationErrors = validate();
    
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            } else {
                setErrors({});
            }

        try {
        const response = await fetch('https://video-academy.onrender.com/api/auth', {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            
            const loggedUser = {
                id: data.user.id,
                name: data.user.name,
                email: data.user.email,
                phone: data.user.phone,
                image: data.user.image,
                role: data.user.role,
            };
            setFormData(data);
            // Usa la función login del contexto de autenticación
            login(data.user); // Asegúrate de que data.user contiene los datos necesarios
            localStorage.setItem('token', data.token);
            setMessage("Inicio de sesión exitoso");
            setError(null);
            setFormData({
                email: '',
                password: '',
            });
            router.push('/')
        } else {
            const errorData = await response.json();
            setError(errorData.message || "Error al iniciar sesión");
        }
        
    } catch (err) {
        setError("Error al realizar la solicitud. Por favor, inténtalo de nuevo más tarde.");
    }
};

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
            <div className="text-center mb-6">
            <i className='bx bxs-graduation' style={{ color: '#ffffff', fontSize: '6rem' }}></i>
            <h2 className="text-2xl font-bold text-[var(--principal-text)]">Iniciar Sesión en <span className="text-[var(--primary)]">ConsoLearn</span></h2>
            </div>
            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block text-[var(--principal-text)] mb-2">Correo Electrónico</label>
                <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
                placeholder="tu@ejemplo.com"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-[var(--principal-text)] mb-2">Contraseña</label>
                <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
                placeholder="••••••••"
                required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="w-full bg-[var(--primary)] text-white py-2 rounded hover:bg-purple-700 transition">
                Iniciar Sesión
            </button>
            </form>
            <div className="text-center mt-4">
            <a href="#" className="text-[var(--primary)] text-sm">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="text-center mt-2">
            <p className="text-white text-sm">¿No tienes una cuenta? <a href="/register" className="text-[var(--primary)]">Regístrate</a></p>
            </div>
        </div>
        </div>
    );
};

export default Login;