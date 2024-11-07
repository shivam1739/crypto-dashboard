import { Suspense, lazy } from "react";
import DashboardLayout from "../layout/DashboardLayout";

// Lazy load the components
const KPIDashBoard = lazy(() => import("../components/KPIDashBoard"));
const RecentTransactions = lazy(() =>
  import("../components/RecentTransactions")
);

const Dashboard = () => {
  return (
    <div className="relative w-full  dark:bg-white-dark ">
      <DashboardLayout>
        <div className="flex flex-col gap-3">
          <div className="h-[25rem] lg:h-[22rem]">
            <Suspense fallback={<div>Loading KPI Dashboard...</div>}>
              <KPIDashBoard />
            </Suspense>
          </div>
          <div className="h-[18rem] overflow-y-scroll">
            <Suspense fallback={<div>Loading Recent Transactions...</div>}>
              <RecentTransactions />
            </Suspense>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
