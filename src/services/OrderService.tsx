import { getAuthToken } from "@/contexts/authContext";
export const getOrders = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/orders`, {
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

export const getPaidOrders = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/orders?paid=true`, {
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

export const getPendingOrders = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/orders?paid=false`, {
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

export const cancelOrder = async (id: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/orders/${id}`, {
    method: "DELETE",
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
