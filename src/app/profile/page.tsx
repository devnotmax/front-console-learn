"use client";
// pages/profile.tsx
import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import ProfileOrders from "@/components/ProfileOrder/ProfileOrders";
import ProfileCourses from "@/components/ProfileCourse/ProfileCourse";
import ProfileCertifications from "@/components/ProfileCertifications/ProfileCertifications";

const ProfilePage = () => {
  const { dataUser } = useAuth();
  const [activeTab, setActiveTab] = useState("Orders");

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-[var(--background)] rounded-lg text-[var(--principal-text)] mb-8 mt-8 min-h-[70vh]">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <img
          src={dataUser?.user.image}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full w-24 h-24 sm:w-32 sm:h-32"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {dataUser?.user.name}
          </h2>
          <p className="text-[var(--secondary-text)] text-sm sm:text-base">
            @{dataUser?.user.email}
          </p>
          <p className="text-[var(--secondary-text)] text-sm sm:text-base">
            {dataUser?.user.phone}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4 border-b border-[var(--secondary-text)]">
        {["Orders", "My courses", "My certifications"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm sm:text-base ${
              activeTab === tab
                ? "text-[var(--accent-color)] border-b-2 border-[var(--accent-color)]"
                : "text-[var(--principal-text)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {activeTab === "Orders" && <ProfileOrders />}
        {activeTab === "My courses" && <ProfileCourses />}
        {activeTab === "My certifications" && <ProfileCertifications />}
      </div>
    </div>
  );
};

export default ProfilePage;
