import React from "react";

const PriceRangeFilter = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded shadow-md ">
      <div className="border-b-[1px] p-4 font-bold">Price Range</div>
      <div className="flex flex-col gap-4 px-4 py-2">
        <div>range change button </div>
        <div className="flex justify-between gap-8  ">
          <input
            type="text"
            value={0}
            className="border-[1px] w-1/2 text-center"
            onChange={(e: any) => {
              e.target.value;
            }}
          />
          <input
            type="text"
            value={10000}
            className="border-[1px] text-center w-1/2"
            onChange={(e: any) => {
              e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
