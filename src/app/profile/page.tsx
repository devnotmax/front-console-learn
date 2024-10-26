"use client";
// pages/profile.tsx
import React, { useState } from 'react';
import { useAuth } from '@/contexts/authContext';
import ProfileOrders from '@/components/ProfileOrder/ProfileOrders';
// import ProfileCourses from '@/components/ProfileCourses';
// import ProfileCertifications from '@/components/ProfileCertifications';
import Image from 'next/image';

const ProfilePage = () => {

  const { dataUser } = useAuth();
  const [activeTab, setActiveTab] = useState('Órdenes');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[var(--background)] rounded-lg text-[var(--principal-text)] mb-8 mt-8">
      <div className="flex items-center space-x-4 mb-6">
        {dataUser?.user.image ? (
          <Image
            src={dataUser.user.image}
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full"
          />
        ) : (
          <div className="w-24 h-24 bg-[var(--principal-text)] rounded-full"></div>
        )}
        <div>
          <h2 className="text-2xl font-semibold">{dataUser?.user.name}</h2>
          <p className="text-[var(--secondary-text)]">@{dataUser?.user.email}</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-4 border-b border-[var(--secondary-text)]">
        {['Órdenes', 'Mis cursos', 'Mis certificaciones'].map((tab) => (
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

      {/* Render content based on active tab */}
      <div>
        {activeTab === 'Órdenes' && <ProfileOrders />}
        {activeTab === 'Mis cursos'  }
        {activeTab === 'Mis certificaciones'  }
      </div>
    </div>
  );
};

export default ProfilePage;