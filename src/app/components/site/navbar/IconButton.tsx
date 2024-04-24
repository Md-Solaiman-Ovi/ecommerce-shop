import Link from "next/link";
import React, { ReactElement } from "react";

interface IconButtonProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
}

const IconButton = ({ linkpath, icon, title }: IconButtonProps) => {
  return (
    <Link
      href={`${linkpath}`}
      className="flex flex-col gap-1 items-center cursor-pointer"
    >
      <div>{icon}</div>
      <div> {title}</div>
    </Link>
  );
};

export default IconButton;
