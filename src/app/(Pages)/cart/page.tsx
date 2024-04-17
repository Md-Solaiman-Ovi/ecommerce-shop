import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import Card from "@/app/components/Card";
import CategoryLayout from "@/app/components/CategoryLayout";
import React from "react";

const Cart = () => {
  return (
    <PageLayout title="Shopping Cart" className="py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-10">
        <Card />
      </div>
    </PageLayout>
  );
};

export default Cart;
