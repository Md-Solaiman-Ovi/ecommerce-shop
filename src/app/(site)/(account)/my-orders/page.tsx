import Container from "@/app/components/site/Container";
import OrderedProductCard from "@/app/components/site/order/OrderedProductCard";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import React from "react";

const MyOrders = () => {
  return (
    <div className=" flex flex-col gap-5">
      <OrderedProductCard
        orderedId="#0001"
        date="11 Nov 2023"
        productImage="/images/productImg1.png"
        productName="Apple iPhone 14 Pro"
        status="Processing"
        amount="149,999"
      />
      <OrderedProductCard
        orderedId="#0002"
        date="05 March 2024"
        productImage="/images/productImg2.png"
        productName="Apple Watch Series 6 A2292"
        status="Hold"
        amount="43,000"
      />
      <OrderedProductCard
        orderedId="#0003"
        date="10 May 2024"
        productImage="/images/productImg3.png"
        productName="Apple Macbook Pro"
        status="Processing"
        amount="249,999"
      />
    </div>
  );
};

export default MyOrders;
