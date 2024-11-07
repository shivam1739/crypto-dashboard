import { BiPlusCircle } from "react-icons/bi";
import { portfolio } from "../utils/mockData";
import { COIN_ICON_MAP } from "../utils/common";

const Portfolio = () => {
  return (
    <div className="h-[14.25rem] rounded-3xl border-2 w-full border-gray_lite p-3 overflow-y-auto dark:bg-white-dark">
      <div className="flex justify-between sticky -top-3 bg-secondary dark:bg-white-dark">
        <div className="text-highlight font-semibold dark:bg-white-dark dark:text-black w-full ">
          Your Portfolio
        </div>
        <div>
          <BiPlusCircle
            size={24}
            className="text-white rounded-full hover:bg-primary hover:text-black dark:bg-black"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2  ">
        {portfolio.map((asset, idx) => (
          <div
            key={`${asset.currency}-${idx}`}
            className="flex items-center gap-2 justify-between"
          >
            <div className="flex gap-2 items-center ">
              <div>{COIN_ICON_MAP[asset.symbol] || COIN_ICON_MAP["COIN"]}</div>
              <div>
                <div className="text-sm">{asset.currency}</div>
                <div className="text-xs text-muted dark:text-secondary-light">
                  {asset.transactionType}
                </div>
              </div>
            </div>
            <div className="text-end">
              <div
                className={`text-sm ${
                  +asset.currentChange > 0 ? "text-primary" : "text-red-600"
                }`}
              >
                {asset.currentChange} {asset.symbol}
              </div>
              <div className="text-xs">{asset.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
