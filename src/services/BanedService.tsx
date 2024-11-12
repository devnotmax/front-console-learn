import { getAuthToken } from "@/contexts/authContext";

// services/userService.ts
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const token = getAuthToken();

export async function BanStatus(userId: string, newStatus: boolean): Promise<void> {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
       },
      body: JSON.stringify({ isBanned: newStatus }),
    });

    if (!response.ok) {
      throw new Error('Could not update ban status');
    }
  } catch (error) {
    console.error('Error when changing ban status:', error);
    throw error;
  }
}

export async function BanedFalse(userId: string, newStatus: boolean): Promise<void> {
  try {
    const response = await fetch(`${apiUrl}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
       },
      body: JSON.stringify({ isBanned: newStatus }),
    });

    if (!response.ok) {
      throw new Error('Could not update ban status');
    }
  } catch (error) {
    console.error('Error when changing ban status:', error);
    throw error;
  }
}


