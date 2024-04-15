import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-full h-[415px]  md:w-[285px]  rounded group">
      <div className="bg-[rgba(233,243,255,0.5)] h-[280px] flex flex-col justify-center items-center cursor-pointer">
        <Image
          src={"/images/productImg1.png"}
          width={200}
          height={200}
          alt=""
        />{" "}
        <div className="flex gap-4 items-center invisible group-hover:visible  transform transition-all delay-150 group-hover:scale-105  group-hover:duration-150">
          <div className="bg-black text-white px-4 py-1 rounded-full cursor-pointer">
            Add to Cart
          </div>
          <div className="bg-white px-4 py-1 rounded-full cursor-pointer ">
            Quick View
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4 select-none">
        <div>Apple iPhone 14 Pro Max</div>
        <div className="flex justify-between">
          <div>Tk 0.00</div>
          <div>Tk 150,000</div>
          <div>5.0 (37 reviews)</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
