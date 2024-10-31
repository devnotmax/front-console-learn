"use client";
// pages/profile.tsx
import React, { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import ProfileOrders from '@/components/ProfileOrder/ProfileOrders';
import ProfileCourses from '@/components/ProfileCourse/ProfileCourse';
import ProfileCertifications from '@/components/ProfileCertifications/ProfileCertifications';

const ProfilePage = () => {
  const { dataUser} = useAuth(); // Asegúrate de tener una función para actualizar la imagen
  const [activeTab, setActiveTab] = useState('Órdenes');
  // const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [previewImage, setPreviewImage] = useState<string | null>(null);

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     setSelectedImage(file);
  //     setPreviewImage(URL.createObjectURL(file));
  //   }
  // };

  // const handleImageUpload = async () => {
  //   if (!selectedImage) return;

  //   const formData = new FormData();
  //   formData.append('profileImage', selectedImage);
  // };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[var(--background)] rounded-lg text-[var(--principal-text)] mb-8 mt-8  min-h-[70vh]">
      <div className="flex items-center space-x-4 mb-6">
          <img
            src={dataUser?.user.image}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        <div>
          <h2 className="text-2xl font-semibold">{dataUser?.user.name}</h2>
          <p className="text-[var(--secondary-text)]">@{dataUser?.user.email}</p>
          <p className="text-[var(--secondary-text)]">{dataUser?.user.phone}</p>
        </div>
      </div>

      {/* <div className="mb-4">
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload} className="mt-2 p-2 bg-[var(--accent-color)] rounded-lg">
          Actualizar imagen
        </button>
      </div> */}

      <div className="flex space-x-4 mb-4 border-b border-[var(--secondary-text)]">
        {['Orders', 'My courses', 'My certifications'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab ? 'text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]' : 'text-[var(--principal-text)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'Orders' && <ProfileOrders />}
        {activeTab === 'My courses' && <ProfileCourses/>}
        {activeTab === 'My certifications' && <ProfileCertifications/>}
      </div>
    </div>
  );
};

export default ProfilePage;

