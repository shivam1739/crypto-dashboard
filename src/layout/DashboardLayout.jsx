import PropTypes from "prop-types";
import DashboardHeader from "../components/DashboardHeader";
import RightInfoBar from "../components/RightInfoBar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-full">
      <div className="col-span-1">
        <DashboardHeader />
      </div>
      <div className="flex flex-wrap grid grid-cols-10  col-span-1">
        <div className="col-span-7 self-start p-4">{children}</div>
        <div className="col-span-3 self-start border-l-2 border-gray_lite">
          <RightInfoBar />
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
