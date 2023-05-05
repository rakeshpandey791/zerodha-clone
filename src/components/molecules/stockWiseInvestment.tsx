import React from "react";
import { useSelector } from "react-redux";
import { holdingData } from "../../constants/data";
import { getTotalInvestment } from "../../store/marketWatchSlice";

const StockWiseInvestment = () => {
  const totalInvestment = useSelector(getTotalInvestment);
  const getClass = (index: number) => {
    switch (index) {
      case 0:
        return "bg-blue-900";
      case 1:
        return "bg-blue-800";
      case 2:
        return "bg-blue-600";
      case 3:
        return "bg-blue-500";
      case 4:
        return "bg-blue-400";
      case 5:
        return "bg-blue-300";
      case 6:
        return "bg-blue-200";
      case 7:
        return "bg-blue-100";
      case 8:
        return "bg-blue-50";
    }
  };
  return (
    <>
      {holdingData?.data
        .sort(
          (a, b) => b.average_price * b.quantity - a.average_price * a.quantity
        )
        ?.map((stock, index) => (
          <>
            <div
              title={stock.tradingsymbol}
              data-tooltip-target={`tooltip-default-${stock.tradingsymbol}`}
              className={`text-sm h-14 p-4 text-white ${getClass(index)}`}
              style={{
                width: `${
                  (stock.average_price * stock.quantity * 100) / totalInvestment
                }%`,
              }}
            >
              <span className="text-sm">{stock.tradingsymbol}</span>
            </div>
          </>
        ))}
    </>
  );
};

export default StockWiseInvestment;
