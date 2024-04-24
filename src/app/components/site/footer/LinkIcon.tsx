import Link from "next/link";
import React, { ReactElement } from "react";

interface LinkIconProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
}

const LinkIcon = ({ linkpath, icon, title }: LinkIconProps) => {
  return (
    <Link href={`${linkpath}`} className="flex gap-2 items-center">
      <div>{icon}</div>
      <div> {title}</div>
    </Link>
  );
};

export default LinkIcon;
