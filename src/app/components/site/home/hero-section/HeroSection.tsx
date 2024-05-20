import React from "react";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Container from "../../Container";
import CategoryLinkIcon from "./CategoryLinkIcon";

import { GiHamburgerMenu } from "react-icons/gi";
const HeroSection = () => {
  return (
    <Container className="flex flex-col gap-10 mb-14 ">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className=" w-72 font-semibold hidden md:block">
          <div className="flex justify-between items-center bg-[rgba(35,47,62,1)] text-white p-3 rounded text-base text-center px-4">
            <div>
              <GiHamburgerMenu className="w-5 h-5 " />
            </div>
            <div> Selected Category</div>
            <div>
              <MdArrowForwardIos className="w-5 h-5 rotate-90" />
            </div>
          </div>
          <div className="bg-white text-base font-normal ">
            <CategoryLinkIcon linkpath="" title="Macbook" />
            <CategoryLinkIcon linkpath="" title="iPad Pro" />
            <CategoryLinkIcon linkpath="" title="iPhone" />
            <CategoryLinkIcon linkpath="" title="iPad Air" />
            <CategoryLinkIcon linkpath="" title="Apple Watch" />
            <CategoryLinkIcon linkpath="" title="iMac" />
            <CategoryLinkIcon linkpath="" title="Airpods" />
            <CategoryLinkIcon linkpath="" title="Computer Accessories" />
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
