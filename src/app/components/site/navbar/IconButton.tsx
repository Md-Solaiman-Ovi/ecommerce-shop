import Link from "next/link";
import React, { ReactElement } from "react";

interface IconButtonProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
  cssClass?: string;
}

const IconButton = ({ linkpath, icon, title, cssClass }: IconButtonProps) => {
  return (
    <Link
      href={`${linkpath}`}
      className={`flex ${cssClass}  items-center cursor-pointer`}
    >
      <div>{icon}</div>
      <div> {title}</div>
    </Link>
  );
};

export default IconButton;
