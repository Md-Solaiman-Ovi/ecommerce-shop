import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SignInPopupState {
  isVisible: boolean;
  isSignInVisible: boolean;
  isSignUpVisible: boolean;
}

const initialState: SignInPopupState = {
  isVisible: false,
  isSignInVisible: false,
  isSignUpVisible: false,
};

const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    signInVisibility(state, action: PayloadAction<boolean>) {
      state.isSignInVisible = action.payload;
    },
    signUpVisibility(state, action: PayloadAction<boolean>) {
      state.isSignUpVisible = action.payload;
    },
  },
});

export const { toggleVisibility, signInVisibility, signUpVisibility } =
  globalStateSlice.actions;

export default globalStateSlice.reducer;
