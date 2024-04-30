import React from "react";
import Image from "next/image";
const ReviewCard = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="rounded-full bg-white">
            <Image
              src={"/images/productImg1.png"}
              width={55}
              height={55}
              className="rounded-full"
              alt=""
            />
          </div>
          <div>
            <div className="text-xl">Jhon Due</div>
            <div className="text-xs">20 April 2022</div>
          </div>
        </div>
        <div>Rating icon</div>
      </div>
      <div className="text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at
        interdum non vitae turpis sapien vulputate euismod. Sed sit id ut
        lacinia amet consequat. Sed eget adipiscing nibh est odio vitae,
      </div>
    </div>
  );
};

export default ReviewCard;
