import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaSearchLocation } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

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
      <div className=" bg-[rgba(35,47,62,1)] flex items-center">
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
                <div>icon</div>
                <div>28 Bartholomeo street, USA</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>+123 456 789</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>youremail@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Get to Know Us:</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>About Us</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>Privacy & Policy</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>Terms & Conditions</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="text-xl font-medium">Help Zone:</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>Order Tracking</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>FAQ</div>
              </div>
              <div className="flex gap-2 items-center">
                <div>icon</div>
                <div>How To Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
