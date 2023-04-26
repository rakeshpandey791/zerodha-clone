import { createSlice } from "@reduxjs/toolkit";
import { marketWatchData, priceData } from "../constants/data";
import { IMarketWatchSliceData } from "../constants/type";

const initialState: IMarketWatchSliceData = {
  currentPageData: marketWatchData?.data[0],
  priceData: priceData,
  totalInvestment: 0,
};

export const marketWatchSlice = createSlice({
  name: "marketWatchSlice",
  initialState: initialState,
  reducers: {
    setCurrentPageWatchData: (state, action) => {
      state.currentPageData = action.payload;
    },
    setTotalInvestment: (state, action) => {
      state.totalInvestment = action.payload;
    },
  },
});

export const { setCurrentPageWatchData, setTotalInvestment } =
  marketWatchSlice.actions;

export const getCurrentPageWatchData = (store: any) => {
  return store?.marketWatchSlice?.currentPageData;
};

export const getTotalInvestment = (store: any) => {
  return store?.marketWatchSlice?.totalInvestment;
};

export default marketWatchSlice.reducer;
