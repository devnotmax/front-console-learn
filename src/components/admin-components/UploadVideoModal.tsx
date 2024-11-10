import { ICourse } from "@/interfaces/Course";
import { useAuth } from "@/contexts/authContext";
import { useEffect, useState } from "react";
import { getCourses } from "@/services/CourseServices";
import { uploadVideo } from "@/services/uploadVideo";
import { RootState } from "@/redux/store"; // Adjust path as necessary
import { setCourseId } from "@/redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert2";



interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UploadVideoModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
  const { dataUser } = useAuth();
  const dispatch = useDispatch();
  const selectedCourseId = useSelector((state: RootState) => state.user.selectedCourseId);
  
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [currentStep, setCurrentStep] = useState<"selectCourse" | "uploadVideo">("selectCourse");
  const [videoData, setVideoData] = useState({ title: "", description: "", file: null as File | null });

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

  const handleCourseSelect = (courseId: string) => {
    dispatch(setCourseId(courseId));
    setCurrentStep("uploadVideo");
  };

  const handleVideoUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourseId && videoData.file) {
      try {
        await uploadVideo(selectedCourseId, videoData.file, videoData.title, videoData.description);
        swal.fire("Success!", "The video has been uploaded.", "success");
        onClose();
      } catch (error) {
        swal.fire("Error!", `Failed to upload the video: ${error}`, "error");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900">
          <i className="bx bx-x text-3xl"></i>
        </button>

        {currentStep === "selectCourse" ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Select a Course</h2>
            <select onChange={(e) => handleCourseSelect(e.target.value)} className="w-full p-2 border rounded">
              <option value="">Select a course</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <button onClick={() => setCurrentStep("uploadVideo")} disabled={!selectedCourseId} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Next
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4 text-center">Upload Video</h2>
            <form onSubmit={handleVideoUpload}>
              <input type="text" placeholder="Title" className="w-full p-2 border rounded mb-4" onChange={(e) => setVideoData({ ...videoData, title: e.target.value })} required />
              <textarea placeholder="Description" className="w-full p-2 border rounded mb-4" onChange={(e) => setVideoData({ ...videoData, description: e.target.value })} required />
              <input type="file" onChange={(e) => setVideoData({ ...videoData, file: e.target.files ? e.target.files[0] : null })} required />
              <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Upload Video</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadVideoModal;
