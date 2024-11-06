import { useState } from "react";
import { KPI_DATA } from "../utils/mockData";
import NavigationBar from "./NavigationBar";
import KPIChart from "./charts/KPIChart";

const KPIDashBoard = () => {
  const [KPIdata] = useState(KPI_DATA);

  return (
    <div className="w-full h-full rounded-3xl border-2 p-5  border-gray_lite">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-muted text-sm font-semibold">Total Balance</h6>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold">
              {KPIdata.totalBalance.amount}
            </span>
            <span className=" bg-primary px-2 text-sm text-white rounded-full">
              {KPIdata.totalBalance.currency}
            </span>
          </div>
          <span className="text-xs text-muted font-semibold">
            {KPIdata.totalBalance.usdValue}
          </span>
        </div>
        <div>
          <NavigationBar />
        </div>
      </div>
      <div className="w-full h-[16rem]">
        <KPIChart
          data={KPIdata?.chartData}
          XAxisDataKey={"date"}
          line1DataKey={"btcValue"}
          line2DataKey={"usdValue"}
        />
      </div>
    </div>
  );
};

export default KPIDashBoard;
