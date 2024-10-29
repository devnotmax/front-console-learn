// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { getMyCourses, getCourseById } from "@/services/CourseServices";
// import { useAuth } from "@/contexts/authContext";
// import Swal from "sweetalert2";

// const CourseContent: React.FC = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const { dataUser } = useAuth();
//   const [hasAccess, setHasAccess] = useState(false);

//   // Extrae el ID desde la ruta
//   const id = pathname.split("/")[2]; // "/course/[id]/content" toma el segundo elemento después de dividir por "/"


//   useEffect(() => {
//     const checkCourseAccess = async () => {
//       if (dataUser) {
//         const purchasedCourses = await getMyCourses();
//         const purchased = purchasedCourses.some(
//           (purchasedCourse) => purchasedCourse.id === id
//         );

//         if (purchased) {
//           setHasAccess(true);
//         } else {
//           Swal.fire(
//             "Access Denied",
//             "You need to buy this course to access its content.",
//             "error"
//           );
//           router.push(`/course/${id}`);
//         }
//       } else {
//         Swal.fire("Error", "Please login to access the course content.", "error");
//         router.push("/login");
//       }
//     };

//     checkCourseAccess();
//   }, [dataUser, id, router]);

//   if (!hasAccess) {
//     return null; // Muestra una pantalla en blanco mientras se verifica el acceso
//   }


//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-bold mb-4">Course Content</h1>
//       <p>Welcome to the content of the course! You now have access.</p>

//       {/* Carga el contenido del curso */}
//       <h2>Course Content</h2>
//       {/* Aquí puedes cargar el contenido del curso, como videos, lecciones, etc. */}
//     </div>
//   );
// };

// export default CourseContent;
"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getMyCourses, getCourseById } from "@/services/CourseServices";
import { useAuth } from "@/contexts/authContext";
import Swal from "sweetalert2";
import { ICourse } from "@/interfaces/Course";

const CourseContent: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { dataUser } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [courseData, setCourseData] = useState<ICourse | null>(null);

  // Extrae el ID desde la ruta
  const id = pathname.split("/")[2]; // "/course/[id]/content" toma el segundo elemento después de dividir por "/"

  useEffect(() => {
    const checkCourseAccess = async () => {
      if (dataUser) {
        const purchasedCourses = await getMyCourses();
        const purchased = purchasedCourses.some(
          (purchasedCourse) => purchasedCourse.id === id
        );

        if (purchased) {
          setHasAccess(true);
          // Cargar los datos del curso si el usuario tiene acceso
          const course = await getCourseById(id);
          setCourseData(course);
        } else {
          Swal.fire(
            "Access Denied",
            "You need to buy this course to access its content.",
            "error"
          );
          router.push(`/course/${id}`);
        }
      }
      if (!dataUser) {
        Swal.fire("Error", "Please login to access the course content.", "error");
        router.push("/login");
      }
    };

    checkCourseAccess();
  }, [dataUser, id, router]);

  if (!hasAccess || !courseData) {
    return null; // Muestra una pantalla en blanco mientras se verifica el acceso o se carga el curso
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
      <img src={courseData.thumbnail} alt={courseData.title} className="mb-4 rounded-lg" />
      <p className="mb-6">{courseData.description}</p>

      <h2 className="text-xl font-semibold mb-2">Technologies Covered</h2>
      <ul className="list-disc ml-6 mb-6">
        {courseData.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mb-2">Price</h3>
      <p className="mb-6">${courseData.price}</p>

      {/* Aquí puedes cargar contenido adicional del curso, como videos o lecciones */}
    </div>
  );
};

export default CourseContent;
