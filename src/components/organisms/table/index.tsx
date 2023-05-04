import React from "react";
import { DATA_TABLE_ROW_TYPE } from "../../../constants/global";

interface IProps {
  tableConfig: any;
}

const CustomTable: React.FC<IProps> = ({ tableConfig }) => {
  const getRowValue = (idx: number, row: any) => {
    const type = tableConfig?.headerConfig?.[idx]?.type;
    const value = tableConfig?.headerConfig?.[idx]?.value;
    switch (type) {
      case DATA_TABLE_ROW_TYPE.LABEL:
        return typeof value !== "function" ? row[value] : value(row);
      case DATA_TABLE_ROW_TYPE.NUMBER:
        return row[value];
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
    </>
  );
};

export default CustomTable;
