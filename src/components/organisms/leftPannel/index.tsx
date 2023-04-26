import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IPageItemDetails, IPageItems } from "../../../constants/type";
import {
  getCurrentPageWatchData,
  setCurrentPageWatchData,
} from "../../../store/marketWatchSlice";

import { marketWatchData } from "./../../../constants/data";
import StockRow from "./stockRow";

const LeftPannel = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const currentPageWatchData = useSelector(getCurrentPageWatchData);

  const handleMenuItemClick = (route: string) => {
    navigation(route);
  };

  const updatePageWatchData = (pageData: IPageItems) => {
    dispatch(setCurrentPageWatchData(pageData));
  };

  return (
    <div className="border-r-2">
      <div className="flex flex-col">
        <div className="p-5 flex text-xs font-semibold border-b-2">
          <div className="w-1/2 mr-2">
            NIFTY 50 <span className="text-green-500">17769.25</span>{" "}
            <span className="text-gray-500 text-xs font-extralight">
              25.85(0.15%)
            </span>
          </div>
          <div className="w-1/2">
            SENSEX <span className="text-green-500">60130.71</span>{" "}
            <span className="text-gray-500 text-xs font-extralight">
              74.61(0.12%)
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-scroll max-h-screen">
        {currentPageWatchData?.items?.map((item: IPageItemDetails) => (
          <StockRow stock={item} />
        ))}
      </div>

      <div className="flex border-t-2 border-r-2 fixed bottom-0 left-0 w-4/12 z-10 bg-white">
        {marketWatchData?.data?.map((item, index) => (
          <div
            onClick={() => updatePageWatchData(item)}
            className={`py-3 px-5 border-r-2 cursor-pointer  hover:bg-gray-100 text-sm ${
              item?.id === currentPageWatchData?.id && "bg-gray-100"
            }`}
            key={item?.id}
            title={item?.name}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPannel;
