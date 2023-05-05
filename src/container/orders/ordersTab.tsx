import React from "react";
import CustomTable from "../../components/organisms/table";
import { orderData } from "../../constants/data";
import { DATA_TABLE_ROW_TYPE } from "../../constants/global";

const OrdersTab = () => {
  const tableConfig = {
    headerConfig: [
      {
        type: DATA_TABLE_ROW_TYPE.TIME,
        title: "Time",
        tdClass: "py-3 px-20 border-r-2",
        value: "order_timestamp",
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Type",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.transaction_type === "SELL"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {row?.transaction_type}
          </span>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Instrument",
        tdClass: "py-3 px-5 border-r-2",
        value: (row: any) => (
          <>
            <span className="text-sm font-normal">{row?.tradingsymbol}</span>{" "}
            <span className="text-xs font-light text-gray-400">
              {row?.exchange}
            </span>
          </>
        ),
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Product",
        tdClass: "py-3 px-5 border-r-2",
        value: "product",
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Qty",
        tdClass: "py-3 px-5  border-r-2",
        value: (row: any) => row?.filled_quantity + "/" + row?.quantity,
      },
      {
        type: DATA_TABLE_ROW_TYPE.PRICE,
        title: "Avg. price",
        tdClass: "py-3 px-5  border-r-2",
        value: "price",
      },
      {
        type: DATA_TABLE_ROW_TYPE.LABEL,
        title: "Status",
        tdClass: "py-3 px-5  border-r-2",
        value: (row: any) => (
          <span
            className={`px-3 py-1.5 rounded-sm text-xs  ${
              row?.status === "CANCELLED"
                ? "bg-gray-50 text-gray-600"
                : row?.status === "REJECTED"
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }`}
          >
            {row?.status}
          </span>
        ),
      },
    ],
    rowData: orderData?.data,
  };
  return (
    <>
      <div className="flex">
        <div className="flex w-3/6">
          <div className="m-5 text-lg">Executed orders (5)</div>
        </div>
        <div className="flex mt-5 w-3/6 justify-between">
          <div className="w-1/5">
            <input
              type="search"
              placeholder="Search"
              className="w-24 py-1 border-gray-500"
            />
          </div>
          <div className="w-1/5 mr-2 pt-2 cursor-pointer text-xs text-blue-500">
            View Hostory
          </div>
          <div className="w-1/5 pt-2 cursor-pointer text-xs text-blue-500">
            Download
          </div>
        </div>
      </div>
      <div className="flex ml-5">
        <CustomTable tableConfig={tableConfig} />
      </div>
    </>
  );
};

export default OrdersTab;
