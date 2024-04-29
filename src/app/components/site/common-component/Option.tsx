import Link from "next/link";
import React, { ReactElement } from "react";

interface OptionProps {
  option?: string;
}

const Option = ({ option }: OptionProps) => {
  return (
    <div className={`flex items-center gap-2`}>
      <input
        id="radio-2"
        type="radio"
        name="color"
        className="text-xs focus:outline-none rounded-full"
      />
      <label htmlFor="radio-1 text-xs cursor-pointer">{option}</label>
    </div>
  );
};

export default Option;
