import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { PiHeartBold } from "react-icons/pi";

interface ContactIconProps {
  icon?: ReactElement;
  title?: string;
  // width?: string;
  // height?: string;
  // fill?: string;
  // stroke?: string;
}

const ContactIcon = ({
  icon,
  // width,
  // height,
  // fill,
  // d,
  // stroke,
  title,
}: ContactIconProps) => {
  return (
    <div className="flex items-center gap-2 xl:gap-4">
      <div>{icon}</div>
      <div className="">{title}</div>
    </div>
  );
};

export default ContactIcon;
