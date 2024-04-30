/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProductSpecificationTableRow from "./ProductSpecificationTableRow";

const ProductSpecifications = () => {
  return (
    <div className="flex flex-col gap-5 my-[50px]">
      <div className="flex flex-col gap-[2px]">
        <ProductSpecificationTableRow specificationTitle=" CPU / Processor" />
        <ProductSpecificationTableRow specificationTitle=" Color" />
        <ProductSpecificationTableRow specificationTitle=" Storage" />
        <ProductSpecificationTableRow specificationTitle=" Display / Resolution" />
        <ProductSpecificationTableRow specificationTitle=" Camera" />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <div className="text-[30px] font-bold">Notch:</div>
        <div className="text-sm leading-[30px]">
          iPhone 14 Pro and Pro Max's new Dynamic Island is a different type of
          notch. And no one has ever seen a notch like this before. This notch
          is very advanced and looks different from every other notch in the
          world.
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="text-[30px] font-bold">
          iPhone 14 Pro price in Bangladesh list:
        </div>
        <ul className=" list-inside  list-disc text-sm px-4 leading-[30px] ">
          <li>iPhone 14 Pro 128GB price TBA</li>
          <li>iPhone 14 Pro 256GB price TBA</li>
          <li>iPhone 14 Pro 512GB price TBA</li>
          <li>iPhone 14 Pro 1TB price TBA</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSpecifications;
