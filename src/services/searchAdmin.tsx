// services/userService.ts
import { getAuthToken } from "@/contexts/authContext";

const apiURL = process.env.NEXT_PUBLIC_API_URL;


export const searchUsers = async (page?: number, name?: string, email?: string) => {
    const token = getAuthToken();
    const queryParams = new URLSearchParams();

    queryParams.append( "limit", "10" );
    if (page) queryParams.append("page", page.toString());
    if (name) queryParams.append("name", name);
    if (email) queryParams.append("email", email);

    try {
        const response = await fetch(`${apiURL}/users?${queryParams.toString()}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error fetching users");
        }
        const data = await response.json();
        
        

        return data;
    } catch (error) {
        console.error("Error searching users:", error);
        return [];
    }
};
