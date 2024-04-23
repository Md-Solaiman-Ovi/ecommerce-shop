import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import React from "react";
import Image from "next/image";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import WhyChooseCard from "@/app/components/site/WhyChooseCard";
const AboutUs = () => {
  return (
    <div className="py-10 flex flex-col ">
      <div className="mb-10">
        <CategoryTitle title="About Us" />
        <div className="flex gap-8 py-10">
          <Image src={"/images/aboutUs.png"} width={445} height={300} alt="" />

          <div className="flex flex-col gap-5 p-4">
            <div className="text-xl font-bold">Our Story</div>
            <div className="text-sm leading-[30px] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              indust orem Ipsum has been the industry’s standard dummy texever
              since the when anunknown printer took a galley of type and
              scrambled it to make a type specimen book. Dorem Ipsum is simply
              dummy consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam…
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <CategoryTitle title="Why Choose Us" />
        <div className="grid grid-cols-3 justify-center gap-10 py-10">
          <WhyChooseCard
            title="Home Fast Delivery"
            description="Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <WhyChooseCard
            title="24/7 Customer Service"
            description="Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <WhyChooseCard
            title=" Secure Payment"
            description="Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
