import React from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
const CartItem = () => {
  return (
    <tr className="border-t-[1px] text-center">
      <td>
        <div className="flex items-center justify-center">
          {" "}
          <Image
            src={"/images/productImg1.png"}
            width={90}
            height={100}
            alt=""
            className="onject-cover"
          />
        </div>
      </td>
      <td className="text-start">Apple iPhone 14 Pro</td>
      <td>TK 149,999</td>
      <td>
        <div className="flex items-center justify-center gap-2">
          <div className="border-[1px] border-black  px-2 rounded-full cursor-pointer ">
            -
          </div>
          <div className=" ">1</div>
          <div className="border-[1px] border-black px-2 rounded-full cursor-pointer">
            +
          </div>
        </div>
      </td>
      <td>TK 149,999</td>
      <td>
        <MdClear className="w-5 h-5 cursor-pointer" />
      </td>
    </tr>
  );
};

export default CartItem;
