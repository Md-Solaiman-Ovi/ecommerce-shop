import ProductCard from "@/app/components/site/Product/ProductCard";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import React from "react";

const Wishlist = () => {
  return (
    <div className="py-10">
      <CategoryTitle title="Wish List" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Wishlist;
