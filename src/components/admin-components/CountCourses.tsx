import { useEffect, useState } from "react";
import { getCourses } from "@/services/CourseServices";
import { ICourse } from "@/interfaces/Course";

const CountCourses = () => {
  const [activeCourses, setActiveCourses] = useState(0);
  const [inactiveCourses, setInactiveCourses] = useState(0);

  useEffect(() => {
    const fetchAndCountCourses = async () => {
      try {
        const courses: ICourse[] = await getCourses();
        const activeCount = courses.filter((course) => course.isAvailable).length;
        const inactiveCount = courses.length - activeCount;
        
        setActiveCourses(activeCount);
        setInactiveCourses(inactiveCount);
      } catch (error) {
        console.error("Error fetching and counting courses:", error);
      }
    };

    fetchAndCountCourses();
  }, []);

  return (
    <div className="p-4 mt-4">
      <div className="p-2 w-full border border-black border-opacity-15 rounded-xl max-w-96">
        <ul className="flex flex-col gap-2">
          <li className="text-md bg-green-200 p-2 rounded-lg text-green-700 flex items-center justify-between">
            <div className="flex items-center">
              <i className="bx bx-info-circle mr-2"></i> Active Courses
            </div>
            <span className="text-sm font-semibold text-black">{activeCourses}</span>
          </li>
          <li className="text-md bg-red-200 p-2 rounded-lg text-red-700 flex items-center justify-between">
            <div className="flex items-center">
              <i className="bx bx-info-circle mr-2"></i> Inactive Courses
            </div>
            <span className="text-sm font-semibold text-black">{inactiveCourses}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountCourses;
