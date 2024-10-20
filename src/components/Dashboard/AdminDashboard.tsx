import React from 'react';
import AdminProfile from './AdminProfile';

const AdminDashboard = () => {
return (
<div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold mb-6">Dashboard de Administrador</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
        <AdminProfile />
    </div>
    <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Gestión de Plataforma</h2>
        <ul className="list-disc pl-6">
        <li>Ver usuarios registrados</li>
        <li>Revisión de compras</li>
        <li>Administrar cursos</li>
        </ul>
    </div>
    </div>
</div>
);
};

export default AdminDashboard;
