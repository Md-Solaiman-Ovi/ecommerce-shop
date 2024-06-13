"use client";
import React, { useRef, useState } from "react";
import OptionSelector from "./OptionSelector";
import PaymentOption from "../common-component/PaymentOption";

interface Props {
  options: {
    Colors: string[];
    Storage: string[];
  };
}
const ProductDetailsInfo = (props: Props) => {
  const { Colors, Storage } = props.options;
  const [quantityCount, setQuantityCount] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const increase = () => {
    setQuantityCount((prevValue) => {
      const newValue = prevValue + 1;
      return newValue > 1000 ? 1000 : newValue;
    });
  };

  const decrease = () => {
    setQuantityCount((prevValue) => {
      const newValue = prevValue - 1;
      return newValue < 1 ? 1 : newValue;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue <= 1000) {
      setQuantityCount(newValue);
    } else if (newValue > 1000) {
      setQuantityCount(1000);
    }
  };

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex gap-5">
        <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
          15 In Stock
        </div>
        <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
          16% Off
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Apple iPhone 14 Pro Max</div>
        <div className="flex gap-5 text-xl ">
          <div className="line-through">TK 150,000</div>
          <div>TK 149,999</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="text-lg font-bold">Key Feature</div>
        <ul className="text-sm leading-[28px] list-outside list-disc p-4">
          <li>Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display</li>
          <li>All new A16 Bionic chip</li>
          <li>48MP main camera</li>
          <li>Advance selfie camera</li>
          <li>Up to 29-hour battery life</li>
          <li>Available in Space Black, Silver, Gold, and Deep Purple</li>
          <li>Connect to a satellite for emergency services</li>
          <li>Model A2651</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <OptionSelector title="Color" option={Colors} />
        <OptionSelector title="Storage" option={Storage} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">Payment Options</div>
        <div className="flex gap-5 w-full">
          <PaymentOption
            option="option1"
            price="95000 TK"
            message="Cash Discount Price"
            paymentOption="Online / Cash Payment"
          />
          <PaymentOption
            option="option2"
            price="16,917 TK"
            message="Regular Price: 101,500 TK"
            paymentOption="0% EMI for 6 Months"
          />
        </div>
      </div>
      <div className="flex gap-10 items-center  ">
        <div className="flex  items-center rounded">
          <div
            className="bg-white p-2 md:px-5 md:py-3 font-bold text-2xl cursor-pointer "
            onClick={decrease}
          >
            -
          </div>

          <input
            className="bg-white p-2 md:py-3 font-bold border-x-[1px] text-2xl  outline-none focus:outline-none text-center w-16 text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 "
            ref={inputRef}
            value={quantityCount}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onClick={handleInputClick}
          ></input>

          <div
            className="bg-white p-2 md:px-5 md:py-3 font-bold text-2xl cursor-pointer flex"
            onClick={increase}
          >
            +
          </div>
        </div>

        <div className="bg-[rgba(24,41,59,1)] p-3  md:text-2xl w-full text-white text-center md:py-2 rounded self-center cursor-pointer">
          Buy
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
