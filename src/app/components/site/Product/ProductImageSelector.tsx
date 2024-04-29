"use client";
import React, { useState } from "react";
import PaymentImage from "../common-component/PaymentImage";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Image from "next/image";

import red_img1 from "/public/images/image 2.png";
import red_img2 from "/public/images/productImg1.png";
import red_img3 from "/public/images/image 4.png";
import red_img4 from "/public/images/image 5.png";
const ProductImageSelector = () => {
  const [srcc, setSrcc] = useState<any>(red_img1);
  console.log("image source", srcc);
  return (
    <>
      {/* <div className="w-full flex flex-col md:flex-row justify-center gap-20 ">
        <div className="flex w-full gap-4 ">
          <div className="flex flex-col gap-4 p-2 w-1/5 md:w-1/6 h-48 ">
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2  hover:duration-300 opacity-80 hover:opacity-100"
              onClick={() => setSrcc(red_img1)}
            >
              <PaymentImage imageSource="/images/productImg1.png" width={500} />
              <Image src={imageSource} alt="" width={200} height={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100"
              onClick={() => setSrcc(red_img2)}
            >
              <Image src={red_img2} alt="" width={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100"
              onClick={() => setSrcc(red_img3)}
            >
              <Image src={red_img3} alt="" width={200} />
            </div>
            <div
              className="bg-gradient-to-br from-NeonPink to-purple rounded-lg p-2 hover:duration-300  opacity-80 hover:opacity-100"
              onClick={() => setSrcc(red_img4)}
            >
              <Image src={red_img4} alt="" width={200} />
            </div>
          </div>
          <div className=" border-NeonPink shadow-md shadow-NeonPink  rounded-xl border-2 p-2 w-full flex items-center justify-center  ">
            <Image
              className="object-fit "
              src={srcc}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div> */}
      <div className="w-1/2 flex flex-col gap-5">
        <div className="flex flex-col bg-white p-4 gap-4">
          <div className="p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
            -16%
          </div>
          <div>
            <PaymentImage imageSource="/images/productImg1.png" width={500} />
          </div>
          <div className="text-center flex items-center gap-8 justify-center">
            <TfiArrowCircleLeft className="w-5 h-5" />
            <TfiArrowCircleRight className="w-5 h-5" />
          </div>
        </div>
        <div className="flex gap-5 justify-between ">
          <div
            className="bg-white cursor-pointer rounded"
            onClick={() => setSrcc(red_img1)}
          >
            <PaymentImage imageSource="/images/Image 2.png" width={100} />
          </div>
          <div
            className="bg-white cursor-pointer"
            onClick={() => setSrcc(red_img2)}
          >
            <PaymentImage imageSource="/images/productImg1.png" width={100} />
          </div>
          <div
            className="bg-white cursor-pointer "
            onClick={() => setSrcc(red_img3)}
          >
            <PaymentImage imageSource="/images/Image 4.png" width={100} />
          </div>
          <div
            className="bg-white cursor-pointer"
            onClick={() => setSrcc(red_img4)}
          >
            <PaymentImage imageSource="/images/Image 5.png" width={100} />
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default ProductImageSelector;
