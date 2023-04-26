import React from "react";

const HoldingsStat = () => {
  return (
    <div className="flex m-5 mb-5 border-b-2">
      <div className="w-1/2">
        <div className="font-normal text-lg"> Holdings (5)</div>
        <div className="flex mb-10 pt-6">
          <div className="w-2/3 border-r-2 mr-5">
            <div className="font-normal">
              <span className="text-4xl text-red-400">-1.49L</span>{" "}
              <span className="text-sm text-red-300">-9.19%</span>
            </div>
            <span className="text-sm text-gray-400 font-normal">P&L</span>
          </div>
          <div className="w-1/3">
            <div className="text-sm text-gray-400 font-normal">
              Current value 14.7L
            </div>
            <br />
            <div className="text-sm text-gray-400 font-normal">
              Investment 16.18L
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoldingsStat;
