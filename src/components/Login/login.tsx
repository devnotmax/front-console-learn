"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'boxicons/css/boxicons.min.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
        const response = await fetch('https://tu-backend-api.com/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Error en la autenticación');
        }

        const data = await response.json();
        console.log('Usuario autenticado:', data);
        router.push("/");

        } catch (error) {
        console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
            <div className="text-center mb-6">
            <i className='bx bxs-graduation' style={{ color: '#ffffff', fontSize: '5rem' }}></i>
            <h2 className="text-2xl font-bold text-white">Iniciar Sesión en <span className="text-purple-500">ConsoLearn</span></h2>
            </div>
            <form onSubmit={handleLogin}>
            <div className="mb-4">
                <label className="block text-gray-300 mb-2">Correo Electrónico</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
                placeholder="tu@ejemplo.com"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-300 mb-2">Contraseña</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-600 rounded bg-white text-black"
                placeholder="••••••••"
                required
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                Iniciar Sesión
            </button>
            </form>
            <div className="text-center mt-4">
            <a href="#" className="text-purple-500 text-sm">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="text-center mt-2">
            <p className="text-white text-sm">¿No tienes una cuenta? <a href="/register" className="text-purple-500">Regístrate</a></p>
            </div>
        </div>
        </div>
    );
};

export default Login;