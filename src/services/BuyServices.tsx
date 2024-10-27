import { ICourse } from "@/interfaces/Course";
import { getAuthToken } from "@/contexts/authContext";

// Define el tipo de respuesta para la compra de un curso
export interface BuyCourseResponse {
  message: string;
  data: {
    id: string;
    userId: string;
    status: boolean;
    courseId: string;
    createdAt: string;
    updatedAt: string;
    course: ICourse;
  };
}

// Define el tipo de respuesta para el pago de una orden
export interface PayOrderResponse {
  id: string;
  status: string;
  payment_status: string;
  url: string;
}


// Servicio para comprar un curso
export const buyCourse = async (id: string): Promise<BuyCourseResponse> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = getAuthToken();

    const res = await fetch(`${apiUrl}/orders?id=${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data: BuyCourseResponse = await res.json();
    console.log("Curso comprado:", data);
    return data;
  } catch (error) {
    console.error("Error al comprar el curso:", error);
    throw error;
  }
};

// Servicio para pagar la orden
export const payOrder = async (id: string): Promise<PayOrderResponse> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = getAuthToken();

    const res = await fetch(`${apiUrl}/orders/start-payment/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Detalles del pago:", data);

    return {
      id: data.id,
      status: data.status,
      payment_status: data.payment_status,
      url: data.url,
    };
  } catch (error) {
    console.error("Error al procesar el pago:", error);
    throw error;
  }
};
