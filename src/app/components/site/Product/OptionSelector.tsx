import React from "react";
import Option from "../common-component/Option";

interface Props {
  title: string;
  // options: {
  //   Colors: string;
  //   Storage: string;
  // };
}

const OptionSelector = ({ title }: Props) => {
  return (
    <div className="w-96 flex flex-col gap-2 p-4 bg-white rounded">
      <div className="border-b-[1px] text-xl py-2">{title}</div>
      <div className="flex gap-4  w-full ">
        <Option option="128GB" />
        <Option option="256GB" />
        <Option option="512GB" />
        <Option option="1TB" />
      </div>
    </div>
  );
};

export default OptionSelector;
