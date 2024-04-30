import React from "react";
interface Props {
  specificationTitle: string;
}
const ProductSpecificationTableRow = ({ specificationTitle }: Props) => {
  return (
    <div className="flex border border-black">
      <div className="border-r border-black w-1/6 p-[10px]">
        {specificationTitle}
      </div>
      <ul className="w-5/6 p-8 list-disc text-sm leading-5">
        <li>A16 Bionic chip</li>
        <li>New 6-core CPU with two performance and four efficiency cores</li>
        <li>New 4-core GPU</li>
        <li>New 16-core Neural Engine</li>
      </ul>
    </div>
  );
};

export default ProductSpecificationTableRow;
