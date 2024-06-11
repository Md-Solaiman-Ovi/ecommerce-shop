import Image from "next/image";
import React from "react";
import { FaRegCircleCheck, FaSquareCheck } from "react-icons/fa6";
import { PiStarBold } from "react-icons/pi";
import { RiCloseLargeFill } from "react-icons/ri";

const QuickViewCard = ({ handleToggle }: any) => {
  return (
    <div className="relative bg-white p-8 md:w-[700px] md:h-96 flex flex-col md:flex-row gap-4 rounded-xl">
      <div className="md:w-1/2 object-cover flex justify-center">
        <Image
          src={"/images/productImg1.png"}
          width={200}
          height={200}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 md:w-1/2">
        <div className="flex flex-col">
          <div className="text-xl font-bold">Apple iPhone 14 Pro Max</div>
          <div className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              <PiStarBold className="fill-yellow-500" />
              <PiStarBold className="fill-yellow-500" />
              <PiStarBold className="fill-yellow-500" />
              <PiStarBold className="fill-yellow-500" />
              <PiStarBold className="fill-yellow-500" />
            </div>
            <div className="text-sm"> 4.0/5.0 Rating </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaRegCircleCheck className="text-green-600" /> In Stock
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">$29.00</div>
          <div className="text-xs text-slate-400">+12% VAT Added</div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Select Size</div>
          <div className="flex items-center gap-2">
            <div className="p-1 rounded shadow-sm  bg-gray-300 w-10 text-center cursor-pointer ">
              S
            </div>
            <div className="p-1 rounded shadow-sm bg-gray-300 w-10 text-center cursor-pointer">
              M
            </div>
            <div className="p-1 rounded shadow-sm bg-gray-300 w-10 text-center cursor-pointer ">
              XL
            </div>
            <div className="p-1 rounded shadow-sm bg-gray-300 w-10 text-center cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Choose Color</div>
          <div className="flex">
            <FaSquareCheck className="text-gray-500  w-7 h-7 cursor-pointer" />
            <FaSquareCheck className="text-red-500  w-7 h-7 cursor-pointer" />
            <FaSquareCheck className="text-blue-500  w-7 h-7 cursor-pointer" />
            <FaSquareCheck className="text-green-500  w-7 h-7 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-yellow-500 px-4 py-2 rounded font-bold cursor-pointer">
            Add to Cart
          </div>
          <div className="bg-slate-200 px-4 py-2 rounded font-bold cursor-pointer">
            View Details
          </div>
        </div>
      </div>
      <div
        className="absolute right-1 top-1 cursor-pointer flex justify-center items-center hover:bg-red-500  w-10 h-10 border-[1px] rounded-full group shadow-md"
        onClick={handleToggle}
      >
        <RiCloseLargeFill className="w-5 h-5 text-red-600 group-hover:text-white" />
      </div>
    </div>
  );
};

export default QuickViewCard;
