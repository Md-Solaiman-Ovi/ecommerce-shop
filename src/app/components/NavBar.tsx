import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsCart3, BsSearch } from "react-icons/bs";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { MdOutlineEmail, MdOutlineNotificationsActive } from "react-icons/md";
import { PiHeartBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";

const NavBar = () => {
  return (
    <div className="">
      <div className="h-[40px] bg-[rgba(43,59,77,1)] flex items-center">
        <div className="flex justify-between items-center container text-white font-normal text-sm    ">
          <div className="flex gap-24 ">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="w-4 h-4 " />
              <div>youremail@gmail.com</div>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="w-4 h-4" /> <div>+12 34 56789 1011</div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <BiLogoFacebook className="w-4 h-4" />
              <GrTwitter className="w-4 h-4" />
              <TiSocialLinkedin className="w-5 h-5" />
              <FaInstagram className="w-4 h-4" />
            </div>

            <div className="flex gap-2 items-center">
              <TfiWorld className="w-4 h-4 " />
              <div>English</div>
              <RiArrowDropDownLine className="w-5 h-5 " />
            </div>
            <div className="flex gap-2 items-center">
              <FaRegUser className="w-4 h-4 " />
              <div>Sign In</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70px] bg-[rgba(35,47,62,1)] flex items-center">
        <div className=" flex justify-between items-center container text-white font-normal text-sm  ">
          <div className="font-family-forte text-[30px] ">E-commerce</div>
          <div className="lg:flex hidden w-full max-w-[500px] border-[1px] border-white rounded ">
            <input
              className=" px-6 py-2 w-full"
              type="text"
              placeholder="Search "
            />
            <div className="bg-yellow-400 rounded-r text-white text-[26px] grid place-items-center px-4 ">
              <BsSearch className="w-5 h-5 text-black" />
            </div>
          </div>
          <div className="flex gap-8 text-xs font-light">
            <div className="flex flex-col gap-1 items-center cursor-pointer">
              <PiHeartBold className="w-5 h-5 " />
              <div> Wishlist</div>
            </div>
            <div className="flex flex-col gap-1 items-center cursor-pointer">
              <BsCart3 className="w-5 h-5 " />
              <div>Cart</div>
            </div>
            <div className="flex flex-col gap-1 items-center cursor-pointer">
              <MdOutlineNotificationsActive className="w-5 h-5 " />
              <div className="cursor-pointer">Notifications</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
