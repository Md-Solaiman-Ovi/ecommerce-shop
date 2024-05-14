import React from "react";
import RatingIcon from "./RatingIcon";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-[30px] font-bold">Customers Reviews</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis eu
        mi lorem malesuada mattis sit.
      </div>
      <div className="text-lg">40 customers rating</div>
      <div className="flex justify-center gap-5 bg-[rgba(24,41,59,1)] text-white py-4 rounded-lg items-center w-2/3">
        <div className="flex gap-1">
          <RatingIcon fill="#FEC400" height="25" width="26" cssClass="" />
          <RatingIcon fill="#FEC400" height="25" width="26" cssClass="" />
          <RatingIcon fill="#FEC400" height="25" width="26" cssClass="" />
          <RatingIcon fill="#FEC400" height="25" width="26" cssClass="" />
          <RatingIcon fill="white" height="25" width="26" cssClass="" />
        </div>
        <div className="text-xl">4.0 out of 5</div>
      </div>
    </div>
  );
};

export default CustomerReviews;
