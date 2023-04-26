import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./components/molecules/header";
import LeftPannel from "./components/organisms/leftPannel";
import { holdingData } from "./constants/data";
import { setTotalInvestment } from "./store/marketWatchSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < holdingData?.data.length; i++) {
      const row = holdingData?.data[i];
      total += row.average_price * row.quantity;
    }
    const newTotal = parseFloat(String(total)).toFixed(2);
    dispatch(setTotalInvestment(parseFloat(newTotal)));
  }, []);
  return (
    <div className="flex">
      <div className="w-4/12">
        <LeftPannel />
      </div>
      <div className="w-8/12">
        <div className="">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
