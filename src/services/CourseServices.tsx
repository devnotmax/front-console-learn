import { ICourse } from "@/interfaces/Course";
import { Course } from "@/interfaces/ProductCard";
import { getAuthToken } from "@/contexts/authContext";

export const getCourses = async () => {
  try {
    // Realizar la solicitud a la API
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/course`);
    if (!res.ok) {
      throw new Error("Error fetching courses");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener los datos de los cursos:", error);
    return [];
  }
};

export const filterByTechnology = async (
  technology: string
): Promise<ICourse[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/course?technologies=${technology}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al filtrar los datos de los cursos:", error);
    return [];
  }
};

export const getCourseById = async (id: string): Promise<Course | null> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${apiUrl}/course/${id}`);
    if (!response.ok) {
      console.error("Error fetching course:", response.statusText);
      throw new Error("Error fetching course data");
    }
    const course: Course = await response.json();
    return course;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

export const OrderByPrice = async (
  priceSelector: boolean
): Promise<ICourse[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/course?priceSelector=${priceSelector}`);
    const data = await res.json();

    // Asegurarse de que data sea un array
    if (Array.isArray(data)) {
      return data;
    } else {
      // Si no es un array, devolver un array vacío
      console.error("Los datos obtenidos no son un arreglo:", data);
      return [];
    }
  } catch (error) {
    console.error("Error al filtrar los datos de los cursos:", error);
    return [];
  }
};

export const filterByTechnologyAndPrice = async (
  technology: string,
  priceSelector: true | false // Ahora acepta "asc" o "desc"
): Promise<ICourse[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(
      `${apiUrl}/course?priceSelector=${priceSelector}&technologies=${technology}`
    );
    const data = await res.json();

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Los datos obtenidos no son un arreglo:", data);
      return [];
    }
  } catch (error) {
    console.error("Error al filtrar los datos de los cursos:", error);
    return [];
  }
};

export const searchCourses = async (searchTerm: string): Promise<ICourse[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const data = await fetch(`${apiUrl}/courses?search=${searchTerm}`);

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Los datos obtenidos no son un arreglo:", data);
      return [];
    }
  } catch (error) {
    console.error("Error al filtrar los datos de los cursos:", error);
    return [];
  }
};

export const getMyCourses = async (): Promise<ICourse[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = getAuthToken();

  const res = await fetch(`${apiUrl}/course/My-Courses`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    console.error("Error al obtener los cursos:", res.statusText);
    return [];
  }

  const data = await res.json();
  if (Array.isArray(data)) {
    return data;
  } else {
    console.error("Los datos obtenidos no son un arreglo:", data);
    return [];
  }
};
