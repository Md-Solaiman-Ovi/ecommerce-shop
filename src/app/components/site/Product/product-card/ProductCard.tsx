"use client";
import React from "react";
import Image from "next/image";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import ProductCardInfo from "./ProductCardInfo";
import ProductCardButton from "./ProductCardButton";
import AddToCartSvgIcon from "../../svg-icons/AddToCartSvgIcon";
import QuickVeiwSvgIcon from "../../svg-icons/QuickVeiwSvgIcon";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import QuickViewCard from "./QuickViewCard";
import { togglePopUpModal } from "@/app/redux/globalStateSlice";
const ProductCard = () => {
  const popUpModal = useSelector(
    (state: RootState) => state.globalState.popUpModal
  );
  const dispatch: AppDispatch = useDispatch();

  const handleToggle = () => {
    dispatch(togglePopUpModal());
  };
  return (
    <>
      <div className="w-full h-[415px]  md:w-[285px] bg-white  rounded-[10px] group">
        <Link href="/product-details">
          <div className="bg-[rgba(233,243,255,0.5)] h-[280px]  flex flex-col justify-center items-center cursor-pointer rounded">
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

              <div onClick={handleToggle}>
                <ProductCardButton
                  linkpath=""
                  title="Quick View"
                  cssClass="bg-white"
                  icon={<QuickVeiwSvgIcon />}
                />
              </div>
            </div>
          </div>
          <div>
            <ProductCardInfo />
          </div>
        </Link>
      </div>
      {popUpModal && (
        <div
          className="w-screen h-screen left-0 top-0 bottom-0 bg-black/10  flex flex-col gap-4 justify-center items-center fixed z-50 overflow-hidden"
          onClick={handleToggle}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <QuickViewCard handleToggle={handleToggle} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
