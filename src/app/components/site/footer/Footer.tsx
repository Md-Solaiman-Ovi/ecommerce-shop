import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaInstagram, FaSearchLocation } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { GiReturnArrow } from "react-icons/gi";
import { GrTwitter } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowForwardIos, MdOutlineEmail } from "react-icons/md";
import { RiCustomerService2Fill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TiSocialLinkedin } from "react-icons/ti";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import ServiceDetails from "./ServiceDetails";
import ContactIcon from "../navbar/ContactIcon";

import { title } from "process";
import LinkIcon from "./LinkIcon";
import SocialIcon from "../common-component/SocialIcon";
import PaymentImage from "../common-component/PaymentImage";

import EmailSvgIcon from "../svg-icons/EmailSvgIcon";
import ContactSvgIcon from "../svg-icons/ContactSvgIcon";
import LocationSvgIcon from "../svg-icons/LocationSvgIcon";
import OrderTrackingSvgIcon from "../svg-icons/OrderTrackingSvgIcon";
import OrderTrackingSvgIcon2 from "../svg-icons/OrderTrackingSvgIcon2";
const Footer = () => {
  return (
    <div className="">
      <div className="h-full py-4 md:py-0 md:h-[150px] bg-[rgba(43,59,77,1)] flex flex-col md:flex-row items-center  ">
        <ServiceDetails />
      </div>
      <div className=" bg-[rgba(35,47,62,1)] flex flex-col gap-10 items-center py-4 md:py-20">
        <div className=" flex flex-col md:flex-row justify-between gap-8 container text-white font-normal text-sm py-10">
          <div className=" flex flex-col gap-4 w-full ">
            <div className="font-family-forte text-[30px]">E-commerce</div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              scelerisque leo vel morbi morbi laoreet pulvinar volutpat. Morbi
              ornare netus cum iaculis nunc facilisis egestas. At sed morbi
              orci, in tellus donec faucibus.
            </div>
          </div>
          <div className=" flex flex-col gap-4 w-full">
            <div className="text-xl font-medium ">Locate Us:</div>
            <div className="flex flex-col gap-4">
              <ContactIcon
                icon={<LocationSvgIcon />}
                title="28 Bartholomeo street, USA"
              />
              <ContactIcon
                icon={<ContactSvgIcon width="16" height="16" />}
                title="+123 456 789"
              />
              <ContactIcon
                icon={<EmailSvgIcon />}
                title="youremail@gmail.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Get to Know Us:</div>
            <div className="flex flex-col gap-4">
              <LinkIcon
                linkpath="/about-us"
                icon={<MdArrowForwardIos />}
                title="About Us"
              />
              <LinkIcon
                linkpath="/privacy-policy"
                icon={<MdArrowForwardIos />}
                title="Privacy & Policy"
              />
              <LinkIcon
                linkpath="/terms-conditions"
                icon={<MdArrowForwardIos />}
                title="Terms & Conditions"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Help Zone:</div>
            <div className="flex flex-col gap-4">
              <LinkIcon
                linkpath="/order-tracking"
                icon={<OrderTrackingSvgIcon2 width="24" height="24" />}
                title="Order Tracking"
              />
              <LinkIcon
                linkpath="/faq"
                icon={<MdArrowForwardIos />}
                title="FAQ"
              />
              <LinkIcon
                linkpath="/how-to-order"
                icon={<MdArrowForwardIos />}
                title="How To Order"
              />
              <LinkIcon
                linkpath="/payment-guide"
                icon={<MdArrowForwardIos />}
                title="Payment Guide"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4  md:gap-24 container ">
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2 text-white items-center w-full border-y border-gray-500 pt-4 pb-4 md:pb-10">
              <SocialIcon
                linkpath="/"
                icon={<BiLogoFacebook className="w-7 h-7 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<GrTwitter className="w-7 h-7 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<TiSocialLinkedin className="w-7 h-7 cursor-pointer" />}
              />
              <SocialIcon
                linkpath="/"
                icon={<FaInstagram className="w-7 h-7 cursor-pointer" />}
              />
            </div>
            <div className="flex  flex-col md:flex-row gap-4 md:gap-10 text-white py-4">
              <div>PAYMENTS ACCEPTED</div>
              <div className="flex gap-4">
                <PaymentImage
                  imageSource="/images/Rectangle66.png"
                  width={40}
                />
                <PaymentImage
                  imageSource="/images/Rectangle67.png"
                  width={40}
                />
                <PaymentImage
                  imageSource="/images/Rectangle68.png"
                  width={40}
                />
                <PaymentImage
                  imageSource="/images/Rectangle69.png"
                  width={40}
                />
                <PaymentImage
                  imageSource="/images/Rectangle70.png"
                  width={40}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col  gap-4 text-white w-full">
            <div className="text-[18px]">Get The Latest Deals And More.</div>
            <div className="flex w-full max-w-[500px] border-[1px] border-none rounded ">
              <input
                className=" px-6 py-2 w-full rounded-l"
                type="text"
                placeholder="Search "
              />
              <div className="bg-yellow-500 rounded-r text-black font-bold text-[18px] grid place-items-center px-4 ">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 text-xs text-center bg-[rgba(35,47,62,1)] border-t border-gray-500 py-5">
        &copy; E-commerce. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
