/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../Container";

const SignIn = () => {
  return (
    <div className="bg-white px-[100px] py-[50px] w-[700px] h-[660px] flex flex-col gap-[60px] rounded-xl">
      <div className="flex justify-center gap-10 items-center text-xl font-bold">
        <div>SIGN IN </div>
        <div>SIGN UP</div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-sm ">
            Email or Phone Number <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="text-sm w-full h-full focus:outline-none  "
          />
        </div>
        <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-sm ">
            Password <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="text-sm w-full h-full focus:outline-none  "
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <input
              id="radio-1"
              type="checkbox"
              name="location"
              placeholder="Select Sub-District"
              className="text-sm focus:outline-none cursor-pointer accent-black"
            />
            <label htmlFor="radio-1 text-sm">Remember me</label>
          </div>
          <div>Forgot Password?</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-lg py-2 bg-[rgba(24,41,59,1)] rounded text-white  text-center cursor-pointer w-full">
            Sign In
          </div>
          <div className="text-xl font-bold border-b-[1px] py-4 text-center  w-full">
            Or
          </div>
          <div className="flex gap-5 items-center mt-5">
            <div className="py-2 border-[1px] w-full text-lg font-bold text-center rounded ">
              Google
            </div>
            <div className="py-2 border-[1px] w-full text-lg font-bold text-center rounded ">
              Facebook
            </div>
          </div>
        </div>

        <div className="text-center">
          Don't have an account?
          <span className="font-bold text-lg"> Sign Up now!</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
