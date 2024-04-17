import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsCart, BsCart3, BsSearch } from "react-icons/bs";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { MdOutlineEmail, MdOutlineNotificationsActive } from "react-icons/md";
import { PiHeartBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiMenuAlt, TfiWorld } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";
import Container from "./Container";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="top-0 sticky z-50">
      <div className="h-[40px]  bg-[rgba(43,59,77,1)]  items-center hidden md:flex">
        <div className="flex justify-center gap-4 lg:justify-between items-center text-white font-normal text-sm container ">
          <div className="flex gap-24 ">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="w-4 h-4 " />
              <div className="cursor-text">youremail@gmail.com</div>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="w-4 h-4 cursor-text" />{" "}
              <div>+12 34 56789 1011</div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <BiLogoFacebook className="w-4 h-4 cursor-pointer" />
              <GrTwitter className="w-4 h-4 cursor-pointer" />
              <TiSocialLinkedin className="w-5 h-5 cursor-pointer" />
              <FaInstagram className="w-4 h-4 cursor-pointer" />
            </div>

            <div className="flex gap-2 items-center cursor-pointer">
              <TfiWorld className="w-4 h-4 " />
              <div>English</div>
              <RiArrowDropDownLine className="w-5 h-5 " />
            </div>
            <div className="flex gap-2 items-center cursor-pointer">
              <FaRegUser className="w-4 h-4 " />
              <div>Sign In</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] bg-[rgba(35,47,62,1)] flex items-center ">
        <div className="flex justify-between items-center  text-white font-normal text-sm container">
          <Link
            href="/"
            className="font-family-forte text-[30px] cursor-pointer "
          >
            E-commerce
          </Link>
          <div className="lg:flex hidden w-full max-w-xl border-[1px] border-white rounded ">
            <input
              className=" px-6 py-2 w-full flex-1"
              type="text"
              placeholder="Search "
            />
            <div className="bg-yellow-400 rounded-r text-white text-[26px] grid place-items-center px-4 ">
              <BsSearch className="w-5 h-5 text-black" />
            </div>
          </div>
          <div className="md:flex gap-8 text-xs font-light hidden ">
            <Link
              href="/wishlist"
              className="flex flex-col gap-1 items-center cursor-pointer"
            >
              <PiHeartBold className="w-5 h-5 " />
              <div> Wishlist</div>
            </Link>
            <Link
              href="/cart"
              className="flex flex-col gap-1 items-center cursor-pointer"
            >
              <BsCart3 className="w-5 h-5 " />
              <div>Cart</div>
            </Link>
            <Link
              href="/notifications"
              className="flex flex-col gap-1 items-center cursor-pointer"
            >
              <MdOutlineNotificationsActive className="w-5 h-5 " />
              <div className="cursor-pointer">Notifications</div>
            </Link>
          </div>
          <div className="block md:hidden">
            <TfiMenuAlt className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
