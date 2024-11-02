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
import { getMyCourses } from "@/services/CourseServices";

// Datos del curso mock
const mockCourseData: ICourse = {
  id: "7f5356e7-29ac-4c19-aaba-2a0dd01e3716",
  title: "Tailwind CSS Course",
  description:
    "Learn how to build modern and responsive web designs using Tailwind CSS.",
  thumbnail:
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  technologies: ["Tailwind", "Front-end"],
  price: 99.99,
  rating: 5,
  isAvailable: true,
  available: true,
  videos: [
    {
      id: "6b22abb9-58d3-4d76-8105-9374c2347204",
      title: "Introduction to Tailwind CSS",
      description:
        "Get started with Tailwind CSS for building modern web designs.",
      url: "https://www.youtube.com/embed/MPD8wiNVPDU",
      courseId: "7f5356e7-29ac-4c19-aaba-2a0dd01e3716",
      duration: "34:20",
    },
    {
      id: "2b22abb9-58d3-4d76-8105-9374c2347205",
      title: "Intermediate Tailwind CSS",
      description: "Learn more advanced Tailwind CSS techniques.",
      url: "https://www.youtube.com/embed/pvxp0CQbUhE?si=IPhSG1YI66lqbBB3",
      courseId: "7f5356e7-29ac-4c19-aaba-2a0dd01e3716",
      duration: "23:16",
    },
    {
      id: "2b22abb9-58d3-4d76-8105-9374c2674465",
      title: "Tailwind configuration",
      description: "Learn more advanced Tailwind CSS techniques.",
      url: "https://www.youtube.com/embed/Tx0dqvcN_9A?si=F4ozPEtXLaSVWWCT",
      courseId: "7f5356e7-29ac-4c19-aaba-2a0dd01e3716",
      duration: "45:42",
    },
    // Otros videos...
  ],
  reviews: [],
  orderDetails: [],
  users: [],
};

const CourseContent: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { dataUser, isLoading } = useAuth();
  const [hasAccess, setHasAccess] = useState(false);
  const [courseData] = useState<ICourse | null>(mockCourseData); // Quita 'setCourseData'
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(
    courseData?.videos[0] || null
  ); // Video actual

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
