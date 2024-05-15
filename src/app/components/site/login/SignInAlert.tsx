import React from "react";
import { RxCross2 } from "react-icons/rx";

const SignInAlert = () => {
  return (
    <div className="bg-white px-[80px] py-[50px] w-[800px]  mx-5 flex flex-col gap-[60px] rounded-xl  relative">
      <div className="absolute bg-white rounded-full p-1 top-0 right-0 shadow-md translate-x-3 -translate-y-3 cursor-pointer">
        <RxCross2 className="w-6 h-6  text-red-600" />
      </div>
      <div className="flex flex-col justify-center gap-5 items-center w-full ">
        <div className="flex gap-2 ">
          <div className="mt-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 11C10.2833 11 10.521 10.904 10.713 10.712C10.9043 10.5207 11 10.2833 11 10V5.975C11 5.69167 10.9043 5.45833 10.713 5.275C10.521 5.09167 10.2833 5 10 5C9.71667 5 9.47933 5.09567 9.288 5.287C9.096 5.479 9 5.71667 9 6V10.025C9 10.3083 9.096 10.5417 9.288 10.725C9.47933 10.9083 9.71667 11 10 11ZM10 15C10.2833 15 10.521 14.904 10.713 14.712C10.9043 14.5207 11 14.2833 11 14C11 13.7167 10.9043 13.479 10.713 13.287C10.521 13.0957 10.2833 13 10 13C9.71667 13 9.47933 13.0957 9.288 13.287C9.096 13.479 9 13.7167 9 14C9 14.2833 9.096 14.5207 9.288 14.712C9.47933 14.904 9.71667 15 10 15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z"
                fill="#FEC400"
              />
            </svg>
          </div>
          <div className="text-sm ">
            You must Sign in or create an account to save Apple AirPods Pro
            MWP22AM/A with wireless Charging Case to your wish list!
          </div>
        </div>

        <div className="flex items-center gap-5 w-full px-7">
          <div className="text-sm px-4 py-2 bg-[rgba(24,41,59,1)] rounded text-white  text-center cursor-pointer w-1/3">
            Create Account
          </div>
          <div className="text-sm px-4 py-2 rounded  text-center cursor-pointer border-[#18293B] border-[1px] w-1/3">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAlert;
