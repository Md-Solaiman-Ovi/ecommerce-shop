import Card from "@/app/components/site/Card";
import CategoryLayout from "@/app/components/site/CategoryLayout";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import React from "react";

const Wishlist = () => {
  return (
    <div className="py-10">
      <CategoryTitle title="Wish List" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Wishlist;
