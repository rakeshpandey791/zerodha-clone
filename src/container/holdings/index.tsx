import React, { useEffect, useState } from "react";
import StockWiseInvestment from "../../components/molecules/stockWiseInvestment";
import CustomTable from "../../components/organisms/table";

import { holdingData } from "../../constants/data";

const Holdings = () => {
  const [totalInvestment, setTotalInvestment] = useState(0);
  const tableConfig = {
    headerConfig: [
      { type: "label", title: "Instrument" },
      { type: "label", title: "Qty." },
      { type: "label", title: "Avg. cost" },
      { type: "label", title: "LTP" },
      { type: "label", title: "Cur. val" },
      { type: "label", title: "P&L" },
      { type: "label", title: "Net chg." },
      { type: "label", title: "Day chg." },
    ],
    rowData: holdingData?.data,
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < holdingData?.data.length; i++) {
      const row = holdingData?.data[i];
      total += row.average_price * row.quantity;
    }
    const newTotal = parseFloat(String(total)).toFixed(2);
    setTotalInvestment(parseFloat(newTotal));
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex w-2/5">
          <div className="m-5 text-lg">
            Holdings ({holdingData.data.length})
          </div>
          <div className="mt-5">
            <select className="px-4 py-1 rounded-sm">
              <option>All stocks</option>
              <option>Kite only</option>
              <option>Smallcase</option>
              <option>Mutual funds</option>
            </select>
          </div>
        </div>
        <div className="flex mt-5 w-3/5 justify-between">
          <div className="w-1/5">
            <input
              type="search"
              placeholder="Search"
              className="w-24 py-1 border-gray-500"
            />
          </div>
          <div className="w-1/5 mr-2 pt-2 cursor-pointer text-xs text-blue-500">
            Authentication
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Family
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Analytics
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Download
          </div>
        </div>
      </div>

      <div className="flex ml-5">
        <CustomTable tableConfig={tableConfig} />
      </div>

      <div className="flex ml-5 mt-20">
        <div className="w-1/4">
          <span className="text-xs text-gray-500">Total investment</span>
          <br />
          <span className="text-2xl text-gray-600">16,18,403.65</span>
        </div>
        <div className="w-1/4">
          <span className="text-xs text-gray-500">Current value</span>
          <br />
          <span className="text-2xl text-gray-600">14,70,716.50</span>
        </div>
        <div className="w-1/4">
          <span className="text-xs text-gray-500">Day's P&L</span>
          <br />
          <span className="text-2xl text-green-600">3,477.50</span>
          <br />
          <span className="text-lg text-green-600">(+0.24%)</span>
        </div>
        <div className="w-1/4">
          <span className="text-xs text-gray-500">Total P&L</span>
          <br />
          <span className="text-2xl text-red-600">-1,47,687.15</span>
          <br />
          <span className="text-lg text-red-600">(-9.13%)</span>
        </div>
      </div>

      <div className="flex ml-5 mt-5 w-11/12">
        <StockWiseInvestment />
      </div>
    </>
  );
};

export default Holdings;
