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
    <div className="flex items-center gap-4">
      {/* <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 16 16"
        fill={`${fill}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={`${d}`} stroke={`${stroke}`} stroke-width="1.5" />
      </svg> */}

      <div>{icon}</div>
      <div className="cursor-text">{title}</div>
    </div>
  );
};

export default ContactIcon;
