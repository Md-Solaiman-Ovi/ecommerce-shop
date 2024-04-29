"use client";

import Card from "@/app/components/site/Product/ProductCard";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/app/redux/counterSlice";
import { Divide } from "lucide";
import Link from "next/link";
import CategoryTitle from "@/app/components/site/CategoryTitle";
import CartItem from "@/app/components/site/CartItem";
import Container from "@/app/components/site/Container";
const Cart = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [vouchar, setVouchar] = useState(false);

  return (
    <Container className="py-10  ">
      <CategoryTitle title="Shopping Cart" />
      <div className="flex flex-col md:flex-row gap-5 w-full py-10">
        <div className="w-full md:w-2/3 bg-white rounded p-4">
          <table className="w-full">
            <thead className=" table-auto text-center ">
              <tr className="m-4">
                <th></th>
                <th className="text-center p-4">Product</th>
                <th className="text-center p-4">Unit Price</th>
                <th className="text-center p-4">Quantity</th>
                <th className="text-center p-4">Total Price</th>
                <th className="text-center p-4"></th>
              </tr>
            </thead>
            <tbody>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4  rounded-lg max-h-[558px] flex flex-col ">
            <div className="py-4  border-b-[1px] text-xl font-semibold">
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
            <div className="flex justify-between items-center text-sm border-b-[1px] py-4">
              <div>Add promo code or vouchar</div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  vouchar ? "rotate-180" : ""
                }`}
                onClick={() => setVouchar(!vouchar)}
              />
            </div>
            {vouchar && (
              <div className="flex border-[1px] my-4">
                <input
                  type="text "
                  placeholder=" Enter promo code "
                  className="w-full px-4 text-sm font-light"
                />
                <div className="bg-black text-white p-2">Apply</div>
              </div>
            )}

            <Link
              href="/checkout"
              className="bg-[rgba(24,41,59,1)] my-4  py-2 rounded items-center text-white text-center"
            >
              checkout
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
