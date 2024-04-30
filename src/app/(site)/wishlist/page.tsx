import ProductCard from "@/app/components/site/Product/product-card/ProductCard";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import React from "react";
import CategoryLayout from "@/app/components/site/common-component/CategoryLayout";
import Container from "@/app/components/site/Container";

const Wishlist = () => {
  return (
    <Container className="py-10">
      <CategoryLayout title={"Wishlist"} />
    </Container>
  );
};

export default Wishlist;
