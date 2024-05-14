import React from "react";
import RatingPercentage from "./RatingPercentage";
import CustomerReviews from "./CustomerReviews";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview";

const ProductReviews = () => {
  return (
    <div className=" flex flex-col gap-[100px] my-10 ">
      <div className="flex flex-col md:flex-row gap-[100px]">
        <CustomerReviews />
        <div className="w-full">
          <div className="w-full flex flex-col gap-4">
            <RatingPercentage star="5 star" percentage="75%" cssClass="w-3/4" />
            <RatingPercentage star="4 star" percentage="16%" cssClass="w-1/4" />
            <RatingPercentage star="3 star" percentage="5%" cssClass="w-10" />
            <RatingPercentage star="2 star" percentage="1%" cssClass="w-2" />
            <RatingPercentage star="1 star" percentage="3%" cssClass="w-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="flex justify-center md:justify-start w-full">
          <div className="px-10 py-2 text-sm font-bold rounded border-[1px] border-[#18293B] cursor-pointer hover:bg-[rgba(24,41,59,1)] hover:text-white  hover:duration-300 hover:ease-in-out hover:delay-150  ">
            Load More
          </div>
        </div>
      </div>
      <AddReview />
    </div>
  );
};

export default ProductReviews;
