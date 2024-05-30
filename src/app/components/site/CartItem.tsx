import React from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
const CartItem = () => {
  return (
    <div className="text-sm  flex items-center text-center w-full border-b pb-2 ">
      <div className="flex justify-normal items-center w-5/6">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className=" md:text-center p-1 w-full lg:w-3/5  flex flex-row  items-center gap-2">
            <div className="flex items-center text-center w-1/3 ">
              <Image
                src={"/images/productImg1.png"}
                width={90}
                height={100}
                alt=""
                className="onject-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-start  md:items-center text-start lg:text-center w-2/3">
              <div className="w-full md:text-lg lg:text-base font-semibold md:font-light">
                Apple iPhone 14 Pro
              </div>
              <div className="lg:text-center  w-full">TK 149,999 </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5 flex  justify-between items-center gap-4">
            <div className="text-center p-1 w-full">
              <div className="flex items-center justify-center gap-2 lg:gap-4">
                <div className="cursor-pointer">
                  <CiCircleMinus className="size-7" />
                </div>
                <div className=" ">1</div>
                <div className="cursor-pointer ">
                  <CiCirclePlus className="size-7" />
                </div>
              </div>
            </div>
            <div className="text-center p-1 w-full">TK 149,999</div>
          </div>
        </div>
      </div>
      <div className="text-center p-1 lg:w-1/6 flex justify-center   ">
        <MdClear className="w-5 h-5 cursor-pointer hover:fill-red-500 hover:scale-125" />
      </div>
    </div>
  );
};

export default CartItem;
