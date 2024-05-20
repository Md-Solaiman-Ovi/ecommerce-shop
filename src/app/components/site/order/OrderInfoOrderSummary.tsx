import React from "react";

const OrderInfoOrderSummary = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col w-full ">
      <div className="flex justify-between items-center  text-lg ">
        <div className="py-4 font-semibold">Order Summary</div>
        <div className="font-bold ">TK.</div>
      </div>
      <div className="flex justify-between  ">
        <div>Sub-Total</div>
        <div>00 TK.</div>
      </div>
      <div className="flex justify-between  ">
        <div>Home Delivery</div>
        <div>00 TK.</div>
      </div>
      <div className="flex justify-between  ">
        <div>Voucher</div>
        <div>00 TK.</div>
      </div>
      <div className="flex justify-between  ">
        <div>Total</div>
        <div>00 TK.</div>
      </div>
      <div className="flex justify-between  pb-2  border-b-[1px] ">
        <div>Paid</div>
        <div className="text-green-500">00 TK.</div>
      </div>
      <div className="flex justify-between py-2 ">
        <div>Due</div>
        <div className="text-red-500">00 TK.</div>
      </div>
    </div>
  );
};

export default OrderInfoOrderSummary;
