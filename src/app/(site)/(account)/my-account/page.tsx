"use client";
import Container from "@/app/components/site/Container";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import React from "react";

const MyAccount = () => {
  return (
    <div className=" bg-white p-4 md:p-10 flex flex-col gap-[30px] rounded">
      <div className="text-xl font-medium">Account information</div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              First Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="Md Solaiman"
              className="text-xs w-full h-12 rounded px-2 "
            />
          </div>
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              Last Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="Ovi"
              className="text-xs w-full h-12 rounded px-2 "
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              Date of Birth <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="01/01/1996"
              className="text-xs text-black w-full h-12 rounded px-2 "
            />
          </div>
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              Gender <span className="text-red-500">*</span>
            </span>

            <div className="flex gap-5 p-2 py-3">
              <label htmlFor="male" className=" group">
                <div className="flex items-center gap-2 bg-white w-full rounded group">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    placeholder="Select Sub-District"
                    className="text-xs w-4 h-4 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)] "
                  />

                  <label
                    htmlFor="male"
                    className="text-sm group-hover:cursor-pointer"
                  >
                    Male
                  </label>
                </div>
              </label>
              <label htmlFor="fema;e" className=" group">
                <div className="flex items-center gap-2 bg-white w-full rounded group">
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    placeholder="Select Sub-District"
                    className="text-xs focus:outline-none w-4 h-4 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)]"
                  />

                  <label
                    htmlFor="female"
                    className="text-sm group-hover:cursor-pointer"
                  >
                    Female
                  </label>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-5">
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              Contact Number <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="+8801840000000"
              className="text-xs w-full h-12 rounded px-2 "
            />
          </div>
          <div className="border-[1px] border-black rounded w-full">
            <span className="absolute -translate-y-2 translate-x-4 bg-white px-1 text-xs ">
              Email Address <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="msovi480@gmail.com"
              className="text-xs w-full h-12 rounded px-2 "
            />
          </div>
        </div>
      </div>
      <div className="text-lg bg-[rgba(24,41,59,1)] text-white w-full text-center py-[10px] rounded cursor-pointer">
        Save
      </div>
    </div>
  );
};

export default MyAccount;
