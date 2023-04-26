import React from "react";
import { useSelector } from "react-redux";
import {
  IMarketWatchSliceData,
  IPageItemDetails,
} from "../../../constants/type";
import { store } from "../../../store";

interface IProps {
  stock: IPageItemDetails;
}

const StockRow: React.FC<IProps> = ({ stock }) => {
  const stockPriceDetails = useSelector((store: any) => {
    return store.marketWatchSlice.priceData[stock.instrument_token];
  });
  return (
    <div className="flex px-5 p-3 border-b-2 hover:bg-gray-100 cursor-pointer">
      <div
        className={`w-1/2 text-xs ${
          stockPriceDetails?.absoluteChange < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {stock?.tradingsymbol}
      </div>
      <div className="w-1/2 flex">
        <span className="mr-3 text-gray-400 text-xs w-1/4">
          {parseFloat(stockPriceDetails?.absoluteChange).toFixed(2)}
        </span>
        <span className="mr-3 w-1/4 text-xs">
          {parseFloat(stockPriceDetails?.change).toFixed(2)}
        </span>
        {stockPriceDetails?.absoluteChange < 0 ? (
          <span className="mr-3 border-t-red-600 border-t-8 border-x-transparent border-x-8 border-b-0"></span>
        ) : (
          <span className="h-0 w-0 mr-3 border-x-8 border-b-8 border-x-transparent border-b-green-600"></span>
        )}
        {/* <span
          className={`${
            stockPriceDetails?.absoluteChange < 0
              ? "text-red-500"
              : "text-green-500"
          } mr-3 w-1/4 text-lg`}
        >
          {stockPriceDetails?.absoluteChange < 0 ? "v" : "^"}
        </span> */}
        <span
          className={`mr-3 ${
            stockPriceDetails?.absoluteChange < 0
              ? "text-red-500"
              : "text-green-500"
          }  w-1/4 text-xs`}
        >
          {parseFloat(stockPriceDetails?.lastPrice).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default StockRow;
