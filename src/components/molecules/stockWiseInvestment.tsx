import React from "react";
import { useSelector } from "react-redux";
import { holdingData } from "../../constants/data";
import { getTotalInvestment } from "../../store/marketWatchSlice";

const StockWiseInvestment = () => {
  const totalInvestment = useSelector(getTotalInvestment);
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
              className={`text-sm h-14 p-4 text-yellow-500 bg-blue-${
                900 - index * 200
              }`}
              style={{
                width: `${
                  (stock.average_price * stock.quantity * 100) / totalInvestment
                }%`,
              }}
            >
              {stock.tradingsymbol}
            </div>
          </>
        ))}
    </>
  );
};

export default StockWiseInvestment;
