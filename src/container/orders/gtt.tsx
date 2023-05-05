import React from "react";
import CustomTable from "../../components/organisms/table";
import { gttData } from "../../constants/data";
import { DATA_TABLE_ROW_TYPE } from "../../constants/global";

const Gtt = () => {
  const tableGttConfig = {
    headerConfig: [
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Created on",
        tdClass: "py-3 px-10 border-r-2",
        value: "created_at",
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Instrument",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <span className={`px-3 py-1.5 rounded-sm text-sm font-normal`}>
              {row?.condition?.tradingsymbol}
            </span>
            <span className="text-xs font-light text-gray-400">
              {row?.condition?.exchange}
            </span>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.NUMBER,
        title: "Type",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <span
              className={`px-2 py-1 rounded-sm text-xs text-gray-400 bg-gray-200 uppercase mr-1`}
            >
              {row?.type}
            </span>
            <span
              className={`px-2 py-1 rounded-sm text-xs uppercase ${
                row?.orders[0]?.transaction_type === "SELL"
                  ? "bg-red-100 text-red-500"
                  : "bg-blue-100 text-blue-500"
              }`}
            >
              {row?.orders[0]?.transaction_type}
            </span>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Trigger",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <span className={`text-sm mr-2`}>{row?.orders[0]?.price}</span>
            <span className={`text-xs`}>
              {parseFloat(
                String(
                  ((row?.orders[0]?.price - row?.condition?.last_price) * 100) /
                    row?.condition?.last_price
                )
              ).toFixed(2)}
              %
            </span>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Quantity",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => row?.orders[0]?.quantity,
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Status",
        tdClass: "py-3 px-5  border-r-2",
        value: (row: any) => (
          <span className="uppercase bg-green-50 text-green-500 px-2 py-1 rounded-sm">
            {row?.status}
          </span>
        ),
      },
    ],
    rowData: gttData?.data,
  };
  return (
    <>
      <div className="flex">
        <div className="flex w-4/6">
          <div className="m-5 text-lg">GTT ({3})</div>
        </div>
        <div className="flex mt-5 w-2/6 justify-between">
          <div className="w-1/3 text-xs">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded-sm text-white "
            >
              New GTT
            </button>
          </div>
          <div className="w-1/3">
            <input
              type="search"
              placeholder="Search"
              className="w-24 py-1 border-gray-500"
            />
          </div>

          <div className="w-1/3 pt-2 cursor-pointer text-xs text-blue-500">
            Download
          </div>
        </div>
      </div>
      <div className="flex ml-5 flex-wrap">
        <CustomTable tableConfig={tableGttConfig} />
      </div>
    </>
  );
};

export default Gtt;
