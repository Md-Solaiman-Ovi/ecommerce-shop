import React from "react";
import OrderHistoryStatus from "./OrderHistoryStatus";

const OrderHistory = () => {
  return (
    <div className="w-1/3 bg-white flex flex-col gap-5 p-10 rounded">
      <div className="text-xl font-bold">Order History</div>
      <section>
        <div className="">
          <OrderHistoryStatus
            title="Shipped"
            cssClass="before:absolute before:left-[14px] before:top-3  before:h-full before:w-[1px] before:bg-green-300 before:outline-solid  "
            dotColor="text-green-300"
            desc="Lorem ipsum dolor sit amet consectetur. Sodales arcu amet viverra tellus lorem."
          />
          <OrderHistoryStatus
            title="Billing"
            cssClass="before:absolute before:left-[14px] before:top-3  before:h-full before:w-[1px] before:bg-green-300   before:outline-1"
            dotColor="text-green-300"
            desc="14 Nov 2022"
          />
          <OrderHistoryStatus
            title="Confirmed"
            cssClass="before:absolute before:left-[14px] before:top-3  before:h-full before:w-[1px] before:bg-green-300   before:outline-1"
            dotColor="text-green-300"
            desc="12 Nov 2022"
          />
          <OrderHistoryStatus
            title="Payment Paid"
            cssClass="before:absolute before:left-[14px] before:top-3  before:h-full before:w-[1px] before:bg-green-300   before:outline-1"
            dotColor="text-green-300"
            desc=" 12 Nov 2022"
          />
          <OrderHistoryStatus
            title="Pending"
            cssClass=""
            dotColor="text-green-300"
            desc=" 12 Nov 2022"
          />
        </div>
      </section>
    </div>
  );
};

export default OrderHistory;
