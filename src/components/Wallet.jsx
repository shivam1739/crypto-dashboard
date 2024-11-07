import { useState } from "react";
import { BiWallet } from "react-icons/bi";

const Wallet = () => {
  const [notifications] = useState(1);

  return (
    <div className="border-2 h-12 w-12 flex items-center justify-center border-gray_lite rounded-full relative hover:text-black hover:bg- hover:bg-primary transition-all duration-300 ease-in-out dark:hover:bg-black dark:hover:text-white">
      <BiWallet size={24} />
      {notifications > 0 && (
        <div className="border-4 border-primary h-2 w-2 absolute right-1 top-2 rounded-full"></div>
      )}
    </div>
  );
};

export default Wallet;
