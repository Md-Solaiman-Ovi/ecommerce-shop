import React, { ReactElement } from "react";

interface Props {
  title?: string;
  description?: string;
  icon?: ReactElement;
}
const WhyChooseCard = ({ icon, title, description }: Props) => {
  return (
    <div className="bg-white p-4 flex flex-col gap-5 items-center">
      <div>{icon}</div>
      <div className="text-xl leading-[30px] font-bold">{title}</div>
      <div className="text-center leading-[27px]">{description}</div>
    </div>
  );
};

export default WhyChooseCard;
