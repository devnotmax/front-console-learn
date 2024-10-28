export const uploadProfileImage = async (file: File) => {
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
        const apiURL = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiURL}/users/upload`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })

        if (!response.ok) {
            throw new Error("Error uploading profile image");
        }

        const data = await response.json();
        return data.profileImageUrl;
    } catch (error) {
        console.error("Error uploading profile image:", error);
        throw error;
    }
};
