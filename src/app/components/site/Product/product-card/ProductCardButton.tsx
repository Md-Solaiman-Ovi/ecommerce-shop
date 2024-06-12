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
    <div>
      <Link
        href={`${linkpath}`}
        className={`${cssClass} px-2 py-2 rounded-full cursor-pointer text-xs flex gap-1 items-center`}
      >
        <div>{icon}</div>
        <div>{title}</div>
      </Link>
    </div>
  );
};

export default ProductCardButton;
