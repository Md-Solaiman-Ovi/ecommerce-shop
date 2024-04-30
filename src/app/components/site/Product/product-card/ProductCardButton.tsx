import Link from "next/link";
import React from "react";

interface ProductCardButtonProps {
  linkpath?: string;
  cssClass?: string;
  title?: string;
}
const ProductCardButton = ({
  linkpath,
  title,
  cssClass,
}: ProductCardButtonProps) => {
  return (
    <Link
      href={`${linkpath}`}
      className={`${cssClass} px-4 py-1 rounded-full cursor-pointer`}
    >
      {title}
    </Link>
  );
};

export default ProductCardButton;
