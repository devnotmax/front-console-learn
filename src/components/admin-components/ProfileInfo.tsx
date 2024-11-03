export const ProfileInfo = () => {
  return (
    <div className="flex items-center p-6 gap-4">
      <img
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        className="w-20 h-20 rounded-full"
      />
      <div>
        <h1 className="text-xl font-bold">Admin User</h1>
        <p className="text-sm">adminuser@gmail.com</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
