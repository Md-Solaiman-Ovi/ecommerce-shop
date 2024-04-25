import React from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
const CartItem = () => {
  return (
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
        <MdClear className="w-5 h-5 cursor-pointer" />
      </td>
    </tr>
  );
};

export default CartItem;
