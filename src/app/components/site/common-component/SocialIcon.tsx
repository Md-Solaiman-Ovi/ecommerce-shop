import Link from "next/link";
import React, { ReactElement } from "react";

interface SocialIconProps {
  linkpath?: string;
  icon?: ReactElement;
}

const SocialIcon = ({ linkpath, icon }: SocialIconProps) => {
  return (
    <Link href={`${linkpath}`} className={`flex gap-2 items-center`}>
      <div>{icon}</div>
    </Link>
  );
};

export default SocialIcon;
