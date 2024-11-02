import React, { useEffect, useState } from "react";
import { getMyCourses } from "@/services/CourseServices";
import { useAuth } from "@/contexts/authContext";
import { ICourse } from "@/interfaces/Course";
import Link from "next/link";

const ProfileCourses = () => {
  const { dataUser } = useAuth();
  const [courses, setCourses] = useState<ICourse[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (dataUser) {
        try {
          const userCourses = await getMyCourses();
          setCourses(userCourses);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };
    fetchCourses();
  }, [dataUser]);

  return (
    <div className="bg-[var(--card-color)] p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4 text-[var(--principal-text)]">
        My Courses
      </h3>
      <ul>
        <table className="w-full text-left">
          <thead className="bg-[var(--foreground)]">
            <tr>
              <th className="p-2 text-[var(--secondary-text)]">Id</th>
              <th className="p-2 text-[var(--secondary-text)]">Title</th>
              <th className="p-2 text-[var(--secondary-text)]">Technologies</th>
              <th className="p-2 text-[var(--secondary-text)]">Course details</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="bg-[#39425fab] rounded-lg">
                <td className="p-2 text-[var(--principal-text))]">{course.id}</td>
                <td className="p-2 text-[var(--principal-text)]">{course.title}</td>
                <td className="p-2">
                  {course.technologies.map((tech) => (
                    <div key={tech} className="gap-2 flex">
                      <span className="text-[var(--card-color)] bg-[var(--primary)] m-1 text-sm mr-2 px-2 py-1 rounded">
                        {tech}
                      </span>
                    </div>
                  ))}
                </td>
                <td className="p-2">
                  <Link href={`/course/${course.id}`}>
                    <button className="w-24 h-8 px-4 py-1 text-sm rounded-lg bg-[var(--accent-color)] hover:bg-[var(--card-color)] text-[var(--principal-text)]">
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default ProfileCourses;
