import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} max-w-screen-xl md:mx-auto mx-0 px-4 xl:px-14`}
    >
      {children}
    </div>
  );
};

export default Container;
