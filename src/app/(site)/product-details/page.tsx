"use client";

import Container from "@/app/components/site/Container";
import OptionSelector from "@/app/components/site/Product/OptionSelector";

import ProductDetailsInfo from "@/app/components/site/Product/ProductDetailsInfo";
import ProductImageSelector from "@/app/components/site/Product/ProductImageSelector";
import ProductReviews from "@/app/components/site/Product/reviews/ProductReviews";
import ProductDescription from "@/app/components/site/Product/specifications/ProductDescription";
import ProductSpecifications from "@/app/components/site/Product/specifications/ProductSpecifications";
import React, { useEffect, useState } from "react";

const ProductDetails = () => {
  const Options = {
    Colors: ["Red", "Gray", "Black", "White"],
    Storage: ["128GB", "256GB", "512GB", "1TB"],
  };
  useEffect(() => {
    console.log("type of colors", typeof Options.Colors);
  });

  const Colors = ["Red", "Gray", "Black", "White"];
  const Storage = ["128GB", "256GB", "512GB", "1TB"];

  const [selectOption, setSelectOption] = useState("Specification");
  return (
    <Container className="py-10">
      <div className="flex gap-12  ">
        <ProductImageSelector />
        <ProductDetailsInfo />
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
