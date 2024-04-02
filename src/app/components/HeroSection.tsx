import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
const HeroSection = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 justify-between">
        <div className=" w-72 ">
          <div className="bg-[rgba(35,47,62,1)] text-white p-3 rounded text-base text-center">
            Selected Category
          </div>
          <div className="bg-white text-base">
            <div className="flex justify-between items-center  p-3 border-b">
              <div>Macbook</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>iPad Pro</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>iPhone</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>iPad Air</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>Apple Watch</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>iMac</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b">
              <div>Airpods</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b ">
              <div>Computer Accessories</div>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/SliderImg1.png"}
            width={866}
            height={434}
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Image src={"/images/HeroImg1.png"} width={380} height={225} alt="" />
        </div>
        <div>
          <Image src={"/images/HeroImg2.png"} width={380} height={225} alt="" />
        </div>
        <div>
          <Image src={"/images/HeroImg3.png"} width={380} height={225} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
