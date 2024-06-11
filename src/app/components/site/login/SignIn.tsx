/* eslint-disable react/no-unescaped-entities */
import React from "react";
import IconButton from "../navbar/IconButton";
// import Container from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import {
  toggleVisibility,
  signInVisibility,
  signUpVisibility,
  resetPasswordVisibility,
} from "@/app/redux/globalStateSlice";
import Link from "next/link";
import HidePasswordSvgIcon from "../svg-icons/HidePasswordSvgIcon";

const SignIn = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleSignUpToggle = () => {
    dispatch(signInVisibility(false));
    dispatch(signUpVisibility(true));
    dispatch(resetPasswordVisibility(false));
  };
  const handleSignInToggle = () => {
    dispatch(signInVisibility(false));
    dispatch(toggleVisibility());
  };
  const handleResetPasswordToggle = () => {
    dispatch(signInVisibility(false));
    dispatch(resetPasswordVisibility(true));
  };

  return (
    <>
      <div className="bg-white px-[100px] py-[50px] w-[700px] h-[660px] mx-5 flex flex-col gap-[60px] rounded-xl ">
        <div className="flex flex-col justify-center items-center  ">
          <div className="text-3xl text-primary font-bold">LOG IN</div>
          <div className="cursor-pointer ">Sign For The Best Experience</div>
        </div>
        <div className="flex flex-col gap-[30px]">
          <div className="border-[1px] border-black rounded ">
            <span className="absolute -translate-y-[10px] translate-x-4 bg-white px-1 text-sm ">
              Email or Phone Number <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="text-sm w-full h-12 rounded px-2 "
            />
          </div>
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
            <div className="cursor-pointer" onClick={handleResetPasswordToggle}>
              Forgot Password?
            </div>
          </div>
          <div className="flex flex-col ">
            <Link
              href="/my-account"
              className="text-lg py-2 bg-[rgba(24,41,59,1)] rounded text-white  text-center cursor-pointer w-full"
              onClick={handleSignInToggle}
            >
              Sign In
            </Link>
            <div className="text-xl font-bold border-b-[1px] py-4 text-center  w-full">
              Or
            </div>
            <div className="flex gap-5 items-center mt-5">
              <div className="py-2 border-[1px] w-full text-lg font-bold text-center rounded ">
                <IconButton
                  icon={
                    <svg
                      width="23"
                      height="24"
                      viewBox="0 0 23 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_37_11680)">
                        <path
                          d="M5.13716 14.3843L4.34153 17.3545L1.43354 17.416C0.56448 15.8041 0.0715332 13.9599 0.0715332 12C0.0715332 10.1049 0.532426 8.31776 1.34939 6.74414H1.35002L3.93894 7.21878L5.07305 9.79218C4.83568 10.4842 4.70631 11.227 4.70631 12C4.7064 12.839 4.85836 13.6428 5.13716 14.3843Z"
                          fill="#FBBB00"
                        />
                        <path
                          d="M22.7291 9.86499C22.8604 10.5563 22.9288 11.2703 22.9288 12C22.9288 12.8182 22.8428 13.6163 22.6789 14.3862C22.1225 17.006 20.6688 19.2936 18.655 20.9124L18.6544 20.9118L15.3935 20.7454L14.932 17.8644C16.2683 17.0807 17.3125 15.8543 17.8626 14.3862H11.7515V9.86499H17.9518H22.7291Z"
                          fill="#518EF8"
                        />
                        <path
                          d="M18.6543 20.9117L18.6549 20.9124C16.6964 22.4866 14.2085 23.4285 11.5002 23.4285C7.14788 23.4285 3.36391 20.9959 1.43359 17.416L5.13721 14.3843C6.10234 16.9601 8.58712 18.7937 11.5002 18.7937C12.7523 18.7937 13.9253 18.4552 14.9319 17.8643L18.6543 20.9117Z"
                          fill="#28B446"
                        />
                        <path
                          d="M18.7949 3.20248L15.0925 6.23355C14.0508 5.58239 12.8194 5.20623 11.5001 5.20623C8.52111 5.20623 5.98986 7.12396 5.07307 9.79213L1.34999 6.74409H1.34937C3.25142 3.0769 7.08312 0.571411 11.5001 0.571411C14.2731 0.571411 16.8156 1.55918 18.7949 3.20248Z"
                          fill="#F44336"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_37_11680">
                          <rect
                            width="22.8571"
                            height="22.8571"
                            fill="white"
                            transform="translate(0.0715332 0.571411)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="Google"
                  cssClass="justify-center gap-4"
                />
              </div>
              <div className="py-2 border-[1px] w-full text-lg font-bold text-center rounded ">
                <IconButton
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_37_11687)">
                        <path
                          d="M15.8067 4.36665H17.8934V0.732364C17.5334 0.68284 16.2953 0.571411 14.8534 0.571411C8.25149 0.571411 10.0477 8.0476 9.78482 9.14284H6.46387V13.2057H9.78387V23.4286H13.8543V13.2066H17.0401L17.5458 9.14379H13.8534C14.0324 6.45427 13.1286 4.36665 15.8067 4.36665Z"
                          fill="#3B5999"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_37_11687">
                          <rect
                            width="22.8571"
                            height="22.8571"
                            fill="white"
                            transform="translate(0.571533 0.571411)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="Facebook"
                  cssClass="justify-center gap-4"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            Don't have an account?
            <span
              className="font-bold text-lg cursor-pointer"
              onClick={handleSignUpToggle}
            >
              {" "}
              Sign Up now!
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
