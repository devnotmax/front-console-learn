import { deleteCourse } from "@/services/CourseServices";
import { ICourse } from "@/interfaces/Course";
import React from "react";
import Swal from "sweetalert2";

const CardDeleteCourse = ({ course }: { course: ICourse }) => {
  const handleDeleteCourse = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You can re-enable this course from the editing panel",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCourse(course.id);
          Swal.fire({
            title: "Disabled!",
            text: "The course has been disabled.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error disabling the course:", error);
          Swal.fire({
            title: "Error",
            text: "There was an issue disabling the course.",
            icon: "error"
          });
        }
      }
    });
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-medium text-gray-800">{course.title}</h3>
      {course.isAvailable ? (
        <button
          onClick={handleDeleteCourse}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-md transition-colors duration-200"
        >
          Delete
        </button>
      ) : (
        <span className="text-white font-medium bg-yellow-600 py-1 px-3 rounded-md">Course inactive</span>
      )}
    </div>
  );
};

export default CardDeleteCourse;
