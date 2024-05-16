import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SignInPopupState {
  isVisible: boolean;
  isSignInAlertVisible: boolean;
  isSignInVisible: boolean;
  isSignUpVisible: boolean;
  restPasswordVisible: boolean;
  newPasswordVisible: boolean;
}

const initialState: SignInPopupState = {
  isVisible: false,
  isSignInAlertVisible: false,
  isSignInVisible: false,
  isSignUpVisible: false,
  restPasswordVisible: false,
  newPasswordVisible: false,
};

const globalStateSlice = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    signInAlertVisibility(state, action: PayloadAction<boolean>) {
      state.isSignInAlertVisible = action.payload;
    },
    signInVisibility(state, action: PayloadAction<boolean>) {
      state.isSignInVisible = action.payload;
    },
    signUpVisibility(state, action: PayloadAction<boolean>) {
      state.isSignUpVisible = action.payload;
    },
    resetPasswordVisibility(state, action: PayloadAction<boolean>) {
      state.restPasswordVisible = action.payload;
    },
    newPasswordVisibility(state, action: PayloadAction<boolean>) {
      state.newPasswordVisible = action.payload;
    },
  },
});

export const {
  toggleVisibility,
  signInAlertVisibility,
  signInVisibility,
  signUpVisibility,
  resetPasswordVisibility,
  newPasswordVisibility,
} = globalStateSlice.actions;

export default globalStateSlice.reducer;
