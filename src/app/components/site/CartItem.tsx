import React from "react";
import { MdClear } from "react-icons/md";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
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
        <div className="flex items-center justify-center gap-4">
          <div className="cursor-pointer">
            <CiCircleMinus className="size-7" />
          </div>
          <div className=" ">1</div>
          <div className="cursor-pointer ">
            <CiCirclePlus className="size-7" />
          </div>
        </div>
      </td>
      <td>TK 149,999</td>
      <td>
        <MdClear className="w-5 h-5 cursor-pointer" />
      </td>
    </tr>
    // <tr className="border-t-[1px] text-center flex items-center">
    //   <td className="flex flex-col items-center text-center">
    //     <div className="flex items-center  justify-center">
    //       {" "}
    //       <Image
    //         src={"/images/productImg1.png"}
    //         width={90}
    //         height={100}
    //         alt=""
    //         className="onject-cover"
    //       />
    //     </div>
    //     <div className="text-start">Apple iPhone 14 Pro</div>
    //   </td>

    //   <td className="flex items-center">
    //     <div>TK 149,999</div>
    //     <div>
    //       <div className="flex items-center justify-center gap-4">
    //         <div className="cursor-pointer">
    //           <CiCircleMinus className="size-7" />
    //         </div>
    //         <div className=" ">1</div>
    //         <div className="cursor-pointer ">
    //           <CiCirclePlus className="size-7" />
    //         </div>
    //       </div>
    //     </div>
    //     <div>TK 149,999</div>
    //   </td>
    //   <td>
    //     <MdClear className="w-5 h-5 cursor-pointer" />
    //   </td>
    // </tr>
  );
};

export default CartItem;
