import React from "react";

const AddReview = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[30px]">Add a review</div>
      <div>stars </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <div className="border-[1px] border-black rounded p-2 w-full h-[56px]">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-[rgba(250,250,250,1)] px-1 text-xs ">
              Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="Enter your name here"
              className="text-xs w-full h-full focus:outline-none bg-transparent"
            />
          </div>
          <div className="border-[1px] border-black rounded p-2 w-full h-[56px]">
            <span className="absolute -translate-y-[17px] translate-x-4 bg-[rgba(250,250,250,1)] px-1 text-xs ">
              Email <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-xs w-full h-full focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="border-[1px] border-black rounded p-2 h-[100px] ">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-[rgba(250,250,250,1)] px-1 text-xs ">
            Review <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            placeholder="Write your review here"
            className="text-xs  w-full h-full focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end w-full">
        <div className="px-36 py-2 text-lg  rounded bg-[rgba(24,41,59,1)] text-white cursor-pointer">
          Submit
        </div>
      </div>
    </div>
  );
};

export default AddReview;
