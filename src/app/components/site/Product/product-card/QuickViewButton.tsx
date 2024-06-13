import Link from "next/link";
import React, { ReactElement } from "react";

interface QuickViewButtonProps {
  cssClass?: string;
  title?: string;
  icon?: ReactElement;
}
const QuickViewButton = ({ title, cssClass, icon }: QuickViewButtonProps) => {
  return (
    <div
      className={`${cssClass} px-2 py-2 rounded-full cursor-pointer text-xs flex gap-1 items-center`}
    >
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default QuickViewButton;
