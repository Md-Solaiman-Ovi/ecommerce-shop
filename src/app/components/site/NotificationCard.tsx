import React from "react";
import { GoDotFill } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";

const NotificationCard = () => {
  return (
    <div className="flex items-center gap-4 rounded">
      <div className="flex gap-4 items-center border-r-[1px] p-4 ">
        <GoDotFill />
        <div className="bg-green-500 rounded-full text-white w-10 h-10 flex justify-center items-center">
          <IoCheckmarkSharp className="w-7 h-7 " />
        </div>
      </div>
      <div className="flex flex-col gap-4  border-b-[1px] p-4  w-full">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className="flex gap-4">
          <div>06 hours ago</div>
          <div>03:06PM</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
