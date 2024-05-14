import React from "react";
import Image from "next/image";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";

import ProductCardInfo from "./ProductCardInfo";
import ProductCardButton from "./ProductCardButton";
const ProductCard = () => {
  return (
    <div className="w-full h-[415px]  md:w-[285px] bg-white  rounded-[10px] group">
      <div className="bg-[rgba(233,243,255,0.5)] h-[280px]  flex flex-col justify-center items-center cursor-pointer rounded">
        <div className="bg-white rounded-full items-end self-end mr-4 p-1">
          <PiHeartBold className="w-4 h-4" />
        </div>
        {/* <div className="bg-white rounded-full items-end self-end mr-4 p-1">
          <PiHeartFill className="w-4 h-4 fill-black " />
        </div> */}
        <Image
          src={"/images/productImg1.png"}
          width={200}
          height={200}
          alt=""
        />{" "}
        <div className="flex gap-4 items-center invisible group-hover:visible  transform transition-all delay-150 group-hover:scale-105  group-hover:duration-150">
          <ProductCardButton
            linkpath=""
            title="Add to Cart"
            cssClass=" bg-black text-white"
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.9167 3.50001C9.9167 3.4771 9.91644 3.45425 9.91591 3.43146C9.87949 1.85229 8.58795 0.583344 7.00003 0.583344C5.42424 0.583344 4.14032 1.83299 4.08521 3.39534C4.08398 3.43008 4.08337 3.46497 4.08337 3.50001M9.9167 3.50001H4.08337M9.9167 3.50001H10.6801C11.8968 3.50001 12.5051 3.50001 12.8529 3.8886C13.2007 4.27719 13.1335 4.8818 12.9992 6.09102L12.8266 7.64419C12.5524 10.1125 12.4152 11.3466 11.5847 12.09C10.7541 12.8333 9.50277 12.8333 7.00003 12.8333C4.4973 12.8333 3.24594 12.8333 2.41539 12.09C1.58484 11.3466 1.44771 10.1125 1.17346 7.64419L1.00089 6.09102C0.866528 4.8818 0.799349 4.27719 1.14716 3.8886C1.49496 3.50001 2.10329 3.50001 3.31995 3.50001H4.08337M3.50003 5.83334L3.85003 6.18334C5.58973 7.92304 8.41034 7.92304 10.15 6.18334L10.5 5.83334"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          <ProductCardButton
            linkpath="/product-details"
            title="Quick View"
            cssClass="bg-white"
            icon={
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.1213 7.09353L12.7306 7.53091L12.1213 7.09353ZM12.1213 4.90649L11.512 5.34388L12.1213 4.90649ZM1.87875 7.09353L2.488 6.65614L1.87875 7.09353ZM1.87875 4.90649L1.26949 4.46911L1.87875 4.90649ZM1.36322 6.00001H0.61322H1.36322ZM1.26949 7.53091C1.78405 8.24767 2.55601 9.1988 3.50723 9.97763C4.44986 10.7494 5.64797 11.4167 7.00002 11.4167V9.91668C6.14315 9.91668 5.27572 9.48698 4.4575 8.81704C3.64786 8.15412 2.96363 7.31867 2.488 6.65614L1.26949 7.53091ZM7.00002 11.4167C8.35208 11.4167 9.55019 10.7494 10.4928 9.97763C11.444 9.1988 12.216 8.24767 12.7306 7.53091L11.512 6.65614C11.0364 7.31867 10.3522 8.15412 9.54255 8.81704C8.72433 9.48698 7.85689 9.91668 7.00002 9.91668V11.4167ZM12.7306 4.46911C12.216 3.75235 11.444 2.80122 10.4928 2.02239C9.55018 1.25057 8.35208 0.583344 7.00002 0.583344V2.08334C7.85689 2.08334 8.72433 2.51304 9.54255 3.18298C10.3522 3.8459 11.0364 4.68135 11.512 5.34388L12.7306 4.46911ZM7.00002 0.583344C5.64797 0.583344 4.44986 1.25057 3.50722 2.02239C2.55601 2.80122 1.78405 3.75235 1.26949 4.46911L2.488 5.34388C2.96363 4.68135 3.64786 3.8459 4.4575 3.18298C5.27572 2.51304 6.14315 2.08334 7.00002 2.08334V0.583344ZM12.7306 7.53091C13.0395 7.10064 13.3868 6.66046 13.3868 6.00001H11.8868C11.8868 6.05218 11.8803 6.08882 11.8414 6.16427C11.7863 6.27101 11.6956 6.40051 11.512 6.65614L12.7306 7.53091ZM11.512 5.34388C11.6956 5.59951 11.7863 5.72901 11.8414 5.83575C11.8803 5.9112 11.8868 5.94784 11.8868 6.00001H13.3868C13.3868 5.33956 13.0395 4.89938 12.7306 4.46911L11.512 5.34388ZM2.488 6.65614C2.30449 6.40051 2.21373 6.27101 2.15868 6.16427C2.11978 6.08882 2.11322 6.05218 2.11322 6.00001H0.61322C0.61322 6.66046 0.960596 7.10064 1.26949 7.53091L2.488 6.65614ZM1.26949 4.46911C0.960596 4.89938 0.61322 5.33956 0.61322 6.00001H2.11322C2.11322 5.94784 2.11978 5.9112 2.15868 5.83575C2.21373 5.72901 2.30449 5.59951 2.488 5.34388L1.26949 4.46911ZM4.50002 6.00001C4.50002 7.38072 5.61931 8.50001 7.00002 8.50001V7.00001C6.44774 7.00001 6.00002 6.55229 6.00002 6.00001H4.50002ZM7.00002 8.50001C8.38074 8.50001 9.50002 7.38072 9.50002 6.00001H8.00002C8.00002 6.55229 7.55231 7.00001 7.00002 7.00001V8.50001ZM9.50002 6.00001C9.50002 4.6193 8.38074 3.50001 7.00002 3.50001V5.00001C7.55231 5.00001 8.00002 5.44773 8.00002 6.00001H9.50002ZM7.00002 3.50001C5.61931 3.50001 4.50002 4.6193 4.50002 6.00001H6.00002C6.00002 5.44773 6.44774 5.00001 7.00002 5.00001V3.50001Z"
                  fill="black"
                />
              </svg>
            }
          />
        </div>
      </div>
      <div>
        <ProductCardInfo />
      </div>
    </div>
  );
};

export default ProductCard;
