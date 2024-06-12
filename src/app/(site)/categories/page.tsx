"use client";
import FilterComponent from "@/app/components/site/filter/FilterComponent";
import PriceRangeFilter from "@/app/components/site/filter/PriceRangeFilter";
import ProductCard from "@/app/components/site/Product/product-card/ProductCard";
import { AppDispatch, RootState } from "@/app/redux/store";
import Link from "next/link";
import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/app/redux/globalStateSlice";
const CategoryPage = () => {
  const filter = useSelector((state: RootState) => state.globalState.filter);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col gap-4 container">
        <div className="w-full bg-white md:rounded shadow-md p-4 flex flex-col gap-4  ">
          <div className="text-xs"> /Home /Categories /All Categories </div>
          <div>All Categories</div>
        </div>
        <div className="flex  gap-4 mb-10">
          <div className="hidden lg:block lg:w-1/5 ">
            <div className="flex flex-col gap-4">
              <PriceRangeFilter />
              <FilterComponent title="Availabilty" />
              <FilterComponent title="Series" />
              <FilterComponent title="Brand" />
              <FilterComponent title="Ram" />
              <FilterComponent title="Color" />
            </div>
          </div>
          <div className="w-full lg:w-4/5 flex flex-col gap-4  ">
            <div className="bg-white rounded shadow-md p-4 flex justify-between items-center">
              <div className="text-sm font-bold hidden lg:block">
                All Categories
              </div>
              <div
                className="text-sm font-bold flex gap-2 items-center lg:hidden cursor-pointer"
                onClick={() => {
                  dispatch(toggleFilter());
                }}
              >
                <IoFilterSharp className="w-5 h-5" /> Filter
              </div>
              <div className="flex gap-4 items-center ">
                <div className=" items-center gap-2 text-sm hidden lg:flex ">
                  <div className="font-bold">Show:</div>
                  <div className=" text-black right-2 flex items-center text-sm gap-1 cursor-pointer">
                    <select className="text-sm focus:outline-none text-center cursor-pointer rounded bg-slate-100 px-2 py-1">
                      <option>10</option>
                      <option>20</option>
                      <option>48</option>
                      <option>75</option>
                      <option>90</option>
                    </select>
                    {/* <MdArrowForwardIos className="w-3 h-3 rotate-90 cursor-pointer" /> */}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm ">
                  <div className="font-bold">Sort By:</div>
                  <div className=" text-black flex items-center text-sm gap-1 cursor-pointer mt-1">
                    <select className=" text-sm focus:outline-none cursor-pointer rounded bg-slate-100 px-2 py-1">
                      <option>DEFAULT</option>
                      <option>Price(Low &gt; High)</option>
                      <option>Price(High &gt; Low)</option>
                    </select>
                    {/* <MdArrowForwardIos className="w-3 h-3 rotate-90 cursor-pointer" /> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-4 w-full">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
      {filter && (
        <div
          className="w-screen h-screen  left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex justify-end items-center fixed z-50 "
          onClick={() => {
            dispatch(toggleFilter());
          }}
        >
          <div
            className="h-screen bg-white w-80 animate__animated animate__fadeInRight flex  flex-col gap-4 overflow-y-scroll"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <PriceRangeFilter />
            <FilterComponent title="Availabilty" />
            <FilterComponent title="Series" />
            <FilterComponent title="Brand" />
            <FilterComponent title="Ram" />
            <FilterComponent title="Color" />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
