import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import Card from "@/app/components/site/Card";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import NotificationCard from "@/app/components/site/NotificationCard";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

const Notifications = () => {
  return (
    <div className="py-10 ">
      <CategoryTitle title="Notifications" />
      <div className="flex flex-col gap-8 py-10">
        <div className="flex gap-4">
          <div className=" flex gap-2 items-center text-[rgba(10,122,255,1)]">
            <IoCheckmarkDoneSharp className="w-5 h-5" />
            <div>Mark as read</div>
          </div>

          <div className="flex gap-2 items-center px-4 py-1  bg-red-500 text-white rounded">
            <RiDeleteBin6Line className="w-5 h-5" />
            <div className="font-light"> Clear all</div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
