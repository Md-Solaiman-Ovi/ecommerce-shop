import React from "react";
interface WishSvgIconProps {
  pathname: string;
}
const WishSvgIcon = ({ pathname }: WishSvgIconProps) => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={`${pathname === "/wishlist" ? "white" : "none"}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.9263 3.71726C14.9811 1.7336 12.7287 2.57021 11.334 3.45494C10.5459 3.95485 9.45423 3.95485 8.66616 3.45494C7.27145 2.57022 5.01901 1.73362 3.07386 3.71726C-1.54366 8.42614 6.37498 17.5 10.0001 17.5C13.6252 17.5 21.5438 8.42614 16.9263 3.71726Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WishSvgIcon;
