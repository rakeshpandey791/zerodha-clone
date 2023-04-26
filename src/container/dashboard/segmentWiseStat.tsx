import React from "react";

const SegmentWiseStat = () => {
  return (
    <div className="flex m-5 mb-5 border-b-2">
      <div className="w-1/2">
        <div className="font-normal text-lg">Equily</div>
        <div className="flex mb-10 pt-6">
          <div className="w-1/3 border-r-2 mr-5">
            <span className="text-4xl text-gray-500 font-normal">73.1</span>
            <br />
            <span className="text-sm text-gray-400 font-normal">
              Margin available
            </span>
          </div>
          <div className="w-1/3">
            <div className="text-sm text-gray-400 font-normal">
              Margins used 0
            </div>
            <br />
            <div className="text-sm text-gray-400 font-normal">
              Opening balance 73.1
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="font-normal text-lg">Commodity</div>
        <div className="flex mb-10 pt-6">
          <div className="w-1/3 mr-5">
            <span className="text-4xl text-gray-400 font-normal">0</span>
            <br />
            <span className="text-sm text-gray-400 font-normal">
              Margin available
            </span>
          </div>
          <div className="w-2/3">
            <div className="text-sm text-gray-400 font-normal">
              You don't have a commodity account
            </div>
            <br />
            <div className="text-sm text-gray-400 font-normal text-center">
              <button className="bg-blue-500 hover:bg-blue-400 p-3 rounded-md text-white w-32 font-normal">
                Activate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentWiseStat;
