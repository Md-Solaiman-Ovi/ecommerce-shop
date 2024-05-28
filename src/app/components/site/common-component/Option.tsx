import Link from "next/link";
import React, { ReactElement } from "react";

interface OptionProps {
  option?: string;
  name?: string;
}

const Option = ({ name, option }: OptionProps) => {
  return (
    <label htmlFor={`${option}`} className="text-sm group-hover:cursor-pointer">
      <div className={`flex items-center gap-2 group`}>
        <input
          id={`${option}`}
          type="radio"
          name={`${name}`}
          className="text-xs focus:outline-none rounded-full group-hover:cursor-pointer"
        />
        <div className="group-hover:cursor-pointer"> {option}</div>
      </div>
    </label>
  );
};

export default Option;
