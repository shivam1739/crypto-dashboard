import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import { sidebarItems } from "../utils/sideBarUtils";
import UserSection from "./UserSection";

const SideBar = () => {
  const location = useLocation();

  return (
    <nav className="sticky flex flex-col lg:justify-between left-0 w-[30%] max-w-[17rem] h-screen   border-gray_lite border-r-2 ">
      <div className="w-full text-2xl h-[6rem]  p-6 font-bold">
        <span>cupi</span>
        <span className="text-primary">vupi</span>
      </div>
      <div className="flex flex-col gap-4">
        {sidebarItems?.map((item, idx) => (
          <div
            key={`${idx}-${item.heading}`}
            className="p-2 flex flex-col gap-5"
          >
            <div className="font-semibold pl-4 ">{item.heading}</div>
            <ul className="list-none mt-2 flex flex-col gap-2 pl-2">
              {item.content.map((list, idx) => {
                const isActive = location.pathname === list.path;
                return (
                  <li key={`${idx}-${list.label}`} className="mb-1">
                    <Link
                      to={list.path} // Assumes each list item has a `path` for navigation
                      className={`${
                        isActive
                          ? "bg-white font-bold text-black"
                          : " hover:text-black hover:bg-gray-400  hover:font-bold text-muted"
                      }  flex items-center gap-3 rounded-3xl h-10 text-center block pl-3 transition-all duration-200 `}
                    >
                      {list.icon} {list.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      <UserSection />
    </nav>
  );
};

export default SideBar;
