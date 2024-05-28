import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import CategoryLinkIcon from "./CategoryLinkIcon";

interface CategoryListProps {
  cssClass: string;
}
const CategoryList = ({ cssClass }: CategoryListProps) => {
  return (
    <div className={`" font-semibold hidden md:block ${cssClass}`}>
      <div className="flex justify-between items-center bg-[rgba(35,47,62,1)] text-white p-3 rounded text-base text-center px-4">
        <div>
          <GiHamburgerMenu className="w-5 h-5  cursor-pointer" />
        </div>
        <div> Selected Category</div>
        <div>
          <MdArrowForwardIos className="w-5 h-5 rotate-90 cursor-pointer" />
        </div>
      </div>
      <div className="bg-white text-base font-normal ">
        <CategoryLinkIcon linkpath="" title="Macbook" />
        <CategoryLinkIcon linkpath="" title="iPad Pro" />
        <CategoryLinkIcon linkpath="" title="iPhone" />
        <CategoryLinkIcon linkpath="" title="iPad Air" />
        <CategoryLinkIcon linkpath="" title="Apple Watch" />
        <CategoryLinkIcon linkpath="" title="iMac" />
        <CategoryLinkIcon linkpath="" title="Airpods" />
        <CategoryLinkIcon linkpath="" title="Computer Accessories" />
      </div>
    </div>
  );
};

export default CategoryList;
