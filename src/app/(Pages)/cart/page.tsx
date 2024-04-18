import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import Card from "@/app/components/Card";
import CategoryLayout from "@/app/components/CategoryLayout";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import { MdClear } from "react-icons/md";
const Cart = () => {
  return (
    <PageLayout title="Shopping Cart" className="py-10  ">
      <div className="flex flex-col md:flex-row gap-8 w-full p-4">
        <div className="w-full md:w-2/3 bg-white rounded p-4">
          <table className="w-full">
            <thead className=" table-auto text-center">
              <tr className="">
                <th></th>
                <th className="text-center">Product</th>
                <th className="text-center">Unit Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total Price</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-[1px] text-center">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>
              <tr className="border-t-[1px] text-center ">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>
              <tr className="border-t-[1px] text-center">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>
              <tr className="border-t-[1px] text-center">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>
              <tr className="border-t-[1px] text-center">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>

              <tr className="border-t-[1px] text-center">
                <td>
                  <Image
                    src={"/images/productImg1.png"}
                    width={100}
                    height={100}
                    alt=""
                  />
                </td>
                <td>Apple iPhone 14 Pro</td>
                <td>TK 149,999</td>
                <td>1</td>
                <td>TK 149,999</td>
                <td>
                  <MdClear className="w-5 h-5" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-white p-4  rounded-lg max-h-[558px] flex flex-col ">
            <div className="p-4  border-b-[1px]">Order Summary</div>
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
              <RiArrowDropDownLine className="w-7 h-7" />
            </div>

            <div className="bg-[rgba(24,41,59,1)] my-4  py-2 rounded items-center text-white text-center">
              checkout
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Cart;
