import { useEffect, useState } from "react";
import {
  BiLogInCircle,
  BiLogOutCircle,
  BiSolidUserCircle,
} from "react-icons/bi";

const UserSection = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser({
      userProfile:
        "https://lh3.googleusercontent.com/ogw/AF2bZyjFjstR8jwUi-qwEsBqBXK36TuPlAm_KYy8-jQ-vzsfQXY=s32-c-mo",
      name: "Shivam Patel",
      email: "patelshivam1739@gmail.com",
    });
  }, []);

  return (
    <div className="h-16 flex items-center mx-4 border-t-2  gap-2 border-gray_lite">
      {user ? (
        <>
          <img
            src={user.userProfile}
            alt="user img"
            className="w-9 h-9 rounded-full"
          />
          <div className="hidden lg:flex flex-col">
            <span className="font-semibold">{user.name}</span>
            <span className="text-xs text-muted dark:text-secondary-light">
              {user.email}
            </span>
          </div>
          <BiLogOutCircle
            size={24}
            className="hover:text-black hover:bg-white rounded-full"
          />
        </>
      ) : (
        <>
          <BiSolidUserCircle size={30} /> <span>Login</span>
          <BiLogInCircle size={24} />
        </>
      )}
    </div>
  );
};

export default UserSection;
