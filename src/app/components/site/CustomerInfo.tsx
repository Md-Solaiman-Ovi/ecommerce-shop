"use client";
import { Divide } from "lucide";
import React, { useState } from "react";

const CustomerInfo = () => {
  const [selctDivision, setSelectDivision] = useState(false);
  return (
    <div className="flex flex-col gap-6 bg-white rounded-lg p-4 ">
      <div className="text-xl font-bold">Customer Information</div>
      <div className="flex flex-col gap-6">
        <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            Name *
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="text-xs w-full h-full focus:outline-none pb-2 "
          />
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Contact Number *
            </span>
            <input
              type="text"
              placeholder="Phone No"
              className="text-xs w-full h-full focus:outline-none pb-2 "
            />
          </div>
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Contact Email *
            </span>
            <input
              type="text"
              placeholder="Contact Email"
              className="text-xs w-full h-full focus:outline-none pb-2 "
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Division *
            </span>
            <select className="text-sm focus:outline-none w-full cursor-pointer">
              {" "}
              <option value="" disabled={true}>
                Select Category
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
          </div>
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              District *
            </span>
            <select className="text-sm focus:outline-none w-full cursor-pointer pb-2">
              {" "}
              <option value="" disabled={true}>
                Select Category
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div
            className="border-[1px] border-black rounded p-2 w-1/2 md:w-full"
            // onClick={() => {
            //   setSelectDivision(true);
            // }}
          >
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Sub-district (upazila) *
            </span>
            {/* {selctDivision && ( */}
            <select className="text-sm focus:outline-none w-full cursor-pointer ">
              {" "}
              <option value="">Select Category</option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
            {/* )} */}
          </div>
          <div className="flex items-center gap-0 md:gap-8  w-1/2 md:w-full ">
            <label htmlFor="inside" className="w-1/2 md:w-full group">
              <div className="flex items-center gap-2 bg-white w-full p-4 rounded group">
                <input
                  id="inside"
                  type="radio"
                  name="location1"
                  placeholder="Select Sub-District"
                  className="text-xs  w-5 h-5 group-hover:cursor-pointer  "
                />

                <label
                  htmlFor="inside"
                  className="text-xs md:text-sm group-hover:cursor-pointer"
                >
                  Inside City
                </label>
              </div>
            </label>
            <label htmlFor="outside" className="w-1/2 md:w-full group">
              <div className="flex items-center gap-2 bg-white w-full p-4 rounded group ">
                <input
                  id="outside"
                  type="radio"
                  name="location1"
                  placeholder="Select Sub-District"
                  className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer  "
                />

                <label
                  htmlFor="outside"
                  className="text-xs md:text-sm group-hover:cursor-pointer"
                >
                  Outside City
                </label>
              </div>
            </label>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Area *
            </span>
            <input
              type="text"
              placeholder="Enter Area"
              className="text-xs w-full h-full focus:outline-none pb-2 "
            />
          </div>
          <div className="border-[1px] border-black rounded p-2 w-full">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
              Street Address *
            </span>
            <input
              type="text"
              placeholder="Enter road no, block/sector"
              className="text-xs w-full h-full focus:outline-none pb-2 "
            />
          </div>
        </div>
        <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            Address *
          </span>
          <input
            type="text"
            placeholder="Address"
            className="text-xs w-full h-full focus:outline-none py-1 pb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
