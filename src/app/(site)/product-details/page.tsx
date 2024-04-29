"use client";

import Container from "@/app/components/site/Container";
import OptionSelector from "@/app/components/site/Product/OptionSelector";
import ProductDetailsInfo from "@/app/components/site/Product/ProductDetailsInfo";
import ProductImageSelector from "@/app/components/site/Product/ProductImageSelector";
import React, { useEffect } from "react";

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
  return (
    <Container className="py-10">
      <div className="flex gap-12  ">
        <ProductImageSelector />
        <ProductDetailsInfo />
      </div>
      <div className="flex items-center justify-center gap-4 p-4 mt-10">
        <div className="py-2 px-4 bg-[rgba(24,41,59,1)] text-white text-center rounded">
          Specification
        </div>
        <div className="py-2 px-4 bg-white text-center rounded">
          Description
        </div>
        <div className="py-2 px-4 bg-white text-center rounded">
          Reviews (0)
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
