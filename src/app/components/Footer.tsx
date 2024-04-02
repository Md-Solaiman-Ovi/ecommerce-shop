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
const Footer = () => {
  return (
    <div className="">
      <div className="h-[150px] bg-[rgba(43,59,77,1)] flex items-center">
        <div className="flex justify-between items-center container text-white font-normal text-sm    ">
          <div className="flex flex-col items-center gap-4 ">
            <TbTruckDelivery className="w-10 h-10" />
            <div className="text-[18px]">Fast Delivery</div>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <GiReturnArrow className="w-10 h-10" />
            <div className="text-[18px]">60 - Days Returns</div>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <RiSecurePaymentLine className="w-10 h-10" />
            <div className="text-[18px]">Security Payment</div>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <RiCustomerService2Fill className="w-10 h-10" />
            <div className="text-[18px]">Customer Service</div>
          </div>
          <div className="flex flex-col items-center gap-4 ">
            <FaSearchLocation className="w-10 h-10" />
            <div className="text-[18px]">Order Tracking</div>
          </div>
        </div>
      </div>
      <div className=" bg-[rgba(35,47,62,1)] flex flex-col gap-10 items-center py-20">
        <div className=" flex  justify-between gap-8 items-center container text-white font-normal text-sm py-10">
          <div className=" flex flex-col gap-4 w-full ">
            <div className="font-family-forte text-[30px]">e-commerce</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
              scelerisque leo vel morbi morbi laoreet pulvinar volutpat. Morbi
              ornare netus cum iaculis nunc facilisis egestas. At sed morbi
              orci, in tellus donec faucibus.
            </div>
          </div>
          <div className=" flex flex-col gap-4 w-full">
            <div className="text-xl font-medium ">Locate Us:</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <IoLocationOutline />
                <div>28 Bartholomeo street, USA</div>
              </div>
              <div className="flex gap-2 items-center">
                <FiPhone />
                <div>+123 456 789</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineEmail />
                <div>youremail@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Get to Know Us:</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>About Us</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>Privacy & Policy</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>Terms & Conditions</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Help Zone:</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>Order Tracking</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>FAQ</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>How To Order</div>
              </div>
              <div className="flex gap-2 items-center">
                <MdArrowForwardIos />
                <div>Payment Guide</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-24 container ">
          <div className="w-full flex flex-col justify-between">
            <div className="flex gap-2 text-white items-center w-full border-y border-gray-500 pt-4 pb-10">
              <BiLogoFacebook className="w-7 h-7" />
              <GrTwitter className="w-7 h-7" />
              <TiSocialLinkedin className="w-7 h-7" />
              <FaInstagram className="w-7 h-7" />
            </div>
            <div className="flex gap-10 text-white py-4">
              <div>PAYMENTS ACCEPTED</div>
              <div className="flex gap-4">
                <Image
                  src={"/images/Rectangle66.png"}
                  width={40}
                  height={5}
                  alt=""
                />
                <Image
                  src={"/images/Rectangle67.png"}
                  width={40}
                  height={5}
                  alt=""
                />
                <Image
                  src={"/images/Rectangle68.png"}
                  width={40}
                  height={5}
                  alt=""
                />
                <Image
                  src={"/images/Rectangle69.png"}
                  width={40}
                  height={5}
                  alt=""
                />
                <Image
                  src={"/images/Rectangle70.png"}
                  width={40}
                  height={5}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4  text-white w-full">
            <div className="text-[18px]">Get The Latest Deals And More.</div>
            <div className="lg:flex hidden w-full max-w-[500px] border-[1px] border-none rounded ">
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
