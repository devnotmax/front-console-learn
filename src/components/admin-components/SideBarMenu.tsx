// import { useState } from "react";
// import ProfileInfo from "./ProfileInfo";
// import CourseModal from "./CourseModal";
// import DeleteCoursesModal from "./DeleteCoursesModal";
// import CountCourses from "./CountCourses";
// import EditCoursesModal from "./EditCoursesModal";

// type ModalName = "addCourse" | "editCourse" | "deleteCourse" | "publishVideo";

// const SideBarMenu = () => {
//   const [openModal, setOpenModal] = useState<ModalName | null>(null);

//   const handleOpenModal = (modalName: ModalName) => {
//     setOpenModal(modalName);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(null);
//   };

//   return (
//     <div className="border-r-[3px] border-black border-opacity-15 h-full bg-white shadow-lg">
//       {/* Profile Information */}
//       <ProfileInfo />

//       {/* Menu Options */}
//       <ul className="mt-4 flex flex-col items-center gap-4">
//         <li className="w-full px-6">
//           <button
//             onClick={() => handleOpenModal("addCourse")}
//             className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white"
//           >
//             <i className="bx bx-book-add text-xl"></i>
//             <span>Add Courses</span>
//           </button>
//         </li>
//         <li className="w-full px-6">
//           <button
//             onClick={() => handleOpenModal("deleteCourse")}
//             className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white"
//           >
//             <i className="bx bxs-message-square-x text-xl"></i>
//             <span>Delete Courses</span>
//           </button>
//         </li>
//         <li className="w-full px-6">
//           <button
//             onClick={() => handleOpenModal("editCourse")}
//             className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white"
//           >
//             <i className="bx bx-edit text-xl"></i>
//             <span>Edit Courses</span>
//           </button>
//         </li>
//         <li className="w-full px-6">
//           <button
//             onClick={() => handleOpenModal("publishVideo")}
//             className="flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white"
//           >
//             <i className="bx bx-video-plus text-xl"></i>
//             <span>Publish Videos</span>
//           </button>
//         </li>
//       </ul>

//       {/* Modals */}
//       {openModal === "addCourse" && (
//         <CourseModal isOpen={true} onClose={handleCloseModal} />
//       )}
//       {openModal === "deleteCourse" && (
//         <DeleteCoursesModal isOpen={true} onClose={handleCloseModal} />
//       )}
//       {openModal === "editCourse" && (
//         <EditCoursesModal isOpen={true} onClose={handleCloseModal} />
//       )}

//       <CountCourses />
//     </div>
//   );
// };

// export default SideBarMenu;
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import CourseModal from "./CourseModal";
import DeleteCoursesModal from "./DeleteCoursesModal";
import CountCourses from "./CountCourses";
import EditCoursesModal from "./EditCoursesModal";

type ModalName = "addCourse" | "editCourse" | "deleteCourse" | "publishVideo";

const SideBarMenu = () => {
  const [openModal, setOpenModal] = useState<ModalName | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Estado para alternar el menú

  const handleOpenModal = (modalName: ModalName) => {
    setOpenModal(modalName);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`h-full bg-white shadow-lg border-r-[3px] border-black border-opacity-15 
                     ${isMenuOpen ? "w-64" : "w-16"} 
                     transition-all duration-300 ease-in-out md:w-64`}
    >
      {/* Botón para alternar el menú en pantallas pequeñas */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 md:hidden p-2 bg-gray-200 rounded-full focus:outline-none"
      >
        <i
          className={`bx ${
            isMenuOpen ? "bx-chevron-left" : "bx-chevron-right"
          } text-2xl`}
        ></i>
      </button>

      {/* Profile Information */}
      {isMenuOpen && <ProfileInfo />}

      {/* Menu Options */}
      <ul className="mt-4 flex flex-col items-center gap-4">
        <li className="w-full px-6">
          <button
            onClick={() => handleOpenModal("addCourse")}
            className={`flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all 
                        bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white 
                        ${!isMenuOpen && "justify-center"}`}
          >
            <i className="bx bx-book-add text-xl"></i>
            {isMenuOpen && <span>Add Courses</span>}
          </button>
        </li>
        <li className="w-full px-6">
          <button
            onClick={() => handleOpenModal("deleteCourse")}
            className={`flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all 
                        bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white 
                        ${!isMenuOpen && "justify-center"}`}
          >
            <i className="bx bxs-message-square-x text-xl"></i>
            {isMenuOpen && <span>Delete Courses</span>}
          </button>
        </li>
        <li className="w-full px-6">
          <button
            onClick={() => handleOpenModal("editCourse")}
            className={`flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all 
                        bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white 
                        ${!isMenuOpen && "justify-center"}`}
          >
            <i className="bx bx-edit text-xl"></i>
            {isMenuOpen && <span>Edit Courses</span>}
          </button>
        </li>
        <li className="w-full px-6">
          <button
            onClick={() => handleOpenModal("publishVideo")}
            className={`flex items-center justify-center w-full gap-2 py-2 text-lg font-medium text-gray-700 transition-all 
                        bg-slate-100 rounded-lg shadow-md hover:bg-[var(--accent-color)] hover:text-white 
                        ${!isMenuOpen && "justify-center"}`}
          >
            <i className="bx bx-video-plus text-xl"></i>
            {isMenuOpen && <span>Publish Videos</span>}
          </button>
        </li>
      </ul>

      {/* Modals */}
      {openModal === "addCourse" && (
        <CourseModal isOpen={true} onClose={handleCloseModal} />
      )}
      {openModal === "deleteCourse" && (
        <DeleteCoursesModal isOpen={true} onClose={handleCloseModal} />
      )}
      {openModal === "editCourse" && (
        <EditCoursesModal isOpen={true} onClose={handleCloseModal} />
      )}

      {isMenuOpen && <CountCourses />}
    </div>
  );
};

export default SideBarMenu;
