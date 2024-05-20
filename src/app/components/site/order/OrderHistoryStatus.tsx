import React from "react";
import { GoDotFill } from "react-icons/go";
interface OrderHistoryStatusProps {
  title: string;
  desc: string;
  cssClass: string;
  dotColor: string;
}
const OrderHistoryStatus = ({
  title,
  desc,
  cssClass,
  dotColor,
}: OrderHistoryStatusProps) => {
  return (
    <ul>
      <li className="relative flex gap-4 pb-5 items-baseline">
        <div className={`${cssClass} `}>
          <GoDotFill className={`w-7 h-7 ${dotColor} `} />
        </div>
        <div className="flex flex-col gap-2 -translate-y-[7px]">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm">{desc}</div>
        </div>
      </li>
    </ul>
  );
};

export default OrderHistoryStatus;
