import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { PiHeartBold } from "react-icons/pi";

interface ServiceIconProps {
  icon?: ReactElement;
  title?: string;
}

const ServiceIcon = ({ icon, title }: ServiceIconProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div>{icon}</div>
      <div className="text-[18px]"> {title}</div>
    </div>
  );
};

export default ServiceIcon;
