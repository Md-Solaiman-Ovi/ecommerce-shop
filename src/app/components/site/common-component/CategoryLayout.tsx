import React from "react";
import CategoryTitle from "../CategoryTitle";
import ProductCard from "../Product/product-card/ProductCard";
import Container from "../Container";

interface CategoryLayoutProps {
  title: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = (props) => {
  console.log("title ", props.title);
  return (
    <Container className="flex flex-col gap-4  ">
      <CategoryTitle title={props.title} />
      <div className="flex flex-col gap-8 my-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center md:justify-end w-full">
          <div className="px-10 py-2 text-sm font-bold rounded border-[1px] border-[#18293B] cursor-pointer hover:bg-[rgba(24,41,59,1)] hover:text-white  hover:duration-300 hover:ease-in-out hover:delay-150 ">
            Load More
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryLayout;
