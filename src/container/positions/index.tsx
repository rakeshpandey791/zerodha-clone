import React from "react";
import CustomTable from "../../components/organisms/table";
import { positionData } from "../../constants/data";
import { DATA_TABLE_ROW_TYPE } from "../../constants/global";

const Positions = () => {
  const tablePosNetConfig = {
    headerConfig: [
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Product",
        tdClass: "py-3 px-20 border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.quantity < 0
                ? " text-gray-400 bg-gray-50"
                : " text-orange-600 bg-orange-50"
            }`}
          >
            {row?.product}
          </span>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Instrument",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <div className="text-xs">
              <span
                className={`px-3 py-1.5 rounded-sm text-sm font-normal  ${
                  row?.quantity < 0 ? " text-gray-400" : ""
                }`}
              >
                {row?.tradingsymbol}
              </span>
              <span className="text-xs font-light text-gray-400">
                {row?.exchange}
              </span>
              <span
                className={`text-xs font-light ml-2 px-2 py-1  ${
                  row?.quantity < 0
                    ? "text-gray-400 bg-gray-100"
                    : "text-orange-400 bg-orange-100"
                }`}
              >
                {row?.quantity > 0 ? "HOLDING" : "SOLD HOLDING"}
              </span>
            </div>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.NUMBER,
        title: "Qty.",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.quantity < 0 ? " text-gray-400" : " text-blue-600"
            }`}
          >
            {row?.quantity}
          </span>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "Avg.",
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
        title: "P&L",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row.pnl < 0 ? "text-red-500" : "text-green-500",
        value: "pnl",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PERCENTAGE,
        title: "Chg.",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row?.quantity < 0
            ? "text-gray-500"
            : row.last_price - row.average_price < 0
            ? "text-red-500"
            : "text-green-500",
        value: (row: any) =>
          parseFloat(
            String(
              ((row.average_price - row.last_price) * 100) / row.average_price
            )
          ).toFixed(2),
      },
    ],
    rowData: positionData?.data?.net,
    totalVisibility: true,
  };
  const tablePosDayConfig = {
    headerConfig: [
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Product",
        tdClass: "py-3 px-20 border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.quantity < 0
                ? " text-gray-400 bg-gray-50"
                : " text-orange-600 bg-orange-50"
            }`}
          >
            {row?.product}
          </span>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Instrument",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <span
              className={`px-3 py-1.5 rounded-sm text-sm font-normal  ${
                row?.quantity < 0 ? " text-gray-400" : ""
              }`}
            >
              {row?.tradingsymbol}
            </span>
            <span className="text-xs font-light text-gray-400">
              {row?.exchange}
            </span>
            <span
              className={`text-xs font-light ml-2 px-2 py-1  ${
                row?.quantity < 0
                  ? "text-gray-400 bg-gray-100"
                  : "text-orange-400 bg-orange-100"
              }`}
            >
              {row?.quantity > 0 ? "HOLDING" : "SOLD HOLDING"}
            </span>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.NUMBER,
        title: "Qty.",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.quantity < 0 ? " text-gray-400" : " text-blue-600"
            }`}
          >
            {row?.quantity}
          </span>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "Avg.",
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
        title: "P&L",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row.pnl < 0 ? "text-red-500" : "text-green-500",
        value: "pnl",
      },
      {
        type: DATA_TABLE_ROW_TYPE.PERCENTAGE,
        title: "Chg.",
        tdClass: "py-3 px-5  border-r-2",
        tdDynamicClass: (row: any) =>
          row?.quantity < 0
            ? "text-gray-500"
            : row.last_price - row.average_price < 0
            ? "text-red-500"
            : "text-green-500",
        value: (row: any) =>
          parseFloat(
            String(
              ((row.average_price - row.last_price) * 100) / row.average_price
            )
          ).toFixed(2),
      },
    ],
    rowData: positionData?.data?.day,
    totalVisibility: true,
  };

  return (
    <>
      <div className="flex">
        <div className="flex w-3/5">
          <div className="m-5 text-lg">
            Positions ({positionData?.data?.net?.length})
          </div>
        </div>
        <div className="flex mt-5 w-2/5 justify-between">
          <div className="w-1/5">
            <input
              type="search"
              placeholder="Search"
              className="w-24 py-1 border-gray-500"
            />
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Analytics
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Download
          </div>
        </div>
      </div>
      <div className="flex ml-5 flex-wrap">
        <CustomTable tableConfig={tablePosNetConfig} />
      </div>

      <div className="flex">
        <div className="flex w-4/5">
          <div className="m-5 text-lg">
            Day's Positions ({positionData?.data?.day?.length})
          </div>
        </div>
        <div className="flex mt-5 w-2/5 justify-between">
          <div className="w-1/5">
            <input
              type="search"
              placeholder="Search"
              className="w-24 py-1 border-gray-500"
            />
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Download
          </div>
        </div>
      </div>
      <div className="flex ml-5 flex-wrap ">
        <CustomTable tableConfig={tablePosDayConfig} />
      </div>
    </>
  );
};

export default Positions;
