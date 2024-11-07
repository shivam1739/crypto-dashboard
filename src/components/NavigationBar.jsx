import { useState } from "react";
import { NavigationBarList } from "../utils/mockData";
import Button from "./Button";

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const handleChangeTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className=" border-2 rounded-full border-gray_lite text-white flex items-center justify-between p-1  gap-3 transition-all duration-300 dark:bg-secondary-light">
      {NavigationBarList.map((tab, idx) => (
        <Button
          onClick={() => handleChangeTab(tab)}
          key={`${tab}-${idx}`}
          label={tab}
          className={`rounded-full ${
            activeTab === tab
              ? "bg-primary"
              : "hover:bg-gray_lite hover:text-gray-500"
          } text-white px-3 transition-all duration-500 cursor-pointer  `}
        />
      ))}
    </div>
  );
}

export default NavigationBar;
