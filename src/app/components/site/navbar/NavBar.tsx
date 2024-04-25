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
import Container from "../Container";
import { IoSearchOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import IconButton from "./IconButton";
import ContactIcon from "./ContactIcon";
import SocialIcon from "../common-component/SocialIcon";

const NavBar = () => {
  const linkPath = "/wishlist";
  return (
    <div className="top-0 sticky z-50">
      <div className="h-[40px] bg-[rgba(43,59,77,1)] border-b-[1px] border-gray-600 items-center hidden md:flex">
        <div className="flex justify-center gap-4 lg:justify-between items-center text-white font-normal text-sm container ">
          <div className="flex gap-24 ">
            <ContactIcon
              icon={<MdOutlineEmail className="w-4 h-4 " />}
              title="youremail@gmail.com"
            />
            <ContactIcon
              icon={<FiPhone className="w-4 h-4 " />}
              title="+12 34 56789 1011"
            />
          </div>
          <div className="flex gap-10">
            <div className="flex gap-2 items-center">
              <SocialIcon
                linkpath="/"
                icon={<BiLogoFacebook className="w-4 h-4 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<GrTwitter className="w-4 h-4 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<TiSocialLinkedin className="w-4 h-4 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<FaInstagram className="w-4 h-4 cursor-pointer" />}
              />
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
            <IconButton
              linkpath="/wishlist"
              icon={<PiHeartBold className="w-5 h-5" />}
              title="Wishlist"
            />
            <IconButton
              linkpath="/cart"
              icon={<BsCart3 className="w-5 h-5" />}
              title="Cart"
            />
            <IconButton
              linkpath="/notifications"
              icon={<MdOutlineNotificationsActive className="w-5 h-5" />}
              title="Notifications"
            />
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
