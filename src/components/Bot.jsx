import { BiNetworkChart } from "react-icons/bi";

const Bot = () => {
  return (
    <div className="border-2 h-12 w-12 flex items-center justify-center border-gray_lite rounded-full relative hover:text-black hover:bg- hover:bg-primary transition-all duration-300 ease-in-out dark:hover:bg-black dark:hover:text-white">
      <BiNetworkChart size={24} />
    </div>
  );
};

export default Bot;
