import { ICourse } from "@/interfaces/Course";

export const getCourses = async (): Promise<ICourse[]> => {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${apiUrl}/course`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos de los cursos:", error);
        return [];
    }
}