import Link from "next/link";
import React, { ReactElement } from "react";

interface PaymentOptionProps {
  price?: string;
  message?: string;
  paymentOption?: string;
  option: string;
}

const PaymentOption = ({
  price,
  message,
  paymentOption,
  option,
}: PaymentOptionProps) => {
  return (
    <label
      htmlFor={`${option}`}
      className={`flex cursor-pointer items-center gap-4 bg-white p-4 rounded `}
    >
      <input
        id={`${option}`}
        type="radio"
        name="color"
        className="text-xs cursor-pointer"
      />

      <div className="flex flex-col ">
        <div className="font-bold"> {price}</div>
        <div className="text-xs">{message}</div>
        <div className="text-xs">{paymentOption}</div>
      </div>
    </label>
  );
};

export default PaymentOption;
