import Card from "@/app/components/site/Product/product-card/ProductCard";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import NotificationCard from "@/app/components/site/NotificationCard";
import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from "@/app/components/site/Container";

const Notifications = () => {
  return (
    <Container className="py-10 ">
      <CategoryTitle title="Notifications" />
      <div className="flex flex-col gap-8 py-10">
        <div className="flex gap-4">
          <div className=" flex gap-2 items-center text-[rgba(10,122,255,1)] group">
            <IoCheckmarkDoneSharp className="w-5 h-5 group-hover:cursor-pointer" />
            <div className="group-hover:cursor-pointer">Mark as read</div>
          </div>

          <div className="flex gap-2 items-center px-4 py-1  bg-red-500 text-white rounded group">
            <RiDeleteBin6Line className="w-5 h-5 group-hover:cursor-pointer " />
            <div className="font-light group-hover:cursor-pointer">
              Clear all
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white w-full">
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
    </Container>
  );
};

export default Notifications;
