import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import counterReducer from "./slices/counterslices";
import bookingReducer from "./slices/bookingSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      booking: bookingReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);
export type AppDispatch = AppStore["dispatch"];
