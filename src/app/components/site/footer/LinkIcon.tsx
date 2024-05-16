import { signInAlertVisibility } from "@/app/redux/globalStateSlice";
import { AppDispatch } from "@/app/redux/store";
import Link from "next/link";
import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";

interface LinkIconProps {
  linkpath?: string;
  icon?: ReactElement;
  title?: string;
}

const LinkIcon = ({ linkpath, icon, title }: LinkIconProps) => {
  // const dispatch: AppDispatch = useDispatch();
  // const handleSignInAlertToggle = () => {
  //   dispatch(signInAlertVisibility(true));
  // };
  return (
    <Link href={`${linkpath}`} className="flex gap-2 items-center">
      <div>{icon}</div>
      <div> {title}</div>
    </Link>
  );
};

export default LinkIcon;
