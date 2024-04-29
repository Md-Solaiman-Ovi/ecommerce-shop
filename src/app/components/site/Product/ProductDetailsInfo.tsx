import React from "react";
import OptionSelector from "./OptionSelector";
import PaymentOption from "../common-component/PaymentOption";

const ProductDetailsInfo = () => {
  return (
    <div className="w-1/2 flex flex-col gap-8">
      <div className="flex gap-5">
        <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
          15 In Stock
        </div>
        <div className="text-sm p-2 bg-[rgba(254,196,0,1)] rounded text-center w-24 font-bold">
          16% Off
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-[30px]">Apple iPhone 14 Pro Max</div>
        <div className="flex gap-5 text-xl ">
          <div className="line-through">TK 150,000</div>
          <div>TK 149,999</div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="text-lg font-bold">Key Feature</div>
        <ul className="text-sm leading-[28px] list-outside list-disc">
          <li>Apple ProMotion 120Hz 6.7-inch 2000 nits Always-On Display</li>
          <li>All new A16 Bionic chip</li>
          <li>48MP main camera</li>
          <li>Advance selfie camera</li>
          <li>Up to 29-hour battery life</li>
          <li>Available in Space Black, Silver, Gold, and Deep Purple</li>
          <li>Connect to a satellite for emergency services</li>
          <li>Model A2651</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <OptionSelector title="Color" />
        <OptionSelector title="Storage" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-lg font-bold">Payment Options</div>
        <div className="flex gap-5 w-full">
          <PaymentOption
            price="95000 TK"
            message="Cash Discount Price"
            paymentOption="Online / Cash Payment"
          />
          <PaymentOption
            price="16,917 TK"
            message="Regular Price: 101,500 TK"
            paymentOption="0% EMI for 6 Months"
          />
        </div>
      </div>
      <div className="flex gap-10 items-center ">
        <div className="flex  items-center rounded">
          <div className="bg-white px-5 py-3 font-bold text-2xl ">-</div>
          <div className="bg-white px-5 py-3 font-bold border-x-[1px] text-2xl ">
            1
          </div>
          <div className="bg-white px-5 py-3 font-bold text-2xl ">+</div>
        </div>
        <div className="bg-[rgba(24,41,59,1)] text-2xl w-full text-white text-center py-2 rounded self-center">
          buy
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
