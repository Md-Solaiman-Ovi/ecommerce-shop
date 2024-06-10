import {
  newPasswordVisibility,
  signInVisibility,
  signUpVisibility,
} from "@/app/redux/globalStateSlice";
import { AppDispatch } from "@/app/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
import HidePasswordSvgIcon from "../svg-icons/HidePasswordSvgIcon";

const CreateNewPassword = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleSignInToggle = () => {
    dispatch(signInVisibility(true));
    dispatch(newPasswordVisibility(false));
  };
  return (
    <div className="bg-white px-[100px] py-[50px] w-[700px]  mx-5 flex flex-col gap-[60px] rounded-xl ">
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="text-xl font-bold ">Create New Password </div>
        <div className="text-base w-2/3 text-center">
          Your new password must be different from previously used passwords
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="relative flex items-center border-[1px] border-black rounded ">
          <span className="absolute -translate-y-6 translate-x-4 bg-white px-1 text-sm ">
            Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your password"
            className="text-sm w-full h-12 rounded pl-2 "
          />
          <div className="absolute right-4 ">
            <HidePasswordSvgIcon />
          </div>
        </div>
        <div className="relative flex items-center border-[1px] border-black rounded ">
          <span className="absolute -translate-y-6 translate-x-4 bg-white px-1 text-sm ">
            Confirm Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your confirm password"
            className="text-sm w-full h-12 rounded pl-2 "
          />
          <div className="absolute right-4 ">
            <HidePasswordSvgIcon />
          </div>
        </div>

        <div className="flex flex-col ">
          <div
            className="text-lg py-2 bg-[rgba(24,41,59,1)] rounded text-white  text-center cursor-pointer w-full"
            onClick={handleSignInToggle}
          >
            Reset Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
