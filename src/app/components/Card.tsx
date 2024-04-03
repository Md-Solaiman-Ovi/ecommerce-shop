import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="h-[415px] w-[285px]  rounded">
      <div className="bg-[rgba(233,243,255,0.5)] h-[280px] flex justify-center items-center">
        <Image
          src={"/images/productImg1.png"}
          width={200}
          height={200}
          alt=""
        />{" "}
      </div>
      <div className="flex flex-col p-4 gap-4">
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
