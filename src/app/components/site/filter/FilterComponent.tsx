import React from "react";

interface FilterComponentProps {
  title: string;
}

const FilterComponent = ({ title }: FilterComponentProps) => {
  return (
    <div className="flex flex-col bg-white rounded shadow-md ">
      <div className="border-b-[1px] p-4 font-bold">{title}</div>
      <div className="flex flex-col gap-2 px-4 py-2 text-start items-start">
        <label
          htmlFor={title}
          className="flex items-center gap-2 cursor-pointer "
        >
          <input
            id={title}
            type="checkbox"
            className="border-[1px] cursor-pointer"
          />
          <div className="text-sm">Option1</div>
        </label>
        <label
          htmlFor={title}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            id={title}
            type="checkbox"
            className="border-[1px] cursor-pointer"
          />
          <div className="text-sm">Option2</div>
        </label>
        <label
          htmlFor={title}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            id={title}
            type="checkbox"
            className="border-[1px] cursor-pointer"
          />
          <div className="text-sm">Option3</div>
        </label>
      </div>
    </div>
  );
};

export default FilterComponent;
