import React from "react";

const AddNewAddress = () => {
  return (
    <div className="flex flex-col gap-6 bg-white rounded-lg p-4 ">
      <div className="text-xl font-bold">Add Your Address</div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <label
            htmlFor="division"
            className="border-[1px] border-black rounded w-full group-hover:cursor-pointer group"
          >
            <span className="absolute -translate-y-[12px] translate-x-4 bg-white px-1 text-xs ">
              Division <span className="text-red-500 text-sm ">*</span>
            </span>
            <select
              id="division"
              className="text-sm focus:outline-none w-full p-2 rounded group-hover:cursor-pointer "
            >
              {" "}
              <option value="" disabled={true}>
                Select Category
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
          </label>
          <label
            htmlFor="district"
            className="border-[1px] border-black rounded w-full group-hover:cursor-pointer group"
          >
            <span className="absolute -translate-y-[12px] translate-x-4 bg-white px-1 text-xs ">
              District <span className="text-red-500 text-sm ">*</span>
            </span>
            <select
              id="district"
              className="text-sm focus:outline-none w-full p-2 rounded group-hover:cursor-pointer "
            >
              {" "}
              <option value="" disabled={true}>
                Select Category
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <label
            htmlFor="Sub-district"
            className="border-[1px] border-black rounded w-full group-hover:cursor-pointer group"
          >
            <span className="absolute -translate-y-[12px] translate-x-4 bg-white px-1 text-xs ">
              Sub-district (upazila){" "}
              <span className="text-red-500 text-sm ">*</span>
            </span>
            <select
              id="Sub-district"
              className="text-sm focus:outline-none w-full p-2 rounded group-hover:cursor-pointer "
            >
              {" "}
              <option value="" disabled={true}>
                Select Category
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Rajshahi</option>
            </select>
          </label>
          <div className="flex gap-8 w-full ">
            <label htmlFor="inside" className="w-full group">
              <div className="flex items-center gap-2 bg-white w-full p-4 rounded group">
                <input
                  id="inside"
                  type="radio"
                  name="location1"
                  placeholder="Select Sub-District"
                  className="text-xs  w-5 h-5 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)] "
                />

                <label
                  htmlFor="inside"
                  className="text-sm group-hover:cursor-pointer"
                >
                  Inside City
                </label>
              </div>
            </label>
            <label htmlFor="outside" className="w-full group">
              <div className="flex items-center gap-2 bg-white w-full p-4 rounded group">
                <input
                  id="outside"
                  type="radio"
                  name="location1"
                  placeholder="Select Sub-District"
                  className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)]"
                />

                <label
                  htmlFor="outside"
                  className="text-sm group-hover:cursor-pointer"
                >
                  Outside City
                </label>
              </div>
            </label>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="border-[1px] border-black rounded  w-full">
            <span className="absolute -translate-y-3 translate-x-4 bg-white px-1 text-xs ">
              Area <span className="text-red-500 text-sm">*</span>
            </span>
            <input
              type="text"
              placeholder="Enter Area"
              className="text-xs w-full h-12 rounded px-2  "
            />
          </div>
          <div className="border-[1px] border-black rounded  w-full">
            <span className="absolute -translate-y-3 translate-x-4 bg-white px-1 text-xs ">
              Street Address <span className="text-red-500 text-sm">*</span>
            </span>
            <input
              type="text"
              placeholder="Enter road no, block/sector"
              className="text-xs w-full h-12 rounded px-2  "
            />
          </div>
        </div>
        <div className="border-[1px] border-black rounded w-full">
          <span className="absolute -translate-y-3 translate-x-4 bg-white px-1 text-xs ">
            Delivery Instructions{" "}
            <span className="text-red-500  text-sm">*</span>
          </span>
          <input
            type="text"
            placeholder="Delivery instructions (Please give us more information about your address)"
            className="text-xs w-full h-20 rounded px-2   "
          />
        </div>
        {/* <div className="border-[1px] border-black rounded p-2">
          <span className="absolute -translate-y-[17px] translate-x-4 bg-white px-1 text-xs ">
            Delivery Instructions{" "}
            <span className="text-red-500 text-sm">*</span>
          </span>
          <input
            type="text"
            placeholder="Delivery instructions (Please give us more information about your address)"
            className="text-xs w-full h-full focus:outline-none pb-8"
          />
        </div> */}
      </div>

      <div className="flex flex-col ">
        <div className="text-lg font-bold ">Pick Up Your Parcel From</div>
        <div className="flex gap-4 items-center">
          <label htmlFor="home" className=" group">
            <div className="flex items-center gap-2 bg-white w-full py-4 rounded group">
              <input
                id="home"
                type="radio"
                name="location1"
                placeholder="Select Sub-District"
                className="text-xs  w-5 h-5 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)] "
              />

              <label
                htmlFor="home"
                className=" font-bold group-hover:cursor-pointer "
              >
                Home
              </label>
            </div>
          </label>
          <label htmlFor="office" className=" group">
            <div className="flex items-center gap-2 bg-white w-full py-4 rounded group">
              <input
                id="office"
                type="radio"
                name="location1"
                placeholder="Select Sub-District"
                className="text-xs focus:outline-none w-5 h-5 group-hover:cursor-pointer  accent-[rgba(254,196,0,1)]"
              />

              <label
                htmlFor="office"
                className="font-bold group-hover:cursor-pointer"
              >
                Office
              </label>
            </div>
          </label>
        </div>
      </div>
      <div className="text-lg bg-[rgba(24,41,59,1)] text-white w-full text-center py-[10px] rounded cursor-pointer">
        Save
      </div>
    </div>
  );
};

export default AddNewAddress;
