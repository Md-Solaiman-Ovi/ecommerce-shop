import React from "react";

interface RatingPercentageProps {
  cssClass: string;
  percentage: string;
  star: string;
}
const RatingPercentage = ({
  cssClass,
  percentage,
  star,
}: RatingPercentageProps) => {
  return (
    <div className="flex items-center w-full text-center ">
      <div className="w-1/5">{star}</div>
      <div className="w-4/5 h-3 mx-4 bg-[rgba(231,234,239,1)] rounded-full ">
        <div className={`h-3 bg-yellow-500 rounded-full  ${cssClass}`}></div>
      </div>
      <div className="w-1/5">{percentage}</div>
    </div>
  );
};

export default RatingPercentage;
