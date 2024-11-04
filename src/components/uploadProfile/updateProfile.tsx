import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { uploadProfileImage } from '@/services/uploadImage';
import { useAuth } from '@/contexts/authContext';

const ProfileImageUploader: React.FC = () => {
    const {dataUser} = useAuth();
    const [imagePreview, setImagePreview] = useState<string >();

    const handleImageClick = async () => {
        const { value: file } = await Swal.fire( {
            title: 'Select image',
            input: 'file',
            inputAttributes: {
                accept: 'image',
                'aria-label': 'Upload your profile image'
            },
            showCancelButton: true,
            confirmButtonText: 'Upload image',
        }
    );
    

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);

            try {
                await uploadProfileImage( file);
                Swal.fire('Success!', 'Your profile photo has been updated.', 'success');
            } catch {
                Swal.fire( 'Error!', 'There was a problem uploading the image.');
                
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            <img
                src={imagePreview || dataUser?.user.image}
                alt="Profile"
                className="w-32 h-32 rounded-full cursor-pointer border border-gray-300"
                onClick={handleImageClick}
            />
            <p className="text-sm text-gray-500 mt-2">Change image</p>
        </div>
    );
};

export default ProfileImageUploader;
