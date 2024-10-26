import axios from "axios";

export const uploadProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
        const apiURL = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.post(`${apiURL}/users/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.imageUrl;
    } catch (error) {
        console.error("Error uploading profile image:", error);
        throw error;
    }
};
