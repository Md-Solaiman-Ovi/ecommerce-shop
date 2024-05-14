import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const ProductCardInfo = () => {
  return (
    <div className="flex flex-col p-4 gap-4 ">
      <div className="text-base">Apple iPhone 14 Pro Max</div>
      <div className="flex justify-between text-xs">
        <div className="line-through">Tk 0.00</div>
        <div>Tk 150,000</div>
        <div className="flex items-center gap-2">
          <FaStar className="fill-yellow-400" />
          <div>5.0 (37 reviews)</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInfo;
