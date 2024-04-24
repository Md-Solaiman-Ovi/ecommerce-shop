import Link from "next/link";
import React, { ReactElement } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface CategoryLinkIconProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
}

const CategoryLinkIcon = ({ linkpath, icon, title }: CategoryLinkIconProps) => {
  return (
    <Link
      href={`${linkpath}`}
      className="flex justify-between items-center  p-3 border-b cursor-pointer "
    >
      <div> {title}</div>
      <MdArrowForwardIos />
    </Link>
  );
};

export default CategoryLinkIcon;
