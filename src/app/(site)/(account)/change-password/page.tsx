import Container from "@/app/components/site/Container";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import HidePasswordSvgIcon from "@/app/components/site/svg-icons/HidePasswordSvgIcon";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="w-full xl:w-2/3 bg-white p-4 md:p-10 flex flex-col gap-[30px] rounded">
      <div className="flex flex-col gap-[10px] text-xl font-medium ">
        <div className="font-bold text-center md:text-start">
          Change Password
        </div>
        <div className="text-sm">
          Please type and confirm to change your current password.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[24px] translate-x-4 bg-white px-1 text-xs ">
            Current Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your password"
            className="text-sm w-full h-full focus:outline-none my-1 "
          />
          <HidePasswordSvgIcon />
        </div>
        <div className="flex items-center border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[24px] translate-x-4 bg-white px-1 text-xs ">
            New Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your new password"
            className="text-sm w-full h-full focus:outline-none my-1 "
          />
          <HidePasswordSvgIcon />
        </div>
        <div className="flex items-center border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[24px] translate-x-4 bg-white px-1 text-xs ">
            Confirm Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your confirm password"
            className="text-sm w-full h-full focus:outline-none my-1 "
          />
          <HidePasswordSvgIcon />
        </div>
      </div>
      <div className="text-lg bg-[rgba(24,41,59,1)] text-white w-full text-center py-[10px] rounded cursor-pointer">
        Continue
      </div>
    </div>
  );
};

export default ChangePassword;
