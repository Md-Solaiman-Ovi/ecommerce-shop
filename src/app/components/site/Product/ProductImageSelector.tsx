import React from "react";
import PaymentImage from "../common-component/PaymentImage";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const ProductImageSelector = () => {
  return (
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
        <div className="bg-white rounded">
          <PaymentImage imageSource="/images/Image 2.png" width={100} />
        </div>
        <div className="bg-white">
          <PaymentImage imageSource="/images/productImg1.png" width={100} />
        </div>
        <div className="bg-white">
          <PaymentImage imageSource="/images/Image 4.png" width={100} />
        </div>
        <div className="bg-white">
          <PaymentImage imageSource="/images/Image 5.png" width={100} />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSelector;
