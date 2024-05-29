import Link from "next/link";
import React, { ReactElement } from "react";
import { MdArrowForwardIos } from "react-icons/md";

interface CategoryLinkIconProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
  item?: {
    id: string;
    name: string;
    subcategories: {
      id: string;
      name: string;
    };
  };
}

const CategoryLinkIcon = ({
  linkpath,
  icon,
  title,
  item,
}: CategoryLinkIconProps) => {
  return (
    <>
      <Link
        href={`${linkpath}`}
        className="relative flex justify-between items-center  p-3 border-b cursor-pointer group "
      >
        <div> {item?.name}</div>
        <MdArrowForwardIos />
        <div
          className="absolute p-1 hidden group-hover:block bg-slate-50 w-full  left-8 top-0 translate-x-64 z-50 rounded"
          p-4
        >
          {item?.subcategories?.map(
            (subcategory: { name: string }, index: number) => (
              <div className=" p-3 border-b cursor-pointer" key={index}>
                {" "}
                {subcategory.name}
              </div>
            )
          )}
        </div>
      </Link>
    </>
  );
};

export default CategoryLinkIcon;
