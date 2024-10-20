"use client";
import React, { useState } from 'react';
import { registerForm } from '@/interfaces/Auth';
import 'boxicons/css/boxicons.min.css';

const Register: React.FC = () => {
    const [formData, setFormData] = useState<registerForm>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
        });
    
        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');
        const [loading, setLoading] = useState(false); // Indicador de carga
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
        };
    
        const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword || !formData.termsAccepted || !formData.phone) {
            return 'Todos los campos son obligatorios';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return 'El correo electrónico no es válido';
        }
        if (formData.password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres';
        }
        if (formData.password !== formData.confirmPassword) {
            return 'Las contraseñas no coinciden';
        }
        if (!formData.termsAccepted) {
            return 'Debe aceptar los términos y condiciones';
        }
        if (!/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(formData.phone)) {
            return 'El número de teléfono debe ser válido';
        }
        return null;
        };
    
        const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        setSuccess('');
    
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }
    
        setLoading(true); // Comenzar la carga
    
        try {
            const response = await fetch('https://video-academy.onrender.com/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: Number(formData.phone),
                password: formData.password,
            }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
            setSuccess('Registro exitoso');
            setError('');
            } else {
            setError(data.message || 'Error en el registro, intente nuevamente');
            setSuccess('');
            }
        } catch (err) {
            setError('Error en el registro, intente nuevamente');
            setSuccess('');
        } finally {
            setLoading(false); // Finalizar la carga
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className="bg-[var(--background)] p-8 rounded-lg shadow-lg max-w-md w-full my-6">
        <div className="text-center mb-6">
            <i className='bx bxs-graduation' style={{ color: '#ffffff', fontSize: '5rem' }}></i>
            <h2 className="text-center text-2xl font-bold text-[var(--principal-text)] mb-4">Regístrate en <span className="text-[var(--primary)]">ConsoLearn</span></h2>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            placeholder="Nombre Completo"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            />
            <input
            type="text"
            name="phone"
            placeholder="Numero"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            />
            <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            />
            <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            />
            <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 mb-4 rounded"
            />
            <label className="flex items-center mb-4">
            <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mr-2"
            />
            <span className="text-white">Acepto los términos y condiciones</span>
            </label>
            <button type="submit" className="w-full p-2 primary-btn text-white rounded">
            Registrarse
            </button>
        </form>
        <p className="text-center text-white mt-4">
            ¿Ya tienes una cuenta? <a href="/login" className="text-[var(--primary)]">Inicia sesión</a>
        </p>
        </div>        
        </div>
    );
};

export default Register;