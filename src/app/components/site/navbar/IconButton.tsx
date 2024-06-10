"use client";
import { toggleMenu } from "@/app/redux/globalStateSlice";
import { AppDispatch } from "@/app/redux/store";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

interface IconButtonProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
  cssClass?: string;
}

const IconButton = ({ linkpath, icon, title, cssClass }: IconButtonProps) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Link
      href={`${linkpath}`}
      className={`flex ${cssClass}  items-center cursor-pointer`}
      onClick={() => {
        dispatch(toggleMenu());
      }}
    >
      <div>{icon}</div>
      <div> {title}</div>
    </Link>
  );
};

export default IconButton;
