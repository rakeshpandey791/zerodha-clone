import React from "react";

interface IProps {
  tableConfig: any;
}

const CustomTable: React.FC<IProps> = ({ tableConfig }) => {
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
            <td className={`py-3 px-20  border-r-2`}>{row.tradingsymbol}</td>
            <td className={`py-3 px-5  border-r-2`}>{row.quantity}</td>
            <td className={`py-3 px-5  border-r-2`}>
              {parseFloat(row.average_price).toFixed(2)}
            </td>
            <td className={`py-3 px-5  border-r-2`}>{row.last_price}</td>
            <td className={`py-3 px-5  border-r-2`}>
              {parseFloat(String(row.last_price * row.quantity)).toFixed(2)}
            </td>
            <td
              className={`py-3 px-5 border-r-2 ${
                row.pnl < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {parseFloat(row.pnl).toFixed(2)}
            </td>
            <td
              className={`py-3 px-5 border-r-2 ${
                row.pnl < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {parseFloat(
                String(
                  ((row.average_price - row.last_price) * 100) /
                    row.average_price
                )
              ).toFixed(2)}
              %
            </td>
            <td
              className={`py-3 px-5 ${
                row.day_change_percentage < 0
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {parseFloat(row.day_change_percentage).toFixed(2)}%
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default CustomTable;
