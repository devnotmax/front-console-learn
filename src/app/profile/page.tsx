"use client";
import React, { useState } from "react";
import { useAuth } from "@/contexts/authContext";
import Image from "next/image";
import { uploadProfileImage } from "@/services/userService";

interface IUser {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    image: string;
  };
}

const UserWidget = () => {
  const { dataUser, setDataUser } = useAuth(); // Ensure these are provided by your context
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false); // Add a loading state for feedback
  const [uploadError, setUploadError] = useState<string | null>(null); // Add error state

  // Handle the file input change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      setUploadError(null); // Clear any previous errors
    }
  };

  // Upload the selected image
  const handleUpload = async () => {
    if (selectedImage) {
      setIsUploading(true);
      try {
        // Upload the image and get the URL
        const imageUrl = await uploadProfileImage(selectedImage);
        // Update user data with new image URL
        setDataUser({ ...dataUser, user: { ...dataUser.user, image: imageUrl } });
        setSelectedImage(null); // Reset selected image
      } catch (error) {
        console.error("Error uploading image:", error);
        setUploadError("Failed to upload image. Please try again.");
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <div className="space-x-2 w-full h-screen p-12 flex flex-col items-center gap-4">
      {/* User Information */}
      <div className="w-full h-1/4 bg-[var(--background)] rounded-lg">
        <div className="grid grid-cols-10 grid-rows-2">
          <div className="row-span-2 p-4">
            {dataUser?.user.image ? (
              <Image
                src={dataUser.user.image}
                alt="User Image"
                width={150}
                height={150}
                className="rounded-full"
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className="col-span-9 row-span-2 text-white p-8">
            <h2 className="text-2xl font-semibold">{dataUser?.user.name}</h2>
            <p className="text-sm text-[var(--foreground)]">{dataUser?.user.email}</p>
            <p className="text-sm text-[var(--foreground)]">{dataUser?.user.phone}</p>
          </div>
        </div>
      </div>

      {/* Image Upload Section */}
      <div className="w-full h-3/4 bg-[var(--background)] rounded-lg p-4 text-white">
        <h3 className="text-xl font-medium">My Orders</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        
        <button
          onClick={handleUpload}
          disabled={isUploading} // Disable button when uploading
          className={`mt-4 p-2 rounded-md ${
            isUploading ? "bg-gray-400" : "bg-[var(--accent-color)] text-white"
          }`}
        >
          {isUploading ? "Uploading..." : "Update Profile Picture"}
        </button>

        {/* Display error message if upload fails */}
        {uploadError && <p className="mt-2 text-red-500">{uploadError}</p>}
      </div>
    </div>
  );
};

export default UserWidget;
