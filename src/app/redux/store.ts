import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import globalStateSliceReducer from "./globalStateSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    globalState: globalStateSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Correct definition
export type AppDispatch = typeof store.dispatch;

export default store;
