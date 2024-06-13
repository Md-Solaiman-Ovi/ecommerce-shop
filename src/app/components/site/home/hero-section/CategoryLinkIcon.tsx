import { toggleCategoryList } from "@/app/redux/globalStateSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import Link from "next/link";
import React, { ReactElement } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

type SubCategoryProps = {
  id: string;
  name: string;
};
interface CategoryListProps {
  name: string;
  subcategories: SubCategoryProps[];
}

interface CategoryLinkIconProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
  item?: CategoryListProps;
}

const CategoryLinkIcon = ({
  linkpath,
  icon,
  title,
  item,
}: CategoryLinkIconProps) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <div className="relative flex justify-between items-center  p-3 border-b cursor-pointer group ">
        <Link
          href={`${linkpath}`}
          className="hover:font-bold"
          onClick={() => dispatch(toggleCategoryList())}
        >
          {" "}
          {item?.name}
        </Link>
        <MdArrowForwardIos />
        <div
          className="absolute p-1 hidden group-hover:block bg-slate-50 w-full  left-8 top-0 translate-x-64 z-30 rounded"
          p-4
        >
          {item?.subcategories?.map(
            (subcategory: SubCategoryProps, index: number) => (
              <div className=" p-3 border-b cursor-pointer" key={index}>
                {subcategory.name}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryLinkIcon;
