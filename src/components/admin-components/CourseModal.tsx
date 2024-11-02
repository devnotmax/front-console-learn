// "use client";
// import React, { useState } from "react";
// import { createCourse } from "@/services/CourseServices";

// interface CourseModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const [courseTitle, setCourseTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [technologies, setTechnologies] = useState<string[]>([]);
//   const [inputValue, setInputValue] = useState('');
//   const [image, setImage] = useState<File | null>(null);
//   const [price, setPrice] = useState<number | ''>('');

//   const handleAddTechnology = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (inputValue && !technologies.includes(inputValue)) {
//       setTechnologies([...technologies, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTechnology = (techToDelete: string) => {
//     setTechnologies(technologies.filter((tech) => tech !== techToDelete));
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Crear un FormData para enviar el archivo de imagen y otros datos
//     const formData = new FormData();
//     formData.append("title", courseTitle);
//     formData.append("description", description);
//     formData.append("price", String(price));
//     if (image) {
//       formData.append("image", image);
//     }

//     // Pasar `technologies` como un parámetro adicional al crear el curso
//     try {
//       await createCourse(formData, technologies);
//       console.log("Curso creado exitosamente", FormData);
//     //   onClose();
//     } catch (error) {
//       console.error("Error al crear el curso:", error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-700"
//         >
//           <i className="bx bx-x text-2xl"></i>
//         </button>
//         <h2 className="text-lg font-bold mb-4">Add New Course</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Course Title
//             </label>
//             <input
//               type="text"
//               value={courseTitle}
//               onChange={(e) => setCourseTitle(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter course title"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Description
//             </label>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter course description"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Technologies
//             </label>
//             <div className="flex flex-wrap items-center mt-1">
//               {technologies.map((tech) => (
//                 <span
//                   key={tech}
//                   className="flex items-center bg-gray-200 text-gray-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
//                 >
//                   {tech}
//                   <button
//                     type="button"
//                     onClick={() => handleDeleteTechnology(tech)}
//                     className="ml-1 text-red-500"
//                   >
//                     &times;
//                   </button>
//                 </span>
//               ))}
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 className="block w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Add a technology"
//               />
//               <button
//                 type="button"
//                 onClick={handleAddTechnology}
//                 className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
//               >
//                 Add Technology
//               </button>
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Course Image
//             </label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               accept="image/*"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Price
//             </label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(Number(e.target.value))}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//               placeholder="Enter course price"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CourseModal;
"use client";
import React, { useState } from "react";
import { createCourse } from "@/services/CourseServices";

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose }) => {
  // Mueve los hooks de estado aquí
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState<number | "">("");

  // Asegúrate de que el retorno condicional venga después de los hooks
  if (!isOpen) return null;

  const handleAddTechnology = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue && !technologies.includes(inputValue)) {
      setTechnologies([...technologies, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTechnology = (techToDelete: string) => {
    setTechnologies(technologies.filter((tech) => tech !== techToDelete));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Crear un FormData para enviar el archivo de imagen y otros datos
    const formData = new FormData();
    formData.append("title", courseTitle);
    formData.append("description", description);
    formData.append("price", String(price));
    if (image) {
      formData.append("image", image);
    }

    try {
      await createCourse(formData, technologies);
      console.log("Curso creado exitosamente");
      //   onClose();
    } catch (error) {
      console.error("Error al crear el curso:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700"
        >
          <i className="bx bx-x text-2xl"></i>
        </button>
        <h2 className="text-lg font-bold mb-4">Add New Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {" "}
            <label className="block text-sm font-medium text-gray-700">
              Course Title
            </label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Technologies
            </label>
            <div className="flex flex-wrap items-center mt-1">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center bg-gray-200 text-gray-700 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
                >
                  {tech}
                  <button
                    type="button"
                    onClick={() => handleDeleteTechnology(tech)}
                    className="ml-1 text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Add a technology"
              />
              <button
                type="button"
                onClick={handleAddTechnology}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Add Technology
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Course Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course price"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
