import { configureStore } from "@reduxjs/toolkit";
import marketWatchSlice from "./marketWatchSlice";

export const store = configureStore({
  reducer: {
    marketWatchSlice: marketWatchSlice,
  },
});
