import { getAuthToken } from "@/contexts/authContext";

// services/uploadImage.ts
export async function uploadProfileImage(image: File): Promise<Response> {
    const token = getAuthToken();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;
    const formData = new FormData();
    formData.append('image', image);

    const response = await fetch(`${apiURL}/files/user`, {
        method: "POST",
        headers: {
            // Asegúrate de agregar el token si es necesario
            "Authorization": `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Error uploading image");
    }

    return response;
}
