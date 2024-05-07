"use client";

import Container from "@/app/components/site/Container";
import OptionSelector from "@/app/components/site/Product/OptionSelector";

import ProductDetailsInfo from "@/app/components/site/Product/ProductDetailsInfo";
import ProductImageSelector from "@/app/components/site/Product/ProductImageSelector";
import ProductReviews from "@/app/components/site/Product/reviews/ProductReviews";
import ProductDescription from "@/app/components/site/Product/specifications/ProductDescription";
import ProductSpecifications from "@/app/components/site/Product/specifications/ProductSpecifications";
import React, { useEffect, useState } from "react";
interface Options {
  Colors: string[];
  Storage: string[];
}

const ProductDetails = () => {
  const options: Options = {
    Colors: ["Red", "Gray", "Black", "White"],
    Storage: ["128GB", "256GB", "512GB", "1TB"],
  };

  // const Colors = ["Red", "Gray", "Black", "White"];
  // const Storage = ["128GB", "256GB", "512GB", "1TB"];

  const [selectOption, setSelectOption] = useState("Specification");
  return (
    <Container className="py-10">
      <div className="flex flex-col md:flex-row gap-12  ">
        <div className="w-full md:w-1/2 ">
          <ProductImageSelector />
        </div>
        <div className="w-full md:w-1/2 ">
          <ProductDetailsInfo options={options} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 p-4 mt-10">
        <div
          className={`py-2 px-4  text-center rounded cursor-pointer ${
            selectOption == "Specification"
              ? "bg-[rgba(24,41,59,1)] text-white"
              : "bg-white"
          }`}
          onClick={() => setSelectOption("Specification")}
        >
          Specification
        </div>
        <div
          className={`py-2 px-4  text-center rounded cursor-pointer ${
            selectOption == "Description"
              ? "bg-[rgba(24,41,59,1)] text-white"
              : "bg-white"
          }`}
          onClick={() => setSelectOption("Description")}
        >
          Description
        </div>
        <div
          className={`py-2 px-4  text-center rounded cursor-pointer ${
            selectOption == "Reviews"
              ? "bg-[rgba(24,41,59,1)] text-white"
              : "bg-white"
          }`}
          onClick={() => setSelectOption("Reviews")}
        >
          Reviews (0)
        </div>
      </div>
      {selectOption == "Specification" && <ProductSpecifications />}
      {selectOption == "Description" && <ProductDescription />}
      {selectOption == "Reviews" && <ProductReviews />}
    </Container>
  );
};

export default ProductDetails;
