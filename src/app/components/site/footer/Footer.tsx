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
                icon={
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.21693 15.2532L8.82348 14.9446L9.21693 15.2532ZM4.97799 15.2532L4.58454 15.5617L4.97799 15.2532ZM7.09746 17.01V16.51V17.01ZM12.6949 7.5614C12.6949 8.51599 12.199 9.78076 11.4309 11.1388C10.6738 12.4772 9.69619 13.8318 8.82348 14.9446L9.61038 15.5617C10.4981 14.4297 11.5095 13.031 12.3013 11.6311C13.082 10.2508 13.6949 8.79214 13.6949 7.5614H12.6949ZM5.37144 14.9446C4.49873 13.8318 3.5211 12.4772 2.76403 11.1388C1.99589 9.78076 1.5 8.51599 1.5 7.5614H0.5C0.5 8.79214 1.11288 10.2508 1.89362 11.6311C2.68543 13.031 3.69679 14.4297 4.58454 15.5617L5.37144 14.9446ZM1.5 7.5614C1.5 4.17862 4.03996 1.5 7.09746 1.5V0.5C3.41988 0.5 0.5 3.69666 0.5 7.5614H1.5ZM7.09746 1.5C10.155 1.5 12.6949 4.17862 12.6949 7.5614H13.6949C13.6949 3.69666 10.775 0.5 7.09746 0.5V1.5ZM8.82348 14.9446C8.35329 15.5442 8.03844 15.943 7.75475 16.2007C7.49247 16.4389 7.30672 16.51 7.09746 16.51V17.51C7.62998 17.51 8.04474 17.2883 8.42713 16.9409C8.78812 16.613 9.16211 16.1333 9.61038 15.5617L8.82348 14.9446ZM4.58454 15.5617C5.03281 16.1333 5.4068 16.613 5.76779 16.9409C6.15018 17.2883 6.56494 17.51 7.09746 17.51V16.51C6.88819 16.51 6.70245 16.4389 6.44017 16.2007C6.15648 15.943 5.84163 15.5442 5.37144 14.9446L4.58454 15.5617ZM4.31091 7.85964C4.31091 9.39861 5.55849 10.6462 7.09746 10.6462V9.64619C6.11078 9.64619 5.31091 8.84632 5.31091 7.85964H4.31091ZM7.09746 10.6462C8.63643 10.6462 9.884 9.39861 9.884 7.85964H8.884C8.884 8.84632 8.08414 9.64619 7.09746 9.64619V10.6462ZM9.884 7.85964C9.884 6.32067 8.63643 5.07309 7.09746 5.07309V6.07309C8.08414 6.07309 8.884 6.87296 8.884 7.85964H9.884ZM7.09746 5.07309C5.55849 5.07309 4.31091 6.32067 4.31091 7.85964H5.31091C5.31091 6.87296 6.11078 6.07309 7.09746 6.07309V5.07309Z"
                      fill="white"
                    />
                  </svg>
                }
                title="28 Bartholomeo street, USA"
              />
              <ContactIcon
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.96738 1.05156C2.02625 0.992688 2.05569 0.963253 2.08162 0.939424C2.71925 0.353525 3.69934 0.353525 4.33697 0.939424C4.3629 0.963253 4.39234 0.992688 4.45121 1.05156L5.66637 2.26672C6.33475 2.9351 6.52591 3.94446 6.14821 4.81095C5.77051 5.67744 5.96166 6.6868 6.63004 7.35518L8.62738 9.35252C9.29576 10.0209 10.3051 10.2121 11.1716 9.83436C12.0381 9.45666 13.0475 9.64781 13.7158 10.3162L14.931 11.5314C14.9899 11.5902 15.0193 11.6197 15.0431 11.6456C15.629 12.2832 15.629 13.2633 15.0431 13.9009C15.0193 13.9269 14.9899 13.9563 14.931 14.0152L14.1924 14.7538C13.5909 15.3553 12.7238 15.6078 11.8934 15.4233C6.2354 14.1659 1.81662 9.74716 0.559292 4.08917C0.374762 3.25878 0.627264 2.39167 1.22876 1.79018L1.96738 1.05156Z"
                      stroke="white"
                    />
                  </svg>
                }
                title="+123 456 789"
              />
              <ContactIcon
                icon={
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.17345 2.70687C0.666748 3.7798 0.666748 5.31171 0.666748 8C0.666748 11.1248 0.666748 12.6872 1.46251 13.7824C1.71951 14.1362 2.03058 14.4472 2.38431 14.7042C3.47958 15.5 5.04197 15.5 8.16675 15.5H9.83341C12.9582 15.5 14.5206 15.5 15.6159 14.7042C15.9696 14.4472 16.2807 14.1362 16.5377 13.7824C17.3334 12.6872 17.3334 11.1248 17.3334 8C17.3334 5.29271 17.3334 3.75821 16.8159 2.68419M1.17345 2.70687C1.25572 2.53266 1.35135 2.37055 1.46251 2.21756C1.71951 1.86383 2.03058 1.55276 2.38431 1.29576C3.47958 0.5 5.04197 0.5 8.16675 0.5H9.83341C12.9582 0.5 14.5206 0.5 15.6159 1.29576C15.9696 1.55276 16.2807 1.86383 16.5377 2.21756C16.644 2.3639 16.7361 2.51857 16.8159 2.68419M1.17345 2.70687L1.50008 3L3.10753 4.60744C5.8853 7.38522 7.27419 8.77411 9.00008 8.77411C10.726 8.77411 12.1149 7.38522 14.8926 4.60745L16.5001 3L16.8159 2.68419"
                      stroke="white"
                    />
                  </svg>
                }
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
                icon={
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4989 1.46628C19.2852 -1.70217 13.942 0.626012 13.8777 4.99839C13.8527 6.7529 14.7177 8.37119 16.1915 9.32608C16.4989 9.5253 16.4052 9.45005 18.239 12.6894C18.2717 12.7472 18.3102 12.7987 18.3525 12.8445L15.6771 15.4218C14.7063 14.458 13.0946 14.6367 12.3589 15.7965L8.78796 13.6712C8.78265 12.4944 7.82318 11.538 6.6449 11.538C4.77448 11.538 3.81207 13.7752 5.07349 15.136L2.73706 18.6663C1.37567 18.2768 0.00732422 19.3035 0.00732422 20.7275C0.00732422 21.9089 0.968262 22.8704 2.14984 22.8704C4.21088 22.8704 5.07825 20.2287 3.42169 19.0041L5.6792 15.5936C6.79193 16.1599 8.17438 15.6469 8.63928 14.4642L12.0703 16.5064C11.7933 17.833 12.8123 19.0851 14.1683 19.0851C15.7277 19.0851 16.767 17.4615 16.1164 16.0497C19.3887 12.8972 19.1876 13.0957 19.22 13.051C19.3911 12.9895 19.5445 12.8692 19.6461 12.6894C21.479 9.45151 21.386 9.5253 21.6945 9.32553C23.1429 8.38639 24.0073 6.79648 24.0073 5.07273C24.0073 3.70676 23.4717 2.42576 22.4989 1.46628ZM3.53577 20.7275C3.53577 21.4916 2.91394 22.1134 2.14984 22.1134C1.38574 22.1134 0.764465 21.4916 0.764465 20.7275C0.764465 19.9632 1.38574 19.3416 2.14984 19.3416C2.91394 19.3416 3.53577 19.9632 3.53577 20.7275ZM5.51074 14.4759C4.87061 13.5683 5.52063 12.2951 6.6449 12.2951C7.41284 12.2951 8.03082 12.9212 8.03082 13.6811C8.03082 15.0249 6.29004 15.585 5.51074 14.4759ZM14.1683 18.3281C13.2526 18.3281 12.7163 17.466 12.7833 16.9303C12.7916 15.7148 14.2619 15.1025 15.1317 15.9475C16.0193 16.8039 15.4164 18.3281 14.1683 18.3281ZM21.3083 8.72989C21.0643 8.88828 20.8608 9.10306 20.7202 9.35154C18.8969 12.5725 19.0261 12.3898 18.9426 12.3898C18.8589 12.3898 18.9911 12.5777 17.1649 9.35154C17.0242 9.10306 16.8214 8.88828 16.5771 8.73026C15.3096 7.90885 14.5657 6.5178 14.5875 5.00882C14.6422 1.20865 19.2709 -0.718898 22.0007 1.97165C23.9841 3.92795 23.6453 7.21469 21.3083 8.72989Z"
                      fill="white"
                    />
                    <path
                      d="M21.7787 2.97416C20.5893 1.36246 18.3748 1.1052 16.8494 2.23111C15.3175 3.36161 14.9308 5.56766 16.1061 7.1605C17.3562 8.85441 19.7435 9.05509 21.2708 7.71402C21.4279 7.57615 21.4435 7.33701 21.3056 7.17991C21.1677 7.0228 20.9286 7.00724 20.7713 7.14512C19.5679 8.20109 17.6949 8.03849 16.7153 6.71097C15.7928 5.46073 16.0961 3.728 17.2989 2.84012C18.501 1.95298 20.2385 2.16227 21.1696 3.42368C21.7703 4.23777 21.8584 5.26902 21.4937 6.14151C21.4131 6.33432 21.5041 6.55607 21.6969 6.63682C21.8897 6.7172 22.1116 6.62638 22.1922 6.43338C22.6437 5.35325 22.5608 4.03379 21.7787 2.97416Z"
                      fill="white"
                    />
                  </svg>
                }
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
