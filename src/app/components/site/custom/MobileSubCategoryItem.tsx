import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

type SubCategoryProps = {
  id: string;
  name: string;
};
interface CategoryListProps {
  id: string;
  name: string;
  subcategories: SubCategoryProps[];
}
interface MobileSubCategoryItem {
  category: CategoryListProps;
  openItemId: string | null;
  setOpenItemId: any;
}
const MobileSubCategoryItem = ({
  category,
  openItemId,
  setOpenItemId,
}: MobileSubCategoryItem) => {
  const isOpen = openItemId === category.id;

  const toggleEditPopup = () => {
    setOpenItemId(isOpen ? null : category.id);
  };
  return (
    <>
      <Link
        href=""
        className="relative flex flex-col gap-4 justify-between items-center  p-3 border-b cursor-pointer group "
      >
        <div className="flex justify-between items-center group-hover:font-semibold w-full">
          <div> {category.name}</div>
          <div onClick={toggleEditPopup}>
            <FaPlus />
          </div>
        </div>
        {isOpen && (
          <div
            className=" w-full "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {category?.subcategories?.map(
              (subcategory: SubCategoryProps, index: number) => (
                <div
                  className=" p-3  cursor-pointer border-t-[1px] animate__animated animate__slideInDown "
                  key={index}
                >
                  {subcategory.name}
                </div>
              )
            )}
          </div>
        )}
      </Link>
    </>
  );
};

export default MobileSubCategoryItem;
