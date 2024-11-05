import {useAuth} from "@/contexts/authContext";

export const ProfileInfo = () => {
  const {dataUser} = useAuth();
  return (
    <div className="flex items-center p-6 gap-4">
      <img
        src={dataUser?.user.image}
        alt={dataUser?.user.name}
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h1 className="text-xl font-bold">{dataUser?.user.name}</h1>
        <p className="text-sm">{dataUser?.user.email}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
