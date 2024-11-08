import { useEffect, useState } from "react";
import { RecentTransactionsData } from "../utils/mockData";
import { COIN_ICON_MAP } from "../utils/common";
import SingleLineChart from "./charts/SingleLineChart";
import Button from "./Button";

const RecentTransactions = () => {
  const [recentTransactions, setRecentTransactions] = useState([]);
  useEffect(() => {
    if (RecentTransactionsData) {
      setRecentTransactions(RecentTransactionsData);
    }
  }, [RecentTransactionsData]);

  return (
    <div className="flex flex-col dark:bg-white-dark ">
      <h6 className="font-semibold z-10 sticky top-0 w-full bg-secondary dark:bg-white-lite">
        Recent Transactions
      </h6>
      <ul className="flex flex-col gap-2">
        {recentTransactions.map((transaction) => {
          const { coin, symbol, marketCap, change, chartData } = transaction;
          const symbolKey = symbol.split("/")[0];
          const changeWithoutPercent = +change.split("%")[0];
          return (
            <li
              key={symbol}
              className="flex h-[3.5rem] border-b-2 border-gray_lite items-center justify-between px-1 gap-2 lg:gap-0 lg:px-5"
            >
              <div className="flex gap-3 items-center">
                {COIN_ICON_MAP[symbolKey]}
                <div>
                  <div className="text-xs lg:text-sm ">{coin}</div>
                  <div className="text-[10px] text-muted dark:text-secondary-light font-semibold">
                    {symbol}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs lg:text-sm  text-muted dark:text-secondary-light font-semibold">
                  Market Cap
                </div>
                <div className="text-xs ">${marketCap}</div>
              </div>
              <div>
                <div className="text-xs lg:text-sm  text-muted dark:text-secondary-light font-semibold">
                  30h Changes
                </div>
                <div
                  className={`text-xs  ${
                    changeWithoutPercent > 0 ? "text-primary" : "text-red-500"
                  }
                  }`}
                >
                  {change}
                </div>
              </div>
              <div className="w-28 h-full">
                <SingleLineChart
                  data={chartData}
                  dataKey="price"
                  currentChanges={changeWithoutPercent}
                />
              </div>
              <div className="flex gap-3">
                <Button
                  label="Sell"
                  className="border-2 rounded-full border-gray_lite px-4 h-9 text-center content-center hover:bg-white hover:text-black dark:bg-secondary-light dark:text-white dark:hover:bg-black"
                />
                <Button
                  label="Buy"
                  className="border-2 rounded-full bg-white border-white text-primary px-4 h-9 text-center content-center hover:bg-primary hover:border-black hover:text-black dark:bg-primary dark:text-white"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentTransactions;
