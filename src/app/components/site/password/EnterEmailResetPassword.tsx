/* eslint-disable react/no-unescaped-entities */
import React from "react";
import IconButton from "../navbar/IconButton";

const EnterEmailResetPassword = () => {
  return (
    <div className="bg-white px-[100px] py-[50px] w-[700px]  mx-5 flex flex-col gap-[60px] rounded-xl ">
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="text-xl font-bold ">Reset Password </div>
        <div className="text-base w-1/2 text-center">
          Enter the email address associated with your account
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-sm ">
            Email <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder=" Enter your email address"
            className="text-sm w-full h-full focus:outline-none py-2 px-4"
          />
        </div>

        <div className="flex flex-col ">
          <div className="text-lg py-2 bg-[rgba(24,41,59,1)] rounded text-white  text-center cursor-pointer w-full">
            Sent Email
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterEmailResetPassword;
