"use client";
import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import Card from "@/app/components/Card";
import CategoryLayout from "@/app/components/CategoryLayout";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/app/redux/counterSlice";
import { Divide } from "lucide";
import CustomerInfo from "@/app/components/CustomerInfo";
const Checkout = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [vouchar, setVouchar] = useState(false);

  return (
    <PageLayout title="Checkout" className="py-10  ">
      <div className="flex flex-col md:flex-row gap-5 w-full p-4">
        <div className="w-full md:w-2/3 bg-white rounded-lg p-4">
          <CustomerInfo />
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4  rounded-lg max-h-[558px] flex flex-col ">
            <div className="py-4 border-b-[1px] text-xl font-semibold">
              Order Summary
            </div>
            <div className="flex justify-between  border-b-[1px] py-4">
              <div>Subtotal</div>
              <div>00 TK.</div>
            </div>
            <div className="flex justify-between  border-b-[1px] py-4">
              <div>Shipping</div>
              <div>00 TK.</div>
            </div>
            <div className="flex justify-between  border-b-[1px] py-4">
              <div>Total</div>
              <div>00 TK.</div>
            </div>
            <div className="flex justify-between  font-bold border-dashed border-b-[2px] py-4">
              <div>Payable Total</div>
              <div>00 TK.</div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Checkout;
