import DashboardLayout from "../layout/DashboardLayout";
import KPIDashBoard from "../components/KPIDashBoard";
import RecentTransactions from "../components/RecentTransactions";

const Dashboard = () => {
  return (
    <div className="relative w-full">
      <DashboardLayout>
        <div className="flex flex-col gap-3 ">
          <div className="h-[25rem] lg:h-[22rem]">
            <KPIDashBoard />
          </div>
          <div className="h-[18rem] overflow-y-scroll">
            <RecentTransactions />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
