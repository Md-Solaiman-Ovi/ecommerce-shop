import React from "react";
import Card from "./Card";

const CategoryLayout = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="text-3xl font-bold text-center py-1 border-b ">
        Best Selling Product
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-end">
        <div className="px-10 py-2 text-sm font-bold rounded border-[1px] border-black">
          Load More
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;
