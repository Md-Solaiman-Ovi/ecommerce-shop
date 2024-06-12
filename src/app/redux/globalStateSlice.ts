import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SignInPopupState {
  isVisible: boolean;
  isSignInAlertVisible: boolean;
  isSignInVisible: boolean;
  isSignUpVisible: boolean;
  restPasswordVisible: boolean;
  newPasswordVisible: boolean;
  showCategoryButton: boolean;
  showCategoryList: boolean;
  openCategoryList: boolean;
  menu: boolean;
  popUpModal: boolean;
  filter: boolean;
}

const initialState: SignInPopupState = {
  isVisible: false,
  isSignInAlertVisible: false,
  isSignInVisible: false,
  isSignUpVisible: false,
  restPasswordVisible: false,
  newPasswordVisible: false,
  showCategoryButton: false,
  showCategoryList: true,
  openCategoryList: false,
  menu: false,
  popUpModal: false,
  filter: false,
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
    setShowCategoryButton(state, action: PayloadAction<boolean>) {
      state.showCategoryButton = action.payload;
    },
    setShowCategoryList(state, action: PayloadAction<boolean>) {
      state.showCategoryList = action.payload;
    },
    toggleCategoryList(state) {
      state.openCategoryList = !state.openCategoryList;
    },
    toggleMenu(state) {
      state.menu = !state.menu;
    },
    togglePopUpModal(state, action: PayloadAction<boolean>) {
      state.popUpModal = action.payload;
    },
    toggleFilter(state) {
      state.filter = !state.filter;
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
  setShowCategoryButton,
  setShowCategoryList,
  toggleCategoryList,
  toggleMenu,
  togglePopUpModal,
  toggleFilter,
} = globalStateSlice.actions;

export default globalStateSlice.reducer;
