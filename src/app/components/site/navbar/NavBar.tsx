"use client";
import React, { ReactNode, useState } from "react";
import { BiCategory, BiLogoFacebook } from "react-icons/bi";
import { BsCart, BsCart3, BsSearch } from "react-icons/bs";
import { FaInstagram, FaRegUser } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import {
  MdArrowForwardIos,
  MdOutlineEmail,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { PiHeartBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiMenuAlt, TfiWorld } from "react-icons/tfi";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoHomeOutline, IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import IconButton from "./IconButton";
import ContactIcon from "./ContactIcon";
import SocialIcon from "../common-component/SocialIcon";
import SignIn from "../login/SignIn";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store";
import {
  toggleVisibility,
  signInVisibility,
  signUpVisibility,
  resetPasswordVisibility,
  newPasswordVisibility,
  setShowCategoryList,
  toggleCategoryList,
  toggleMenu,
  togglePopUpModal,
} from "@/app/redux/globalStateSlice";
import SignUp from "../login/SignUp";
import EnterEmailResetPassword from "../password/EnterEmailResetPassword";
import CreateNewPassword from "../password/CreateNewPassword";
import CheckEmail from "../password/CheckEmail";
import ContactSvgIcon from "../svg-icons/ContactSvgIcon";
import EmailSvgIcon from "../svg-icons/EmailSvgIcon";
import EarthSvgIcon from "../svg-icons/EarthSvgIcon";
import WishSvgIcon from "../svg-icons/WishSvgIcon";
import CartSvgIcon from "../svg-icons/CartSvgIcon";
import NotificationSvgIcon from "../svg-icons/NotificationSvgIcon";
import CategoryList from "../home/hero-section/CategoryList";
import QuickViewCard from "../Product/product-card/QuickViewCard";

const NavBar = () => {
  const pathname = usePathname();
  const [focused, setFocused] = useState(false);
  const [suggetions, setSuggetions] = useState(false);
  const isVisible = useSelector(
    (state: RootState) => state.globalState.isVisible
  );
  const menu = useSelector((state: RootState) => state.globalState.menu);
  const isSignInVisible = useSelector(
    (state: RootState) => state.globalState.isSignInVisible
  );
  const isSignUpVisible = useSelector(
    (state: RootState) => state.globalState.isSignUpVisible
  );
  const isResetPasswordVisible = useSelector(
    (state: RootState) => state.globalState.restPasswordVisible
  );
  const isNewPasswordVisible = useSelector(
    (state: RootState) => state.globalState.newPasswordVisible
  );
  const isSignAlertInVisible = useSelector(
    (state: RootState) => state.globalState.isSignInAlertVisible
  );
  const showCategoryButton = useSelector(
    (state: RootState) => state.globalState.showCategoryButton
  );
  const openCategoryList = useSelector(
    (state: RootState) => state.globalState.openCategoryList
  );
  const popUpModal = useSelector(
    (state: RootState) => state.globalState.popUpModal
  );
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleVisibility());
    dispatch(signInVisibility(true));
    dispatch(signUpVisibility(false));
    dispatch(resetPasswordVisibility(false));
    dispatch(newPasswordVisibility(false));
  };

  const handleQuickViewModal = () => {
    dispatch(togglePopUpModal(false));
  };

  return (
    <>
      <div className="top-0 sticky z-50">
        <div className="h-[40px] bg-[rgba(43,59,77,1)] border-b-[1px] border-gray-600 items-center hidden md:flex">
          <div className="flex  gap-4 justify-between items-center text-white font-normal text-sm container ">
            <div className="flex md:gap-4 xl:gap-24 ">
              <Link
                href="mailto:youremail@gmail.com"
                className="cursor-pointer group "
              >
                <ContactIcon
                  icon={<EmailSvgIcon />}
                  title="youremail@gmail.com"
                />
              </Link>
              <Link href="tel:+1234567891011">
                <ContactIcon
                  icon={<ContactSvgIcon width="18" height="18" />}
                  title="+12 34 56789 1011"
                />
              </Link>
            </div>
            <div className="flex md:gap-4 xl:gap-10">
              <div className="flex gap-1 xl:gap-2 items-center">
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
              <div className="flex gap-1 xl:gap-2 items-center cursor-pointer">
                <EarthSvgIcon />
                <div>English</div>
                <RiArrowDropDownLine className="w-5 h-5 " />
              </div>
              <div
                className="flex gap-1 xl:gap-2 items-center cursor-pointer"
                onClick={handleToggle}
              >
                <FaRegUser className="w-4 h-4 " />
                <div>Sign In</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[70px] bg-[rgba(35,47,62,1)] flex items-center ">
          <div className="flex gap-4 justify-between items-center  text-white font-normal text-sm container">
            <div className="flex items-center gap-4 ">
              <Link
                href="/"
                className="font-family-forte text-[30px] cursor-pointer "
              >
                E-commerce
              </Link>

              <div
                className="cursor-pointer hidden md:block"
                onClick={() => dispatch(toggleCategoryList())}
              >
                <BiCategory className="w-5 h-5  " />
              </div>
            </div>
            <div
              className={`relative md:flex flex-col hidden size-full max-w-xl${
                focused ? " z-50 bg-white rounded" : ""
              }`}
            >
              <div className="flex w-full rounded ">
                <div className="relative w-full flex items-center ">
                  <div
                    className={`w-screen h-screen left-0 top-0 bottom-0 bg-black/30  flex flex-col gap-4 justify-center items-center fixed z-40 overflow-hidden ${
                      !focused ? "hidden" : "block"
                    }`}
                    onClick={() => {
                      setFocused(false);
                      setSuggetions(false);
                    }}
                  ></div>
                  <input
                    className={`pl-2 pr-32 py-2 w-full flex-1 text-black focus:outline-none focus:border-y-2 focus:border-l-2 focus:box-border focus:border-yellow-500 rounded-l z-40 `}
                    type="text"
                    placeholder="Search "
                    onFocus={() => {
                      setFocused(true);
                      setSuggetions(true);
                    }}
                  />
                  <div className="absolute text-black right-2 flex items-center text-sm gap-1 cursor-pointer z-40">
                    <select className="text-sm focus:outline-none text-center cursor-pointer rounded ">
                      <option>All Categories</option>
                      <option>Macbook</option>
                      <option>iPhad</option>
                      <option>iPhone</option>
                      <option>Apple Watch</option>
                      <option>Accessories</option>
                    </select>
                    {/* <MdArrowForwardIos className="w-3 h-3 rotate-90 cursor-pointer" /> */}
                  </div>
                </div>
                <div
                  className={`bg-yellow-400 rounded-r text-white text-[26px] grid place-items-center px-4 cursor-pointer z-40 `}
                >
                  <BsSearch className="w-5 h-5 text-black" />
                </div>
              </div>
              {suggetions && (
                <div
                  className={`bg-white text-black z-50 w-full flex flex-col gap-2 rounded-b absolute top-10  `}
                >
                  <div className="w-full flex flex-col gap-2 ">
                    <div className="flex flex-col">
                      <div className="font-bold bg-slate-100 p-2">
                        Category Suggestions
                      </div>
                      <div className="flex flex-col gap-1 px-4 py-2">
                        <div>ALL categories</div>
                        <div>MacBook</div>
                        <div>iPhone</div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold bg-slate-100 p-2">
                        Product Suggestions
                      </div>
                      <div className="flex flex-col gap-1 px-4 py-2">
                        <div>Apple iPhone 15 Pro Max </div>
                        <div>MacBook Air</div>
                        <div>HP Laptop</div>
                        <div>Apple Watch</div>
                        <div>Apple Magic Mouse</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:flex gap-8 text-xs font-light hidden ">
              <IconButton
                linkpath="/wishlist"
                icon={<WishSvgIcon pathname={pathname} />}
                title="Wishlist"
                cssClass="flex-col gap-1"
              />
              <IconButton
                linkpath="/cart"
                icon={<CartSvgIcon pathname={pathname} />}
                title="Cart"
                cssClass="flex-col gap-1"
              />
              <IconButton
                linkpath="/notifications"
                icon={<NotificationSvgIcon pathname={pathname} />}
                title="Notifications"
                cssClass="flex-col gap-1"
              />
            </div>
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => dispatch(toggleMenu())}
            >
              <TfiMenuAlt className="w-5 h-5" />
            </div>
            {menu && (
              <div
                className={`block md:hidden cursor-pointer absolute w-full ${
                  menu == true
                    ? "animate__animated animate__fadeInDown "
                    : "animate__animated animate__fadeOutDown"
                }flex flex-col text-start left-0 top-[70px] bg-[rgba(0,0,0,0.6)] p-4`}
              >
                <IconButton
                  linkpath="/"
                  icon={<IoHomeOutline className="w-5 h-5" />}
                  title="Home"
                  cssClass="flex-row gap-4 py-2 border-b-[1px]"
                />
                <IconButton
                  linkpath="/categories"
                  icon={<BiCategory className="w-5 h-5" />}
                  title="Categories"
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
      {isVisible && (
        <div
          className="w-screen h-screen top-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-center  items-center fixed z-50"
          onClick={handleToggle}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {isSignInVisible && <SignIn />}
            {isSignUpVisible && <SignUp />}
            {isResetPasswordVisible && <EnterEmailResetPassword />}
            {isNewPasswordVisible && <CreateNewPassword />}
            {isSignAlertInVisible && <CheckEmail />}

            {/* <SignInAlert /> */}
          </div>
        </div>
      )}
      {openCategoryList && (
        <div className="fixed top-28 translate-x-[360px] z-50 w-72 ">
          <CategoryList cssClass="animate__animated animate__fadeInDown" />
        </div>
      )}
      {popUpModal && (
        <div
          className="w-screen h-screen left-0 top-0 bottom-0 bg-black/60  flex flex-col gap-4 justify-center items-center fixed z-50 overflow-hidden"
          onClick={handleQuickViewModal}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <QuickViewCard handleQuickViewModal={handleQuickViewModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
