import React from "react";
import Image from "next/image";
import Link from "next/link";
interface OrderedProductCardProps {
  orderedId: string;
  date: string;
  productImage: string;
  productName: string;
  status: string;
  amount: string;
}
const OrderedProductCard = ({
  orderedId,
  date,
  productImage,
  productName,
  status,
  amount,
}: OrderedProductCardProps) => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex flex-col text-sm px-5 py-2 border-b-[1px] ">
        <div>Ordered {orderedId}</div>
        <div>Date Added: {date}</div>
      </div>
      <div className="flex justify-between items-center px-5 py-4 text-center">
        <div className="flex gap-5 w-full items-center">
          <div className="">
            <Image src={`${productImage}`} alt="" width={60} height={60} />
          </div>
          <div className="w-12/3">{productName}</div>
        </div>
        <div className="flex text-center items-center w-full">
          <div className="text-center w-full">{status} </div>
          <div className="text-center w-full">{amount}</div>
          <Link
            href="/order-details"
            className="text-center text-white  cursor-pointer text-sm px-[10px] py-[6px] rounded-md bg-[rgba(43,59,77,1)]"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderedProductCard;
