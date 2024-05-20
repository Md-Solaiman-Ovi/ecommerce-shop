import CategoryTitle from "@/app/components/site/CategoryTitle";
import OrderProcess from "@/app/components/site/order/OrderProcess";
import Container from "@/app/components/site/Container";
import React from "react";
import { GoDotFill } from "react-icons/go";

const HowToOrder = () => {
  return (
    <Container className="py-10  ">
      <CategoryTitle title="How To Order" />
      <div className="py-10">
        <section>
          <div className="">
            <OrderProcess
              title="Sign In First"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Choose Your Product"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Add To Cart Or Click Your Product"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Select Your Favourite Color/Variation/Etc"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Click Buy Now Button"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Input Your Address"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <OrderProcess
              title="Select Payment Method"
              cssClass="before:absolute before:left-[14px] before:top-3  before:h-full  before:bg-black before:outline-dashed before:outline-1"
              dotColor="text-black"
            />
            <ul>
              <li className="relative flex gap-4 pb-5 items-center">
                <div className="">
                  <GoDotFill className="w-7 h-7" />
                </div>
                <div className="text-xl">
                  And Click The Confirm Order Button
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default HowToOrder;
