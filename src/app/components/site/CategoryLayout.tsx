import React from "react";
import Card from "./Card";
import Container from "./Container";
import CategoryTitle from "./CategoryTitle";

interface CategoryLayoutProps {
  title: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = (props) => {
  console.log("title ", props.title);
  return (
    <div className="flex flex-col gap-4  ">
      <CategoryTitle title={props.title} />
      <div className="flex flex-col gap-8 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <div className="px-10 py-2 text-sm font-bold rounded border-[1px] border-black cursor-pointer">
            Load More
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
