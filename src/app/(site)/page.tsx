"use client";
import Image from "next/image";
import HeroSection from "../components/site/home/hero-section/HeroSection";
import CategoryLayout from "../components/site/common-component/CategoryLayout";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="font-normal text-sm py-[50px] w-full flex flex-col gap-4 scrollbar-hide">
          <HeroSection />
          <CategoryLayout title={"Best selling product"} />
          <CategoryLayout title={"Products"} />
          <div className="w-full">
            <Image
              className="object-cover w-full"
              src={"/images/Banner1.jpg"}
              width={1200}
              height={400}
              alt=""
            />
          </div>
          <CategoryLayout title={"Mac Book"} />
          <CategoryLayout title={"iPad Pro"} />
          <CategoryLayout title={"iPhone"} />
          <CategoryLayout title={"iPad Air"} />
          <CategoryLayout title={"Apple Watch"} />
          <CategoryLayout title={"Air Pods"} />
          <CategoryLayout title={"iMac"} />
          <CategoryLayout title={"Computer Accessories"} />
        </div>
      )}
    </>
  );
};

export default Home;
