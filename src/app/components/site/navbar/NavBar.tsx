"use client";
import React, { ReactNode, useState } from "react";
import { BiCategory, BiLogoFacebook } from "react-icons/bi";
import { BsCart, BsCart3, BsSearch } from "react-icons/bs";
import { FaInstagram, FaRegUser } from "react-icons/fa";
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

const NavBar = () => {
  const pathname = usePathname();
  // const [menu, setMenu] = useState(false);
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
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleVisibility());
    dispatch(signInVisibility(true));
    dispatch(signUpVisibility(false));
    dispatch(resetPasswordVisibility(false));
    dispatch(newPasswordVisibility(false));
  };
  console.log("category button", openCategoryList);
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
            <div className="md:flex hidden w-full max-w-xl border-[1px] rounded ">
              <input
                className=" px-6 py-2 w-full flex-1 focus:outline-none text-black box-bordeborder-yellow-500"
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
    </>
  );
};

export default NavBar;
