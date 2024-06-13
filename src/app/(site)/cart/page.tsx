"use client";

import Card from "@/app/components/site/Product/product-card/ProductCard";
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

  const [vouchar, setVouchar] = useState(true);

  return (
    <Container className="py-10  ">
      <CategoryTitle title="Shopping Cart" />
      <div className="flex flex-col lg:flex-row gap-5 w-full py-10">
        <div className="w-full lg:w-2/3 bg-white rounded p-0 md:p-4 overflow-auto xl:overflow-hidden">
          <div className="flex flex-col items-center w-full ">
            <div className="w-full border-b py-4">
              <div className="text-sm font-semibold flex items-center  text-center w-full ">
                <div className="flex justify-normal items-center w-5/6">
                  <div className="w-full items-center hidden lg:flex ">
                    <div className="text-center p-1 w-3/5 flex ">
                      <div className="w-1/3"></div>
                      <div className="flex flex-col md:flex-row items-center w-2/3">
                        <div className="w-full">Product</div>
                        <div className="text-center p-1 w-full ">
                          Unit Price
                        </div>
                      </div>
                    </div>
                    <div className="w-2/5 flex justify-between items-center gap-4  ">
                      <div className="text-center p-1 w-full">Quantity</div>
                      <div className="text-center p-1 w-full">Total Price</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center text-end w-2/6 lg:w-1/6">
                  <div className=" bg-red-500 text-white font-light rounded py-1 px-2 shadow-lg cursor-pointer">
                    {" "}
                    Clear All
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
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
            <label
              htmlFor="vouchar"
              className="flex justify-between items-center text-sm border-b-[1px] py-4 cursor-pointer "
              onClick={() => setVouchar(!vouchar)}
            >
              <div>Add promo code or vouchar</div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  vouchar ? "rotate-180" : ""
                }`}
              />
            </label>
            {vouchar && (
              <div className="flex border-[1px] my-4">
                <input
                  id="vouchar"
                  type="text "
                  placeholder=" Enter promo code "
                  className="w-full px-4 text-sm font-light focus:outline-none focus:border-y-2 focus:border-l-2 focus:box-border focus:border-black"
                />
                <div className="bg-black text-white p-2">Apply</div>
              </div>
            )}

            <Link
              href="/checkout"
              className="bg-[rgba(24,41,59,1)] my-4  py-2 rounded items-center text-white text-center"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
