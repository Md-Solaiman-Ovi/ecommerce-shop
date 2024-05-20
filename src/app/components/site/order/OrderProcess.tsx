import React from "react";
import { GoDotFill } from "react-icons/go";
interface OrderProcessProps {
  title: string;
  cssClass: string;
  dotColor: string;
}
const OrderProcess = ({ title, cssClass, dotColor }: OrderProcessProps) => {
  return (
    <ul>
      <li className="relative flex gap-4 pb-10 items-baseline">
        <div className={`${cssClass} `}>
          <GoDotFill className={`w-7 h-7 ${dotColor} `} />
        </div>
        <div className="text-xl">{title}</div>
      </li>
    </ul>
  );
};

export default OrderProcess;
