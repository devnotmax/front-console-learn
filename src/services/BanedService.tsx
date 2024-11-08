import { getAuthToken } from "@/contexts/authContext";

// services/userService.ts
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = getAuthToken();

export async function BanStatus(userId: string, newStatus: boolean): Promise<void> {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
       },
      body: JSON.stringify({ isBanned: newStatus }),
    });

    if (!response.ok) {
      throw new Error('No se pudo actualizar el estado de baneo');
    }
  } catch (error) {
    console.error('Error al cambiar el estado de baneo:', error);
    throw error;
  }
}


