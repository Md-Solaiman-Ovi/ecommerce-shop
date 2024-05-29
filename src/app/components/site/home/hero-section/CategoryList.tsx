"use client";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import CategoryLinkIcon from "./CategoryLinkIcon";

interface CategoryListProps {
  cssClass: string;
  item?: {
    name: string;
    subcategories: {
      name: string;
    };
  };
}

const CategoryList = ({ cssClass }: CategoryListProps) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3002/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);
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
        {categories.map((category: any, index: number) => (
          <CategoryLinkIcon
            key={index}
            linkpath=""
            // title={category.name}
            item={category}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
