import PaymentImage from "@/app/components/site/common-component/PaymentImage";
import Container from "@/app/components/site/Container";
import ProductImageSelector from "@/app/components/site/Product/ProductImageSelector";
import React from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const ProductDetails = () => {
  return (
    <Container className="py-10">
      <div className="flex gap-12  ">
        <ProductImageSelector />
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex gap-5">
            <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
              15 In Stock
            </div>
            <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
              16% Off
            </div>
          </div>
          <div className="flex gap-5">
            <div>Apple iPhone 14 Pro Max</div>
            <div className="flex ">
              <div>TK 150,000</div>
              <div>TK 149,999</div>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="text-lg font-bold">Key Feature</div>
            <div className="text-sm leading-[28px]">
              <div>
                Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display
              </div>
              <div>
                Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display
              </div>
              <div>
                Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display
              </div>
              <div>
                Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display
              </div>
              <div>
                Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display
              </div>
            </div>
          </div>
          <div className="w-96 flex flex-col gap-2 p-4 bg-white rounded">
            <div className="border-b-[1px] text-xl py-2">Color</div>
            <div className="flex gap-4  w-full ">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <input
                  id="radio-1"
                  type="radio"
                  name="color"
                  placeholder="Select Sub-District"
                  className="text-xs focus:outline-none cursor-pointer "
                />
                <label htmlFor="radio-1 text-xs cursor-pointer">Red</label>
              </div>
              <div className="flex items-center gap-2 ">
                <input
                  id="radio-2"
                  type="radio"
                  name="color"
                  className="text-xs focus:outline-none rounded-full"
                />
                <label htmlFor="radio-1 text-xs cursor-pointer">Gray</label>
              </div>
              <div className="flex items-center gap-2 ">
                <input
                  id="radio-2"
                  type="radio"
                  name="color"
                  className="text-xs focus:outline-none rounded-full"
                />
                <label htmlFor="radio-1 text-xs cursor-pointer">Black</label>
              </div>
              <div className="flex items-center gap-2 ">
                <input
                  id="radio-2"
                  type="radio"
                  name="color"
                  className="text-xs focus:outline-none rounded-full"
                />
                <label htmlFor="radio-1 text-xs cursor-pointer">White</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
