import { createSlice } from "@reduxjs/toolkit";
export interface GlobalState {
  isSignInOpen: boolean;
}
const initialState: GlobalState = {
  isSignInOpen: false, // Initial value
};
const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    toggleIsSignInOpen: (state: GlobalState) => {
      state.isSignInOpen = !state.isSignInOpen;
    },
  },
});

export const { toggleIsSignInOpen } = globalStateSlice.actions;
export default globalStateSlice.reducer;
