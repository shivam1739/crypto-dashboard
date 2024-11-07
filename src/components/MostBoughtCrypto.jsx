import { mostBoughtCoin } from "../utils/mockData";
import SingleLineChart from "./charts/SingleLineChart";
import { COIN_ICON_MAP } from "../utils/common";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const MostBoughtCrypto = () => {
  const data = mostBoughtCoin;
  const icon = COIN_ICON_MAP[data.symbol];
  return (
    <div className="flex  justify-between flex-col w-full h-[9rem] border-2 rounded-3xl border-gray_lite p-2 dark:bg-white-dark">
      <div className="flex gap-1">
        <div>{icon}</div>
        <div className="flex flex-col">
          <span className="text-sm">{data.displayName}</span>
          <span className="text-[10px] text-muted dark:text-secondary-light">
            {data.symbol}
          </span>
        </div>
        {data.todaysChange > 0 ? (
          <BiCaretUp size={24} className="text-primary" />
        ) : (
          <BiCaretDown size={24} className="text-red-600" />
        )}
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <span className="font-semibold"> ${data.current_price}</span>
          <span
            className={`${
              data.todaysChange > 0 ? "text-primary" : "text-[red]"
            } font-bold text-sm`}
          >
            {data.todaysChange > 0 ? "+" : ""} {data.todaysChange}
          </span>
        </div>
        <div className="h-[4rem] w-[70%]">
          <SingleLineChart
            data={data.price_data}
            dataKey={"price"}
            currentChanges={data.todaysChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MostBoughtCrypto;
