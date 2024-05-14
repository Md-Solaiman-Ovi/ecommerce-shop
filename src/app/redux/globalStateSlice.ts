import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SignInPopupState {
  isVisible: boolean;
  isSignUpVisible: boolean;
}

const initialState: SignInPopupState = {
  isVisible: false,
  isSignUpVisible: false,
};

const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    toggleSignUpVisibility(state) {
      state.isSignUpVisible = !state.isSignUpVisible;
    },
  },
});

export const { toggleVisibility, toggleSignUpVisibility } =
  globalStateSlice.actions;

export default globalStateSlice.reducer;
