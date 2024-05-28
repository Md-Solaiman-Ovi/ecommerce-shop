import Container from "@/app/components/site/Container";
import OrderHistory from "@/app/components/site/order/OrderHistory";
import OrderInformation from "@/app/components/site/order/OrderInformation";
import React from "react";

const OrderDetailsPage = () => {
  return (
    <Container className="py-10">
      <div className="flex flex-col md:flex-row gap-5 ">
        <OrderInformation />
        <OrderHistory />
      </div>
    </Container>
  );
};

export default OrderDetailsPage;
