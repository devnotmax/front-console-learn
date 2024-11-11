import { useEffect, useState } from "react";
import { getCourses } from "@/services/CourseServices";
import { getVideos } from "@/services/getVideos";
import { useDispatch, useSelector } from "react-redux";
import { setCourseId } from "@/redux/features/userSlice";
import { RootState } from "@/redux/store";
import EditVideosModal from "./EditVideosModal";
import { ICourse } from "@/interfaces/Course";
import { deleteVideo } from "@/services/deleteVideo";
import Swal from "sweetalert2";

interface VideoManagementModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Video {
    id: string;
    title: string;
    description: string;
    file?: File;
}

const VideoManagementModal: React.FC<VideoManagementModalProps> = ({
    isOpen,
    onClose,
}) => {
    const dispatch = useDispatch();
    const selectedCourseId = useSelector(
        (state: RootState) => state.user.selectedCourseId
    );

    const [courses, setCourses] = useState<ICourse[]>([]);
    const [videos, setVideos] = useState<Video[]>([]);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    const fetchCourses = async () => {
        try {
            const userCourses = await getCourses();
            setCourses(userCourses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const fetchVideos = async (courseId: string) => {
        try {
            const courseVideos = await getVideos(courseId);
            setVideos(courseVideos);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    const handleCourseSelect = (courseId: string) => {
        dispatch(setCourseId(courseId));
        fetchVideos(courseId);
    };

    const openEditModal = (video: Video) => {
        setSelectedVideo(video);
        setEditModalOpen(true);
    };

    const handleDeleteVideo = async (videoId: string) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                await deleteVideo(videoId);
                // Remove the deleted video from the list
                setVideos((prevVideos) => prevVideos.filter((video) => video.id !== videoId));
                Swal.fire("Deleted!", "The video has been deleted.", "success");
            } catch (error) {
                console.error("Error deleting video:", error);
                Swal.fire("Error", "There was a problem deleting the video.", "error");
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                >
                    <i className="bx bx-x text-3xl"></i>
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Select a Course
                </h2>
                <select
                    value={selectedCourseId || ""}
                    onChange={(e) => handleCourseSelect(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.title}
                        </option>
                    ))}
                </select>


                <h3 className="text-xl font-semibold mb-4">Course Videos</h3>
                {videos.length === 0 ? (
                    <p className="text-center text-gray-500">No videos found for this course.</p>
                ) : (
                    <ul className="space-y-4">
                        {videos.map((video) => (
                            <li key={video.id} className="flex items-center justify-between">
                                <span>{video.title}</span>
                                <div>
                                    <button
                                        onClick={() => openEditModal(video)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteVideo(video.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {isEditModalOpen && selectedVideo && (
                    <EditVideosModal
                        isOpen={isEditModalOpen}
                        onClose={() => setEditModalOpen(false)}
                        video={selectedVideo}
                    />
                )}
            </div>
        </div>
    );
};

export default VideoManagementModal;
