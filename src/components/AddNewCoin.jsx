import { BiSolidPlusCircle } from "react-icons/bi";

const AddNewCoin = () => {
  return (
    <div className="border-2 h-12 w-40 gap-2 flex items-center justify-center border-gray_lite rounded-full relative hover:text-black hover:bg- hover:bg-primary transition-all duration-300 ease-in-out">
      Add new coin <BiSolidPlusCircle size={20} />
    </div>
  );
};

export default AddNewCoin;
