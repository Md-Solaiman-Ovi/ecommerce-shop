"use client";
import React, { ReactNode, useState } from "react";
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
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import IconButton from "./IconButton";
import ContactIcon from "./ContactIcon";
import SocialIcon from "../common-component/SocialIcon";
import { toggleIsSignInOpen } from "@/app/redux/globalStateSlice";
import SignIn from "../login/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { GlobalState } from "@/app/redux/globalStateSlice";
const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  // const isSignInOpen = useSelector((state: any) => {
  //   console.log(state.globalState.isSignInOpen);
  // });
  // const dispatch = useDispatch();

  return (
    <>
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
              <div
                className="flex gap-2 items-center cursor-pointer"
                // onClick={() => dispatch(toggleIsSignInOpen())}
                onClick={() => setIsSignInOpen(!isSignInOpen)}
              >
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
                cssClass="flex-col gap-1"
              />
              <IconButton
                linkpath="/cart"
                icon={<BsCart3 className="w-5 h-5" />}
                title="Cart"
                cssClass="flex-col gap-1"
              />
              <IconButton
                linkpath="/notifications"
                icon={<MdOutlineNotificationsActive className="w-5 h-5" />}
                title="Notifications"
                cssClass="flex-col gap-1"
              />
            </div>
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              <TfiMenuAlt className="w-5 h-5" />
            </div>
            {menu && (
              <div
                className={`block md:hidden cursor-pointer absolute w-full ${
                  menu ? "transition  " : ""
                }flex flex-col text-start left-0 top-[70px] bg-[rgba(0,0,0,0.6)] p-4`}
              >
                <IconButton
                  linkpath="/"
                  icon={<IoHomeOutline className="w-5 h-5" />}
                  title="Home"
                  cssClass="flex-row gap-4 py-2 border-b-[1px]"
                />
                <IconButton
                  linkpath="/wishlist"
                  icon={<PiHeartBold className="w-5 h-5" />}
                  title="Wishlist"
                  cssClass="flex-row gap-4 py-2 border-b-[1px]"
                />
                <IconButton
                  linkpath="/cart"
                  icon={<BsCart3 className="w-5 h-5" />}
                  title="Cart"
                  cssClass="flex-row gap-4 py-2 border-b-[1px]"
                />
                <IconButton
                  linkpath="/notifications"
                  icon={<MdOutlineNotificationsActive className="w-5 h-5" />}
                  title="Notifications"
                  cssClass="flex-row gap-4 py-2 border-b-[1px]"
                />
                <IconButton
                  linkpath="/signin"
                  icon={<FaRegUser className="w-5 h-5" />}
                  title="Sign In"
                  cssClass="flex-row gap-4 py-2 "
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isSignInOpen && (
        <div className="absolute w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center ">
          <SignIn />
        </div>
      )}
    </>
  );
};

export default NavBar;
