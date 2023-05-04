import React, { useEffect, useState } from "react";
import StockWiseInvestment from "../../components/molecules/stockWiseInvestment";
import CustomTable from "../../components/organisms/table";

import { holdingData } from "../../constants/data";
import { DATA_TABLE_ROW_TYPE } from "../../constants/global";

const Holdings = () => {
  const [totalInvestment, setTotalInvestment] = useState(0);
  const tableConfig = {
    headerConfig: [
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Instrument",
        tdClass: "py-3 px-20 border-r-2",
        value: "tradingsymbol",
      },
      {
        type: DATA_TABLE_ROW_TYPE.NUMBER,
        title: "Qty.",
        tdClass: "py-3 px-5 border-r-2",
        value: "quantity",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "Avg. cost",
        tdClass: "py-3 px-5 border-r-2",
        value: "average_price",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "LTP",
        tdClass: "py-3 px-5 border-r-2",
        value: "last_price",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "Cur. val",
        tdClass: "py-3 px-5  border-r-2",
        value: (row: any) => row?.last_price * row?.quantity,
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "P&L",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row.pnl < 0 ? "text-red-500" : "text-green-500",
        value: "pnl",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PERCENTAGE,
        title: "Net chg.",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row.pnl < 0 ? "text-red-500" : "text-green-500",
        value: (row: any) =>
          parseFloat(
            String(
              ((row.average_price - row.last_price) * 100) / row.average_price
            )
          ).toFixed(2),
      },
      {
        type: DATA_TABLE_ROW_TYPE.PERCENTAGE,
        title: "Day chg.",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row.day_change_percentage < 0 ? "text-red-500" : "text-green-500",
        value: "day_change_percentage",
      },
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
