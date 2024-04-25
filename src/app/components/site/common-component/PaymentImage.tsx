import Link from "next/link";
import React, { ReactElement } from "react";
import Image from "next/image";
interface PaymentImageProps {
  cssClass?: string;
  imageSource?: string;
  width?: number;
}

const PaymentImage = ({ imageSource, cssClass, width }: PaymentImageProps) => {
  return (
    <div>
      <Image src={`${imageSource}`} width={width} height={5} alt="" />
    </div>
  );
};

export default PaymentImage;
