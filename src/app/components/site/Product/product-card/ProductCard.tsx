"use client";
import React from "react";
import Image from "next/image";
import { PiHeartBold } from "react-icons/pi";
import ProductCardInfo from "./ProductCardInfo";
import ProductCardButton from "./ProductCardButton";
import AddToCartSvgIcon from "../../svg-icons/AddToCartSvgIcon";
import QuickVeiwSvgIcon from "../../svg-icons/QuickVeiwSvgIcon";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { togglePopUpModal } from "@/app/redux/globalStateSlice";
const ProductCard = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      {/* h-[415px]  md:w-[285px] */}
      <div className="w-full bg-white  rounded-[10px] group shadow-md">
        <Link href="/product-details">
          <section className="bg-[rgba(233,243,255,0.5)] h-[280px]  flex flex-col justify-center items-center cursor-pointer rounded">
            <div className="bg-white rounded-full items-end self-end mr-4 p-1">
              <PiHeartBold className="w-4 h-4" />
            </div>
            <Image
              src={"/images/productImg1.png"}
              width={200}
              height={200}
              alt=""
            />
            <div className="flex gap-4 items-center lg:invisible group-hover:visible  transform transition-all delay-150 md:group-hover:scale-105  group-hover:duration-150">
              <ProductCardButton
                linkpath="/cart"
                title="Add to Cart"
                cssClass=" bg-black text-white"
                icon={<AddToCartSvgIcon />}
              />

              <div
                onClick={() => {
                  dispatch(togglePopUpModal(true));
                }}
              >
                <ProductCardButton
                  linkpath=""
                  title="Quick View"
                  cssClass="bg-white"
                  icon={<QuickVeiwSvgIcon />}
                />
              </div>
            </div>
          </section>
          <div>
            <ProductCardInfo />
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
