"use client";

import Card from "@/app/components/site/Product/product-card/ProductCard";
import CategoryLayout from "@/app/components/site/common-component/CategoryLayout";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/app/redux/counterSlice";
import { Divide } from "lucide";
import CustomerInfo from "@/app/components/site/CustomerInfo";
import PaymentMethod from "@/app/components/site/PaymentMethod";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import Container from "@/app/components/site/Container";
const Checkout = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [vouchar, setVouchar] = useState(false);

  return (
    <Container className="py-10  ">
      <CategoryTitle title="Checkout" />
      <div className="flex flex-col md:flex-row gap-5 w-full my-10">
        <div className="w-full md:w-2/3 flex flex-col gap-10 ">
          <CustomerInfo />
          <PaymentMethod />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <input
                id="radio-1"
                type="checkbox"
                name="location"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none cursor-pointer "
              />
              <label htmlFor="radio-1 text-xs">
                {" "}
                I have read and agree to the Terms and Conditions
              </label>
            </div>

            <div className="text-lg py-2 bg-[rgba(24,41,59,1)] rounded text-white w-72 text-center cursor-pointer">
              Confirm Order
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 ">
          <div className="bg-white p-4  rounded-lg max-h-[558px] flex flex-col ">
            <div className="py-4 border-b-[1px] text-xl font-medium">
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
    </Container>
  );
};

export default Checkout;
