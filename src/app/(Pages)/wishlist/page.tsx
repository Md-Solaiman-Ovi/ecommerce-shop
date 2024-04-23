import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import Card from "@/app/components/Card";
import CategoryLayout from "@/app/components/CategoryLayout";
import React from "react";

const Wishlist = () => {
  return (
    <PageLayout title="Wish List" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </PageLayout>
  );
};

export default Wishlist;
