"use client";
import React from "react";
import IconButton from "./navbar/IconButton";
import { FaRegUser } from "react-icons/fa";
import CartSvgIcon from "./svg-icons/CartSvgIcon";
import OrderTrackingSvgIcon from "./svg-icons/OrderTrackingSvgIcon";
import ChangePasswordSvgIcon from "./svg-icons/ChangePasswordSvgIcon";
import AddressSvgIcon from "./svg-icons/AddressSvgIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdOutlineLogout } from "react-icons/md";
const ProfileInformation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-5 w-1/4 bg-white p-5 ">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full p-2">
          <Image
            src="/images/Ovi.jpg"
            className="rounded-full"
            alt=""
            width={60}
            height={40}
          />
        </div>
        <div>Md Solaiman Ovi</div>
        <div>msovi480@gmail.com</div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <IconButton
          linkpath="/my-account"
          icon={<FaRegUser className="w-4 h-4 " />}
          title="My Account"
          cssClass={`gap-5 rounded  p-2 ${
            pathname == "/my-account"
              ? "bg-[rgba(43,59,77,1)] text-white "
              : "bg-white"
          } `}
        />
        <IconButton
          linkpath="/my-orders"
          icon={<CartSvgIcon pathname="/my-orders" />}
          title="My Orders"
          cssClass={`gap-5 rounded p-2 ${
            pathname == "/my-orders"
              ? "bg-[rgba(43,59,77,1)] text-white "
              : "bg-white"
          } `}
        />
        <IconButton
          linkpath="/order-tracking"
          icon={<OrderTrackingSvgIcon width="20" height="20" />}
          title="Order Tracking"
          cssClass={`gap-5 rounded p-2 ${
            pathname == "/order-tracking"
              ? "bg-[rgba(43,59,77,1)] text-white"
              : "bg-white"
          } `}
        />
        <IconButton
          linkpath="/change-password"
          icon={<ChangePasswordSvgIcon />}
          title="Chnange Password"
          cssClass={`gap-5 rounded  p-2 ${
            pathname == "/change-password"
              ? "bg-[rgba(43,59,77,1)] text-white"
              : "bg-white"
          } `}
        />
        <IconButton
          linkpath="/address"
          icon={<AddressSvgIcon />}
          title="Address"
          cssClass={`gap-5 rounded p-2 ${
            pathname == "/address"
              ? "bg-[rgba(43,59,77,1)] text-white text-white"
              : "bg-white text-black"
          } `}
        />
        <IconButton
          linkpath="/"
          icon={<MdOutlineLogout className="w-5 h-5 text-red-500" />}
          title="Logout"
          cssClass={`gap-5 rounded p-2 ${
            pathname == "/logout"
              ? "bg-[rgba(43,59,77,1)] text-white"
              : "bg-white"
          } `}
        />
      </div>
    </div>
  );
};

export default ProfileInformation;
