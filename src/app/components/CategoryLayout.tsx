import React from "react";
import Card from "./Card";
import Container from "./Container";

interface CategoryLayoutProps {
  title: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = (props) => {
  console.log("title ", props.title);
  return (
    <Container className="flex flex-col gap-4 mb-10  ">
      <div className="text-3xl font-semibold text-center py-4 border-b text-[rgba(24,41,59,1)] relative">
        {props.title}
        <span className="absolute left-0 bottom-[-2px] w-70 h-3 bg-blue-500 rounded-[3px]"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <div className="relative border-b border-black ">
        <div className="absolute inset-80 border-2 top-[177px] border-red-500"></div>
      </div> */}
      <div className="flex justify-center md:justify-end w-full">
        <div className="px-10 py-2 text-sm font-bold rounded border-[1px] border-black">
          Load More
        </div>
      </div>
    </Container>
  );
};

export default CategoryLayout;
