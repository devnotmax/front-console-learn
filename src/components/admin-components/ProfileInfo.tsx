import { useAuth } from "@/contexts/authContext";

export const ProfileInfo = () => {
  const { dataUser } = useAuth();
  
  return (
    <div className="flex justify-center items-center p-4 gap-3 rounded-lg shadow-sm md:p-6 md:gap-4">
      {/* Avatar */}
      <img
        src={dataUser?.user.image}
        alt={dataUser?.user.name}
        className="w-10 h-10 rounded-full object-cover border border-gray-200 md:w-16 md:h-16"
      />
      
      {/* User Info */}
      <div className="flex flex-col text-gray-800">
        <h1 className="text-sm font-semibold md:text-lg">{dataUser?.user.name}</h1>
        <p className="text-xs text-gray-500 md:text-sm">{dataUser?.user.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
