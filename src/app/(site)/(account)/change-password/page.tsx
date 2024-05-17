import Container from "@/app/components/site/Container";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import React from "react";

const ChangePassword = () => {
  return (
    <div className="w-2/3 bg-white p-10 flex flex-col gap-[30px] rounded">
      <div className="text-xl font-medium">
        <div>Change Password</div>
        <div className="text-sm">
          Please type and confirm to change your current password.{" "}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            Current Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your password"
            className="text-sm w-full h-full focus:outline-none "
          />
        </div>
        <div className="border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            New Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your new password"
            className="text-sm w-full h-full focus:outline-none "
          />
        </div>
        <div className="border-[1px] border-black rounded p-2 w-full">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            Confirm Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Enter your confirm password"
            className="text-sm w-full h-full focus:outline-none "
          />
        </div>
      </div>
      <div className="text-lg bg-[rgba(24,41,59,1)] text-white w-full text-center py-[10px] rounded cursor-pointer">
        Continue
      </div>
    </div>
  );
};

export default ChangePassword;
