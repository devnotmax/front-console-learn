import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import CourseModal from "./CourseModal"; // Asegúrate de importar el modal

const SideBarMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border-r-[3px] border-black border-opacity-15 h-full bg-white shadow-lg">
      {/* Profile Information */}
      <ProfileInfo />

      {/* Menu Options */}
      <ul className="mt-4 flex flex-col items-center gap-4">
        <li className="w-full px-6">
          <button
            onClick={handleOpenModal} // Abre el modal en lugar de redirigir
            className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white"
          >
            <i className="bx bx-book-add text-xl"></i>
            <span>Add Courses</span>
          </button>
        </li>
        <li className="w-full px-6">
          <button className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white">
            <i className="bx bxs-message-square-x text-xl"></i>
            <span>Delete Courses</span>
          </button>
        </li>
        <li className="w-full px-6">
          <button className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white">
            <i className="bx bx-video-plus text-xl"></i>
            <span>Publish Videos</span>
          </button>
        </li>
      </ul>

      {/* Modal for Adding Courses */}
      <CourseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SideBarMenu;
