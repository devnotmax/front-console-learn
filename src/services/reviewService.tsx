// services/reviewService.ts

import { getAuthToken } from "@/contexts/authContext";

// Define la URL base de tu API
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Obtener todas las reseñas
export const getReviews = async () => {
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/review`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  }
};

// Crear una nueva reseña
export interface ReviewData {
  content: string;
  rating: number;
}
export async function createReview(
  courseId: string,
  reviewData: ReviewData
): Promise<Response> {
  const response = await fetch(`${apiUrl}/review?courseId=${courseId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reviewData),
  });

  if (!response.ok) {
    throw new Error("Error al crear la reseña");
  }
  return response;
}

// Eliminar una reseña
export const deleteReview = async (id: string) => {
  try {
    const token = getAuthToken();
    const response = await fetch(`${apiUrl}/review/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error deleting reviews");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getReviewTop = async () => {
  try {
    const response = await fetch(`${apiUrl}/review/top`);
    if (!response.ok) {
      throw new Error("Error al obtener reseñas");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener reseñas:", error);
    throw error;
  }
};

export interface Reviews {
  userId: string;
  id: string;
}

export const getReviewById = async (id: string) => {
  try {
    const response = await fetch(`${apiUrl}/review/course/${id}`);
    if (!response.ok) {
      throw new Error("Error ");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener reseña:", error);
    throw error;
  }
};
