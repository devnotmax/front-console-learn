import React, { useState } from 'react';

const AdminProfile = () => {
const [profilePicture, setProfilePicture] = useState('/default-profile.png'); 
const [name, setName] = useState('Admin User');
const [email, setEmail] = useState('admin@example.com');

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files && e.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onload = () => {
    setProfilePicture(reader.result as string);
    };
    reader.readAsDataURL(file);
}
};

return (
<div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Perfil de Administrador</h2>
    <div className="flex items-center mb-6">
    <img
        src={profilePicture}
        alt="Foto de perfil"
        className="w-24 h-24 rounded-full object-cover mr-4"
    />
    <label className="cursor-pointer">
        <span className="text-blue-500 hover:underline">Cambiar foto</span>
        <input
        type="file"
        className="hidden"
        onChange={handleImageChange}
        />
    </label>
    </div>
    <div>
    <label className="block mb-2 text-gray-700">Nombre</label>
    <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    </div>
    <div className="mt-4">
    <label className="block mb-2 text-gray-700">Correo electrónico</label>
    <input
        type="email"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    </div>
</div>
);
};

export default AdminProfile;
