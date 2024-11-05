import { ICourse } from "@/interfaces/Course";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import { getCourses } from "@/services/CourseServices";
import CardDeleteCourse from "./CardDeleteCourse";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteCoursesModal: React.FC<CourseModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { dataUser } = useAuth();
  const [courses, setCourses] = useState<ICourse[]>([]);

  const fetchCourses = async () => {
    if (dataUser) {
      try {
        const userCourses = await getCourses();
        setCourses(userCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [dataUser]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">Eliminar curso</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
        >
          <i className="bx bx-x text-3xl"></i>
        </button>
        <div className="flex flex-col gap-4">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CardDeleteCourse key={course.id} course={course} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No hay cursos disponibles para eliminar.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteCoursesModal;
