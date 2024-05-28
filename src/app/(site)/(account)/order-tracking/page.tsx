/* eslint-disable react/no-unescaped-entities */
import Container from "@/app/components/site/Container";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import TrackingLocationSvgIcon from "@/app/components/site/svg-icons/TrackingLocationSvgIcon";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";

const OrderTracking = () => {
  return (
    <div className=" bg-white p-10 flex flex-col gap-[30px] rounded">
      <div className="flex flex-col justify-center gap-[10px] text-center">
        <div className="text-xl font-bold">Check Your Order Status</div>
        <div className="flex flex-col text-sm">
          <div>
            To track Your Order Please Enter Your Order ID In The Box Below And{" "}
          </div>
          <div>Press The "Track" Button.</div>
        </div>
      </div>
      <div className="flex w-full rounded items-center mt-2 xl:mt-[50px]">
        <input
          type="text"
          placeholder="Enter your order ID"
          className="bg-[rgba(231,234,239,1)] p-3 w-full rounded-l-xl"
        />

        <div className="flex items-center justify-center gap-4 bg-[rgba(254,196,0,1)] text-center w-1/4 p-[10px] rounded-r-md">
          <BsSearch className="w-5 h-5 text-black" />
          <div className="text-lg">Track</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-2 xl:mt-[50px]">
        <div className="text-lg font-bold">Update:</div>
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-10 text-sm">
          <div className="flex flex-col gap-3 w-2/3">
            <div className="font-bold ">Date:</div>
            <div>12/05/24</div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="font-bold ">Location:</div>
            <div>8502 Preston Rd. Inglewood, Maine 98380</div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="font-bold ">Delivery Address:</div>
            <div>3891 Ranchview Dr. Richardson, California 62639</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2 xl:mt-[50px] object-cover">
        <div className="w-full h-5 bg-[rgba(231,234,239,1)] rounded-full ">
          <div
            className={`h-5 bg-[rgba(35,47,62,1)] rounded-full w-48 xl:w-72 `}
          ></div>
          <div className="-translate-y-1 translate-x-3 absolute ">
            <IoTriangle className="w-5 h-5 rotate-180 text-[rgba(35,47,62,1)]" />
          </div>
          <div className="-translate-y-1 translate-x-20 xl:translate-x-60 absolute ">
            <IoTriangle className="w-5 h-5 rotate-180 text-[rgba(35,47,62,1)]" />
          </div>
        </div>
        <div className="flex justify-between text-sm xl:text-xl ">
          <div className=" text-start ">Order</div>
          <div className="flex gap-2 items-center text-center">
            <TrackingLocationSvgIcon />
            <div>In Transit</div>
          </div>
          <div className=" text-center text-gray-400">Pick Up</div>
          <div className=" text-end text-gray-400">Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
