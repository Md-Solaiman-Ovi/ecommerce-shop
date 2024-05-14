import React from "react";

interface Props {
  fill: string;
  width: string;
  height: string;
  cssClass: string;
}
const RatingIcon = ({ fill, width, height, cssClass }: Props) => {
  return (
    <svg
      className={`${cssClass}`}
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.68609 3.63419C11.0439 -0.544731 16.956 -0.544731 18.3138 3.63419C18.921 5.50307 20.6626 6.76839 22.6276 6.76839C27.0216 6.76839 28.8485 12.3911 25.2937 14.9738C23.704 16.1288 23.0388 18.1762 23.646 20.045C25.0038 24.224 20.2208 27.699 16.666 25.1163C15.0763 23.9612 12.9236 23.9612 11.3338 25.1163C7.77902 27.699 2.99606 24.224 4.35388 20.045C4.96111 18.1762 4.29589 16.1288 2.70614 14.9738C-0.84867 12.3911 0.978258 6.76839 5.37224 6.76839C7.33729 6.76839 9.07885 5.50307 9.68609 3.63419Z"
        fill={`${fill}`}
      />
    </svg>
  );
};

export default RatingIcon;
