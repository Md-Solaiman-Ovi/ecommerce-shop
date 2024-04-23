import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Container from "./Container";
const HeroSection = () => {
  return (
    <Container className="flex flex-col gap-10 mb-14">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className=" w-72 font-semibold hidden md:block">
          <div className="bg-[rgba(35,47,62,1)] text-white p-3 rounded text-base text-center">
            Selected Category
          </div>
          <div className="bg-white text-base font-normal ">
            <div className="flex justify-between items-center  p-3 border-b cursor-pointer ">
              <div>Macbook</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>iPad Pro</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>iPhone</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>iPad Air</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>Apple Watch</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>iMac</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer">
              <div>Airpods</div>
              <MdArrowForwardIos />
            </div>
            <div className="flex justify-between items-center p-3 border-b cursor-pointer ">
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
            className="h-auto w-auto"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Image
            src={"/images/HeroImg1.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto"
          />
        </div>
        <div>
          <Image
            src={"/images/HeroImg2.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto"
          />
        </div>
        <div>
          <Image
            src={"/images/HeroImg3.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
