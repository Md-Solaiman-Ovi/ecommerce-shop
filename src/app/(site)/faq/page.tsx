/* eslint-disable react/no-unescaped-entities */
"use client";

import CategoryTitle from "@/app/components/site/CategoryTitle";
import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const FQA = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const controlState = (selectedState: number) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
    setIsOpen6(false);
    setIsOpen7(false);

    if (selectedState == 1) {
      setIsOpen1(!isOpen1);
    } else if (selectedState == 2) {
      setIsOpen2(!isOpen2);
    } else if (selectedState == 3) {
      setIsOpen3(!isOpen3);
    } else if (selectedState == 4) {
      setIsOpen4(!isOpen4);
    } else if (selectedState == 5) {
      setIsOpen5(!isOpen5);
    } else if (selectedState == 6) {
      setIsOpen6(!isOpen6);
    } else if (selectedState == 7) {
      setIsOpen7(!isOpen7);
    }
  };

  function selectedState(arg0: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="py-10  ">
      <CategoryTitle title="Frequently Asked Questions (FAQ)" />
      <div className=" flex flex-col pb-10">
        <div className="leading-[30px] font-normal py-10 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet cursus
          nunc sed habitant diam pellentesque sed non eget. Vel sapien,
          phasellus non quam maecenas tellus. Egestas mauris, vitae, mattis sed.
          Mattis aliquet venenatis lectus a, eu leo sit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Amet cursus nunc sed habitant diam
          pellentesque sed non eget. Vel sapien, phasellus non quam maecenas
          tellus. Egestas mauris, vitae, mattis sed. Mattis aliquet venenatis
          lectus a, eu leo sit.
        </div>
        <div className="flex flex-col  gap-4">
          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center8 py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Can I upload my Cv without making an account?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen1
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(1)}
              />
            </div>
            {isOpen1 && (
              <div
                className={`leading-[30px] font-normal  py-4 transition-transform   transition-delay-600   `}
                // ${
                //   isOpen1 ? "transition duration-300 " : ""
                // }
                // `}
              >
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Can I upload my updated CV at any time?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen2
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(2)}
              />
            </div>
            {isOpen2 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4 border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center py-4 border-b-[1px] ">
              <div className=" font-normal text-black">
                What are the benefits of uploading a CV on this website?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen3
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(3)}
              />
            </div>
            {isOpen3 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4 border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center  py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Can I see my ranking in my account?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen4
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(4)}
              />
            </div>
            {isOpen4 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4 border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Can I see the companies whose requirements match with mine
                though I don't need that job?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen5
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(5)}
              />
            </div>
            {isOpen5 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4 border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Can I find other people's CVs from this website?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen6
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(6)}
              />
            </div>
            {isOpen6 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4 border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>

          <div className="question border-1 border-solid border-slate-300 rounded">
            <div className="flex justify-between items-center  py-4 border-b-[1px]">
              <div className=" font-normal text-black">
                Will I get notification in my account when my CV will be
                shortlisted?
              </div>
              <RiArrowDropDownLine
                className={`w-7 h-7 cursor-pointer ${
                  isOpen7
                    ? "rotate-180 transition duration-300"
                    : " transition duration-300"
                }`}
                onClick={() => controlState(7)}
              />
            </div>
            {isOpen7 && (
              <div className=" leading-[30px] text-textSub font-normal  py-4  border-t-1 border-solid border-slate-300">
                Lorem ipsum dolor sit amet consectetur. Tincidunt id aliquet
                accumsan rhoncus tincidunt. Massa elit viverra donec scelerisque
                volutpat vitae vestibulum. Elementum tincidunt a et turpis amet
                turpis urna facilisi odio. Habitasse sed phasellus facilisis
                posuere dui turpis ut vitae purus. Lorem ipsum dolor sit amet
                consectetur. Tincidunt id aliquet accumsan rhoncus tincidunt.
                Massa elit viverra donec scelerisque volutpat vitae vestibulum
                elementum tincidunt a et turpis amet turpis urna facilisi odio.
                Habitasse sed phasellus facilisis posuere dui turpis ut vitae
                purus. Lorem ipsum dolor sit amet consectetur. Tincidunt id
                aliquet accumsan rhoncus tincidunt. Massa elit viverra donec
                scelerisque volutpat vitae vestibulum. Elementum tincidunt a et
                turpis amet turpis urna facilisi odio. Habitasse sed phasellus
                facilisis posuere dui turpis ut vitae purus. Lorem ipsum dolor
                sit amet consectetur.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;
