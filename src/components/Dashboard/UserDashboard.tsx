import React from 'react';
import UserProfile from './UserProfile';

const UserDashboard = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-6">Dashboard de Usuario</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <UserProfile />
    </div>
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tus Actividades</h2>
        <ul className="list-disc pl-6">
        <li>Cursos en progreso</li>
        <li>Historial de compras</li>
        <li>Soporte</li>
        </ul>
    </div>
    </div>
</div>
);
};

export default UserDashboard;
