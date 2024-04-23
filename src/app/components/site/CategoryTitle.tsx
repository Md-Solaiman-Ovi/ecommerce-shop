import React from "react";
interface Props {
  title?: string;
}

const CategoryTitle: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="text-3xl font-semibold text-center py-4 border-b text-[rgba(24,41,59,1)] relative">
      {title}
      <span className="absolute inset-x-96 translate-y-[2px] bottom-0 h-[2px] bg-black "></span>
    </div>
  );
};

export default CategoryTitle;
