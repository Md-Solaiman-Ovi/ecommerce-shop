import React from "react";
import Image from "next/image";
interface OrderInformationProductCardProps {
  productImage: string;
  productName: string;
  quantity: string;
  amount: string;
}
const OrderInformationProductCard = ({
  productImage,
  productName,
  quantity,
  amount,
}: OrderInformationProductCardProps) => {
  return (
    <div className="bg-white border-b-[1px]">
      <div className="flex justify-between items-center px-1 xl:px-5 py-4 text-center text-sm md:text-base">
        <div className="flex gap-5 w-full items-center">
          <div className="">
            <Image src={`${productImage}`} alt="" width={60} height={60} />
          </div>
          <div className="w-2/3 text-center">{productName}</div>
        </div>
        <div className="flex text-center items-center w-full">
          <div className="text-center w-full">{quantity} </div>
          <div className="text-center w-full">{amount}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformationProductCard;
