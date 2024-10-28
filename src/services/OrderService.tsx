import { getAuthToken } from "@/contexts/authContext";
export const getOrders = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/orders?id=${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};
