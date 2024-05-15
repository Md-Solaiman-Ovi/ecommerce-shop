/* eslint-disable react/no-unescaped-entities */
import React from "react";

const CheckEmail = () => {
  return (
    <div className="bg-white px-[100px] py-[50px] w-[700px]  mx-5 flex flex-col gap-[60px] rounded-xl ">
      <div className="flex flex-col justify-center gap-5 items-center">
        <div className="text-xl font-bold ">Check Your E-mail</div>
        <div>
          <svg
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.9998 67.3333C52.4093 67.3333 67.3332 52.4095 67.3332 34C67.3332 15.5905 52.4093 0.666626 33.9998 0.666626C15.5903 0.666626 0.666504 15.5905 0.666504 34C0.666504 52.4095 15.5903 67.3333 33.9998 67.3333ZM52.5291 25.6675C53.4501 24.6389 53.3627 23.0583 52.3341 22.1374C51.3054 21.2164 49.7249 21.3037 48.8039 22.3324L37.5733 34.8763C35.2977 37.4181 33.7652 39.1209 32.4549 40.2222C31.2067 41.2713 30.4736 41.5 29.8332 41.5C29.1927 41.5 28.4596 41.2713 27.2114 40.2222C25.9012 39.1209 24.3687 37.4181 22.093 34.8763L19.1958 31.6403C18.2748 30.6116 16.6943 30.5243 15.6656 31.4452C14.6369 32.3662 14.5496 33.9467 15.4706 34.9754L18.4916 38.3497C20.6111 40.7172 22.379 42.692 23.9943 44.0497C25.7031 45.486 27.5463 46.5 29.8332 46.5C32.1201 46.5 33.9632 45.486 35.672 44.0497C37.2874 42.692 39.0552 40.7173 41.1747 38.3497L52.5291 25.6675Z"
              fill="#18293B"
            />
          </svg>
        </div>
        <div className="text-base w-3/4 text-center">
          Please check the email we've sent an email for the password change
          introduction.
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
