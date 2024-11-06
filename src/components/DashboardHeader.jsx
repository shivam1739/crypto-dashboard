import { BiChevronLeft } from "react-icons/bi";
import InputField from "./InputField";
import Wallet from "./Wallet";
import Bot from "./Bot";
import AddNewCoin from "./AddNewCoin";

const DashboardHeader = () => {
  return (
    <header className="w-full h-20 border-b-2 border-gray_lite flex items-center px-6">
      <div className="flex gap-3 items-center w-[50%]">
        <BiChevronLeft size={24} className="text-gray-600" />
        <span className="font-medium text-lg">Dashboard</span>
        <InputField />
      </div>
      <div className="w-[50%] flex items-center h-12 gap-3 justify-end">
        <Wallet />
        <Bot />
        <AddNewCoin />
      </div>
    </header>
  );
};

export default DashboardHeader;
