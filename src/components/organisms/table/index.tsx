import React, { useEffect, useState } from "react";
import { DATA_TABLE_ROW_TYPE } from "../../../constants/global";

interface IProps {
  tableConfig: any;
}

const CustomTable: React.FC<IProps> = ({ tableConfig }) => {
  const [totalPL, setTotalPL] = useState(0);

  useEffect(() => {
    if (tableConfig?.totalVisibility) {
      const total = tableConfig?.rowData?.reduce(
        (acc: number, row: any) => acc + row.pnl,
        0
      );
      setTotalPL(total);
    }
  }, [tableConfig?.rowData]);

  const getRowValue = (idx: number, row: any) => {
    const type = tableConfig?.headerConfig?.[idx]?.type;
    const value = tableConfig?.headerConfig?.[idx]?.value;
    switch (type) {
      case DATA_TABLE_ROW_TYPE.LABEL:
        return typeof value !== "function" ? row[value] : value(row);
      case DATA_TABLE_ROW_TYPE.NUMBER:
        return typeof value !== "function" ? row[value] : value(row);
      case DATA_TABLE_ROW_TYPE.TIME:
        const dateObj = new Date(row[value]);
        return (
          dateObj.getHours() +
          ":" +
          dateObj.getMinutes() +
          ":" +
          dateObj.getSeconds()
        );
      case DATA_TABLE_ROW_TYPE.PRICE:
        return typeof value !== "function"
          ? parseFloat(row[value]).toFixed(2)
          : parseFloat(value(row)).toFixed(2);
      case DATA_TABLE_ROW_TYPE.PERCENTAGE:
        return (
          (typeof value !== "function"
            ? parseFloat(row[value]).toFixed(2)
            : parseFloat(value(row))) + "%"
        );
    }
  };

  return (
    <>
      <div className="flex w-full">
        <table className="table-auto text-sm border-2">
          <thead className="border-b-2">
            {tableConfig?.headerConfig.map((header: any) => (
              <th
                className={`py-3 px-5 border-r-2 font-normal text-gray-500 cursor-pointer hover:bg-gray-100`}
                key={header.title}
              >
                {header.title}
              </th>
            ))}
          </thead>

          {tableConfig?.rowData.map((row: any) => (
            <tr
              className="text-xs border-b-2 hover:bg-gray-100"
              key={row.instrument_token}
            >
              {tableConfig?.headerConfig.map((header: any, idx: number) => (
                <td
                  className={`${header?.tdClass}  ${
                    header?.tdDynamicClass && header?.tdDynamicClass(row)
                  }`}
                >
                  {getRowValue(idx, row)}
                </td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      {tableConfig?.totalVisibility && (
        <div className="flex w-11/12 my-2 p-2">
          <div className="w-5/6"></div>
          <div className="w-1/6">
            <div className="flex">
              <div className="w-1/2">Total</div>
              <div
                className={`w-1/2 ${
                  totalPL > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {totalPL > 0 ? `+${totalPL}` : `-${totalPL}`}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomTable;
