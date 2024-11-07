import { useEffect, useState } from "react";
import CustomBarChart from "./charts/BarChart";
import { roiData } from "../utils/mockData";

const ROIBoard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (roiData) {
      setData(roiData);
    }
  }, [roiData]);

  return (
    <div className="h-[16rem] w-full rounded-3xl border-2 border-gray_lite p-3 dark:bg-white-dark dark:text-black">
      <div className="flex h-[30%] justify-between">
        <div>
          <div className="text-highlight font-bold dark:text-black ">
            {" "}
            ${data.totalValue}
          </div>
          <div className="text-muted text-xs dark:text-secondary-light">
            {data.subtitle}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-muted text-sm dark:text-black">
            Return on Investment
          </div>
          <div className="rounded-3xl px-1 w-[fit-content] text-nowrap text-xs text-center bg-primary text-highlight dark:text-secondary-light ">
            Last 6m
          </div>
        </div>
      </div>
      <div className="h-[70%]">
        <CustomBarChart data={data?.data || []} />
      </div>
    </div>
  );
};

export default ROIBoard;
