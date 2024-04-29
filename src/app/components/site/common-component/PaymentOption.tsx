import Link from "next/link";
import React, { ReactElement } from "react";

interface PaymentOptionProps {
  price?: string;
  message?: string;
  paymentOption?: string;
}

const PaymentOption = ({
  price,
  message,
  paymentOption,
}: PaymentOptionProps) => {
  return (
    <div
      className={`flex  items-center gap-4 bg-white p-4 rounded focus:border-[1px]`}
    >
      <input
        id="radio-2"
        type="radio"
        name="color"
        className="text-xs focus:outline-none rounded-full"
      />

      <div className="flex flex-col  gap-0">
        <label
          htmlFor="radio-1 "
          className=" cursor-pointer font-bold  text-xl"
        >
          {price}
        </label>
        <div className="text-xs">{message}</div>
        <div className="text-xs">{paymentOption}</div>
      </div>
    </div>
  );
};

export default PaymentOption;
