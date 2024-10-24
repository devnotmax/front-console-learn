import { ICourse } from "@/interfaces/Course";
import { Course } from "@/interfaces/ProductCard";

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
}

export const filterByTechnology = async (technology: string): Promise<ICourse[]> => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/course?technologies=${technology}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al filtrar los datos de los cursos:", error);
        return [];
    }
}

export const OrderByPrice = async (priceSelector: boolean): Promise<Course> => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/course?priceSelector=${priceSelector}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al filtrar los datos de los cursos:", error);
        return {} as Course;
    }
}

export const getCourseById = async (id: string): Promise<Course | null> => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/course/${id}`);
        if (!response.ok) {
        console.error('Error fetching course:', response.statusText);
        throw new Error('Error fetching course data');
        }
        const course: Course = await response.json();
        return course;
    } catch (error) {
        console.error('Error fetching course:', error);
        return null;
    }
};
