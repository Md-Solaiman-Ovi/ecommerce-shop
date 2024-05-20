import React from "react";
import OrderInformationProductCard from "./OrderInfomationProductCard";
import OrderInfoOrderSummary from "./OrderInfoOrderSummary";

const OrderInformation = () => {
  return (
    <div className="w-3/4 bg-white p-10 rounded flex flex-col gap-12 ">
      <div className="font-bold text-xl text-center">Order information</div>
      <div className="flex items-baseline gap-48">
        <div className="flex flex-col gap-2 w-1/2">
          <div className="text-lg font-bold">Shipping Address</div>
          <div className="flex flex-col">
            <div>Leslie Alexander</div>
            <div>3891 Ranchview Dr. Richardson, California 62639</div>
            <div>Mobile: (406) 555-0120</div>
          </div>
        </div>
        <div className="w-1/2">
          <OrderInfoOrderSummary />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-lg font-bold">Product</div>
        <div className="flex flex-col gap-4">
          <div className="bg-white border-b-[1px]">
            <div className="flex justify-between items-center px-5 py-4 text-center">
              <div className="flex gap-5 w-full items-center">
                <div className="text-center">Image</div>
                <div className="w-2/3 text-center">Product Name</div>
              </div>
              <div className="flex text-center items-center w-full">
                <div className="text-center w-full">Quantity </div>
                <div className="text-center w-full">Total</div>
              </div>
            </div>
          </div>
          <OrderInformationProductCard
            productImage="/images/productImg1.png"
            productName="Apple iPhone 14 Pro"
            quantity="01"
            amount="1,50,000"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-lg font-bold">Order Comments</div>
        <div className="text-sm">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
      <div className="flex justify-end items-center">
        <div className="w-1/4 text-sm bg-[rgba(24,41,59,1)] text-white text-center py-2 rounded cursor-pointer">
          Go Back Home
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
