import Container from "@/app/components/site/Container";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const PageLayout: React.FC<Props> = ({ children, className, title }: Props) => {
  return (
    <div
      className={`${className} flex flex-col gap-4 mb-10 max-w-screen-xl mx-auto px-14`}
    >
      <div className="text-3xl font-semibold text-center py-4 border-b text-[rgba(24,41,59,1)] relative">
        {title}
        <span className="absolute inset-x-96 translate-y-[2px] bottom-0 h-[2px] bg-black "></span>
      </div>

      <div className="">{children}</div>
    </div>
  );
};

export default PageLayout;
