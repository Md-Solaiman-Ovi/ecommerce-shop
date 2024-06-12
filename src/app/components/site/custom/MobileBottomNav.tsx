"use client";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import IconButton from "../navbar/IconButton";
import { BiCategory } from "react-icons/bi";
import { PiHeartBold } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import CategoryLinkIcon from "../home/hero-section/CategoryLinkIcon";
import MobileSideCategory from "./MobileSideCategory";
import { Contact } from "lucide";
import ContactIcon from "../navbar/ContactIcon";

const MobileBottomNav = () => {
  const [showSideCategory, setShowSideCategory] = useState(false);
  const ToggleCategories = () => {
    setShowSideCategory(!showSideCategory);
  };
  return (
    <div className="fixed bottom-0 z-40 bg-slate-50 mx-auto px-4 py-2 w-full flex items-center justify-between text-xs">
      <IconButton
        linkpath="/"
        icon={<IoHomeOutline className="w-4 h-4" />}
        title="Home"
        cssClass="flex-col gap-1 py-2  focus:text-red-500"
      />
      <div
        onClick={() => {
          setShowSideCategory(!showSideCategory);
        }}
      >
        <ContactIcon
          icon={<BiCategory className="w-4 h-4" />}
          title="Categories"
          cssClass="flex-col gap-1 py-2 cursor-pointer  focus:text-red-500"
        />
      </div>

      <IconButton
        linkpath="/cart"
        icon={<BsCart3 className="w-4 h-4" />}
        title="Cart(0)"
        cssClass="flex-col gap-1 py-2  focus:text-red-500"
      />
      <IconButton
        linkpath="/notifications"
        icon={<MdOutlineNotificationsActive className="w-4 h-4" />}
        title="Notifications"
        cssClass="flex-col gap-1 py-2  focus:text-red-500"
      />
      <IconButton
        linkpath="/"
        icon={<FaRegUser className="w-4 h-4" />}
        title="Sign In"
        cssClass="flex-col gap-1 py-2  focus:text-red-500 "
      />
      {showSideCategory && (
        <div
          className="w-screen h-screen  left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex j items-center fixed z-50"
          onClick={ToggleCategories}
        >
          <div
            className="h-screen bg-white w-80 animate__animated animate__fadeInLeft"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <MobileSideCategory ToggleCategories={ToggleCategories} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileBottomNav;
