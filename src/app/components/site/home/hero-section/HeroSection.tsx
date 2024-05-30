"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../../Container";
import Carousel from "../../custom/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import {
  setShowCategoryButton,
  setShowCategoryList,
} from "@/app/redux/globalStateSlice";
import CategoryList from "./CategoryList";

const images = [
  "/images/SliderImg1.png",
  "/images/HeroImg2.png",
  "/images/HeroImg3.png",
  "/images/Banner1.jpg",
];

const HeroSection = () => {
  const showCategoryList = useSelector(
    (state: RootState) => state.globalState.showCategoryList
  );
  const dispatch: AppDispatch = useDispatch();

  const handleScroll = () => {
    const scrollTop = window.screenY;
    if (scrollTop > 100) {
      dispatch(setShowCategoryButton(true));
      dispatch(setShowCategoryList(false));
    } else if (scrollTop < 10) {
      dispatch(setShowCategoryButton(false));
      dispatch(setShowCategoryList(true));
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="flex flex-col gap-10 mb-14 ">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {showCategoryList && (
          <div className="w-96">
            <CategoryList cssClass="" />
          </div>
        )}
        <div className="h-full w-full flex items-center">
          <Carousel images={images} />
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <Image
            src={"/images/HeroImg1.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto shadow-lg"
          />
        </div>
        <div>
          <Image
            src={"/images/HeroImg2.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto shadow-lg"
          />
        </div>
        <div>
          <Image
            src={"/images/HeroImg3.png"}
            width={380}
            height={225}
            alt=""
            className="h-auto w-auto shadow-lg"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
