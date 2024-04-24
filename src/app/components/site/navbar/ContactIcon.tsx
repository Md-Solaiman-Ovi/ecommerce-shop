import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { PiHeartBold } from "react-icons/pi";

interface ContactIconProps {
  icon?: ReactElement;
  title?: string;
}

const ContactIcon = ({ icon, title }: ContactIconProps) => {
  return (
    <div className="flex items-center gap-4">
      <div>{icon}</div>
      <div className="cursor-text">{title}</div>
    </div>
  );
};

export default ContactIcon;
