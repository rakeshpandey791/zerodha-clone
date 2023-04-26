import React from "react";
import StockWiseInvestment from "../../components/molecules/stockWiseInvestment";
import HoldingsStat from "./holdingsStat";
import SegmentWiseStat from "./segmentWiseStat";

const Dashboard = () => {
  return (
    <div className="mt-10 overflow-scroll max-h-screen">
      <div className="flex m-5 mb-10 border-b-2 pb-3">
        <span className="text-3xl text-gray-500 font-normal">Hi, Rakesh</span>
      </div>

      <SegmentWiseStat />

      <HoldingsStat />

      <div className="flex m-7">
        <StockWiseInvestment />
      </div>
    </div>
  );
};

export default Dashboard;
