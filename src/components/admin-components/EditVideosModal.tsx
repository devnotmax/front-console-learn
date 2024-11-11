import { useState, useEffect } from "react";
import { editVideo } from "@/services/editVideo";
import swal from "sweetalert2";

interface Video {
  id: string;
  title: string;
  description: string;
}

interface EditVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video;
}

const EditVideoModal: React.FC<EditVideoModalProps> = ({
  isOpen,
  onClose,
  video,
}) => {
  const [title, setTitle] = useState<string>(video.title || "");
  const [description, setDescription] = useState<string>(video.description || "");
  const [file, setFile] = useState<File | null>(null);

  // Actualiza el título y descripción cuando el video cambia
  useEffect(() => {
    setTitle(video.title || "");
    setDescription(video.description || "");
  }, [video]);

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      await editVideo(video.id, { title, description, file });
      swal.fire("Success!", "The video has been updated.", "success");
      onClose();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      swal.fire("Error!", `Failed to update the video: ${errorMessage}`, "error");
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

        <h2 className="text-2xl font-semibold mb-4 text-center">Edit Video</h2>
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="w-full p-2 border rounded mb-4"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditVideoModal;
