import { getAuthToken } from "@/contexts/authContext";

export const searchUsers = async (query: string) => {
    const token = getAuthToken();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    const url = `${apiURL}/users?${query.includes("@") ? `email=${query}` : `name=${query}`}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    const result = await response.json();
    return result.data; 
};
