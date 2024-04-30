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
          />

          <ProductCardButton
            linkpath="/product-details"
            title="Quick View"
            cssClass="bg-white"
          />
        </div>
      </div>
      <ProductCardInfo />
    </div>
  );
};

export default ProductCard;
