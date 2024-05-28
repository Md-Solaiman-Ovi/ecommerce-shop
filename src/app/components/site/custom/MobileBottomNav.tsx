import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import IconButton from "../navbar/IconButton";
import { BiCategory } from "react-icons/bi";
import { PiHeartBold } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const MobileBottomNav = () => {
  return (
    <div className="fixed bottom-0 z-50 bg-slate-50 mx-auto px-4 py-2 w-full flex items-center justify-between text-xs">
      <IconButton
        linkpath="/"
        icon={<IoHomeOutline className="w-4 h-4" />}
        title="Home"
        cssClass="flex-col gap-1 py-2  focus:text-red-500"
      />
      <IconButton
        linkpath="/"
        icon={<BiCategory className="w-4 h-4" />}
        title="Categories"
        cssClass="flex-col gap-1 py-2  focus:text-red-500"
      />

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
    </div>
  );
};

export default MobileBottomNav;
