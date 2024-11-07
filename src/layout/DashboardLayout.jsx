import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import DashboardHeader from "../components/DashboardHeader";

const RightInfoBar = lazy(() => import("../components/RightInfoBar"));

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-full dark:bg-white-lite">
      <div className="col-span-1 dark:bg-white-lite">
        <DashboardHeader />
      </div>
      <div className="grid gap-0 grid-cols-1 lg:grid-cols-10 col-span-1 h-full overflow-y-auto">
        <div className="col-span-1 lg:col-span-7 self-start p-4 pt-0 dark:bg-white-lite">
          {children}
        </div>
        <div className="col-span-1 lg:col-span-3 self-start lg:border-l-2 border-gray_lite">
          <Suspense fallback={<div>Loading...</div>}>
            <RightInfoBar />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
