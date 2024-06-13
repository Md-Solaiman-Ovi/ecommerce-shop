"use client";
import React, { useState } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import Image from "next/image";
import product_img1 from "/public/images/productImg1.png";
import product_img2 from "/public/images/productImg2.png";
import product_img3 from "/public/images/productImg3.png";
import product_img4 from "/public/images/productImg4.png";
import ReactImageMagnify from "react-image-magnify";
const ProductImageSelector = () => {
  const [imageSource, setImageSource] = useState<any>(product_img1);

  return (
    <div className=" flex flex-col gap-5">
      <div className="flex flex-col bg-white p-4 gap-4">
        <div className="p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
          -16%
        </div>
        <div>
          <div className="block md:hidden">
            <Image src={imageSource} width={500} alt="" />
          </div>
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imageSource.src,
                width: 200,
                height: 200,
              },
              largeImage: {
                src: imageSource.src,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerClassName: " bg-white  ",
            }}
          /> */}
          <ReactImageMagnify
            className="relative hidden md:block"
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imageSource.src,
                width: 200,
                height: 200,
              },
              largeImage: {
                src: imageSource.src,
                width: 1200,
                height: 1200,
              },
              // enlargedImageContainerStyle: {
              //   zIndex: "1500",
              // },
              enlargedImageContainerClassName: "fixed",
            }}
          />
        </div>
        <div className="text-center flex items-center gap-8 justify-center">
          <TfiArrowCircleLeft className="w-5 h-5" />
          <TfiArrowCircleRight className="w-5 h-5" />
        </div>
      </div>
      <div className="flex gap-5 justify-between ">
        <div
          className={`bg-white cursor-pointer rounded border-[1px]   ${
            imageSource == product_img1
              ? "opacity-100"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setImageSource(product_img1)}
        >
          <Image src={product_img1} width={100} height={100} alt={""} />
        </div>
        <div
          className={`bg-white cursor-pointer rounded border-[1px]   ${
            imageSource == product_img2
              ? "opacity-100"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setImageSource(product_img2)}
        >
          <Image src={product_img2} width={100} height={100} alt={""} />{" "}
        </div>
        <div
          className={`bg-white cursor-pointer rounded border-[1px]   ${
            imageSource == product_img3
              ? "opacity-100"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setImageSource(product_img3)}
        >
          <Image src={product_img3} width={100} height={100} alt={""} />
        </div>
        <div
          className={`bg-white cursor-pointer rounded border-[1px]   ${
            imageSource == product_img4
              ? "opacity-100"
              : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => setImageSource(product_img4)}
        >
          <Image src={product_img4} width={100} height={100} alt={""} />
        </div>
      </div>
    </div>
  );
};

export default ProductImageSelector;
