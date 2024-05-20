import React from "react";
import Image from "next/image";
import PaymentImage from "./common-component/PaymentImage";
const PaymentMethod = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl font-bold">Payment Method</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 w-full">
          <label htmlFor="cashon" className="w-full group  cursor-pointer">
            <div className="flex items-center gap-2 bg-white w-full p-4 rounded  group-hover:cursor-pointer">
              <input
                id="cashon"
                type="radio"
                name="location"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer  accent-black"
              />
              <Image
                className="group-hover:cursor-pointer"
                src={"/images/CashDeliveryIcon.png"}
                width={50}
                height={5}
                alt=""
              />
              <div>Cash on delivery</div>
            </div>
          </label>

          <label htmlFor="bkash" className="w-full group  cursor-pointer">
            <div className="flex items-center gap-2 bg-white w-full p-4 rounded group-hover:cursor-pointer">
              <input
                id="bkash"
                type="radio"
                name="location"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer accent-black"
              />
              <Image
                className="group-hover:cursor-pointer"
                src={"/images/bkash.png"}
                width={120}
                height={50}
                alt=""
              />
            </div>
          </label>
        </div>
        <div className="flex gap-5 w-full">
          <label htmlFor="nagad" className="w-full group  cursor-pointer">
            <div className="flex items-center gap-2 bg-white w-full p-4 rounded group-hover:cursor-pointer">
              <input
                id="nagad"
                type="radio"
                name="location"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer accent-black"
              />
              <Image
                className="group-hover:cursor-pointer"
                src={"/images/Nagad-Logo 1.png"}
                width={110}
                height={100}
                alt=""
              />
            </div>
          </label>

          <label htmlFor="rocket" className="w-full group  cursor-pointer">
            <div className="flex items-center gap-2 bg-white w-full p-4 rounded group-hover:cursor-pointer">
              <input
                id="rocket"
                type="radio"
                name="location"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer  accent-black"
              />
              <Image
                className="group-hover:cursor-pointer"
                src={"/images/Roket1.png"}
                width={85}
                height={100}
                alt=""
              />
            </div>
          </label>
        </div>
        <label htmlFor="card" className="w-full group  cursor-pointer">
          <div className="flex items-center gap-2 bg-white w-full p-4 rounded group-hover:cursor-pointer">
            <input
              id="card"
              type="radio"
              name="location"
              placeholder="Select Sub-District"
              className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer accent-black"
            />
            <div className="flex gap-4">
              <PaymentImage imageSource="/images/Rectangle66.png" width={40} />
              <PaymentImage imageSource="/images/Rectangle67.png" width={40} />
              <PaymentImage imageSource="/images/Rectangle68.png" width={40} />
              <PaymentImage imageSource="/images/Rectangle69.png" width={40} />
              <PaymentImage imageSource="/images/Rectangle70.png" width={40} />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
