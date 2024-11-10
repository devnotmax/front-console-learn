"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/authContext";
import Swal from "sweetalert2";
import { ICourse, IVideo } from "@/interfaces/Course";

//componentes
import VideoPlayer from "@/components/ContentCourse/VideoPlayer";
import Playlist from "@/components/ContentCourse/Playlist";
import TakeNotes from "@/components/ContentCourse/TakeNotes";

//servicios
import { getMyCourses, getCourseById } from "@/services/CourseServices";

const CourseContent: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { dataUser, isLoading } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [courseData, setCourseData] = useState<ICourse | null>(null);
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);

  const id = pathname.split("/")[2];

  useEffect(() => {
    if (isLoading) return;

    const checkCourseAccess = async () => {
      if (dataUser) {
        const purchasedCourses = await getMyCourses();
        const purchased = purchasedCourses.some(
          (purchasedCourse) => purchasedCourse.id === id
        );
        if (purchased) {
          setHasAccess(true);

          // Llama a fetchCourseData para cargar los datos del curso después de verificar el acceso
          const course = await fetchCourseData();
          if (course) {
            setCourseData(course);
            setCurrentVideo(course.videos[0] || null); // Establece el primer video
          }
        } else {
          Swal.fire({
            title: "Oops! It seems you don't have access to this course",
            text: "You need to purchase this course to access it.",
            icon: "error",
            confirmButtonText: "Go to courses",
          }).then(() => {
            router.push("/course");
          });
        }
      } else {
        Swal.fire({
          title: "Oops! You need to be logged in to access this course",
          text: "Please log in to access this course.",
          icon: "warning",
          confirmButtonText: "Login",
        }).then(() => {
          router.push("/login");
        });
      }
    };

    checkCourseAccess();
  }, [dataUser, isLoading, id, router]);

  // Función para obtener los datos del curso
  const fetchCourseData = async () => {
    try {
      const response = await getCourseById(id);
      return response;
    } catch (error) {
      console.error("Error al obtener los datos del curso:", error);
      return null;
    }
  };

  if (!hasAccess || !courseData) {
    return null;
  }

  return (
    <div className="mx-auto bg-[var(--foreground)] min-h-screen w-full">
      <div className="grid grid-cols-10 grid-rows-10 gap-0 w-full h-full">
        <div className="col-span-7 row-span-4 h-full">
          <VideoPlayer url={currentVideo?.url} />
        </div>
        <div className="col-span-3 row-span-10 col-start-8 h-full">
          <Playlist
            title={courseData.title}
            videos={courseData.videos}
            onVideoSelect={setCurrentVideo}
            currentVideoId={currentVideo?.id}
          />
        </div>
        <div className="col-span-7 row-span-6 row-start-5 h-full">
          <TakeNotes />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
