"use client";
import React, { useEffect, useState } from "react";
import MobileSubCategoryItem from "./MobileSubCategoryItem";
import { IoClose } from "react-icons/io5";

type SubCategoryProps = {
  id: string;
  name: string;
};
interface CategoryListProps {
  id: string;
  name: string;
  subcategories: SubCategoryProps[];
}
const MobileSideCategory = ({ ToggleCategories }: any) => {
  const [categories, setCategories] = useState([]);
  const [openItemId, setOpenItemId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3002/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="flex flex-col gap-4 size-full  p-4 ">
      <div className="flex items-center justify-between font-bold ">
        <div className="text-lg ">Category list</div>
        <div className="cursor-pointer" onClick={ToggleCategories}>
          <IoClose className="size-6 hover:fill-red-600" />
        </div>
      </div>
      <div className="text-base font-normal">
        {categories.map((category: CategoryListProps, index: number) => (
          <MobileSubCategoryItem
            key={index}
            category={category}
            openItemId={openItemId}
            setOpenItemId={setOpenItemId}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileSideCategory;
