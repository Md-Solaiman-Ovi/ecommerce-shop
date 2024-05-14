import Link from "next/link";
import React, { ReactElement } from "react";

interface ProductCardButtonProps {
  linkpath?: string;
  cssClass?: string;
  title?: string;
  icon?: ReactElement;
}
const ProductCardButton = ({
  linkpath,
  title,
  cssClass,
  icon,
}: ProductCardButtonProps) => {
  return (
    <Link
      href={`${linkpath}`}
      className={`${cssClass} px-4 py-2 rounded-full cursor-pointer text-xs flex gap-2 items-center`}
    >
      <div>{icon}</div>
      <div>{title}</div>
    </Link>
  );
};

export default ProductCardButton;
