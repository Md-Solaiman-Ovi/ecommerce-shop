import React from "react";
import Option from "../common-component/Option";

interface Props {
  title: string;
  option: any;
}

const OptionSelector = ({ title, option }: Props) => {
  return (
    <div className="w-96 flex flex-col gap-2 p-4 bg-white rounded">
      <div className="border-b-[1px] text-xl py-2">{title}</div>
      <div className="flex gap-4  w-full ">
        {option.map((color: string, index: number) => {
          return <Option name={title} key={index} option={color} />;
        })}
      </div>
    </div>
  );
};

export default OptionSelector;
