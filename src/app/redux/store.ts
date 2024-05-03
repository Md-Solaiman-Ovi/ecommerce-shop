import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalStateSlice from "./globalStateSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    globalState: globalStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Correct definition
export type AppDispatch = typeof store.dispatch;

export default store;
