import { useState, useEffect } from "react";
import { getCourseById, editCourse } from "@/services/CourseServices";
import { ICourse } from "@/interfaces/Course";
import Swal from "sweetalert2";

interface EditCourseFormProps {
  courseId: string;
  onClose: () => void;
}

const EditCourseForm = ({ courseId, onClose }: EditCourseFormProps) => {
  const [courseData, setCourseData] = useState<ICourse | null>(null);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    price: "",
    isAvailable: true,
  });
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      const data = await getCourseById(courseId);
      if (data) {
        setCourseData(data);
        setFormValues({
          title: data.title || "",
          description: data.description || "",
          price: data.price ? data.price.toString() : "",
          isAvailable: data.isAvailable || true,
        });
      }
    };
    fetchCourseData();
  }, [courseId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleToggleAvailable = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      isAvailable: !prevValues.isAvailable,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formValues.title);
    formData.append("description", formValues.description);
    formData.append("price", formValues.price);
    formData.append("isAvailable", formValues.isAvailable ? "true" : "false");

    if (thumbnail) {
      formData.append("image", thumbnail); // Agregar con el prefijo 'image:'
    }

    try {
      await editCourse(courseId, formData);
      Swal.fire("Success!", "The course has been updated.", "success");
      onClose();
    } catch (error) {
      Swal.fire("Error!", "Failed to update the course.", "error");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold">Edit Course</h2>
        <input
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="description"
          value={formValues.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          name="price"
          type="number"
          value={formValues.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="file"
          onChange={handleThumbnailChange}
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div>
          <label className="flex items-center gap-2">
            <span>Available</span>
            <div
              className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                formValues.isAvailable ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={handleToggleAvailable}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                  formValues.isAvailable ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
          <p className="text-sm mt-1 text-gray-600">
            {formValues.isAvailable
              ? "The course will be available to users."
              : "The course will be hidden and unavailable to users."}
          </p>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};


const CardEditCourse = ({ course }: { course: ICourse }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to edit the course information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsEditModalOpen(true);
      }
    });
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="text-lg font-medium text-gray-800">{course.title}</h3>
        <h4 className="text-sm text-gray-500">{course.technologies}</h4>
      </div>
      <button
        onClick={handleEditCourse}
        className="text-black bg-slate-100 flex justify-center items-center font-semibold py-1 px-3 rounded-md transition-colors duration-200 gap-2 hover:bg-[var(--accent-color)] hover:text-white"
      >
        Edit course
        <i className="bx bxs-edit-alt text-xl"></i>
      </button>

      {isEditModalOpen && (
        <EditCourseForm
          courseId={course.id}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CardEditCourse;
