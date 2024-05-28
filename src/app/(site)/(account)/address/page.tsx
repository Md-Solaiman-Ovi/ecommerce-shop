import Container from "@/app/components/site/Container";
import IconButton from "@/app/components/site/navbar/IconButton";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import DeleteSvgIcon from "@/app/components/site/svg-icons/DeleteSvgIcon";
import EditSvgIcon from "@/app/components/site/svg-icons/EditSvgIcon";
import HomeSvgIcon from "@/app/components/site/svg-icons/HomeSvgIcon";
import OfficeSvgIcon from "@/app/components/site/svg-icons/OfficeSvgIcon";
import React from "react";
import { HiPlus } from "react-icons/hi";

const Address = () => {
  return (
    <div className=" bg-white p-10 flex flex-col gap-[30px] rounded">
      <div className="flex flex-col gap-4 ">
        <div className="text-xl font-bold">Manage Address</div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Egestas a commodo ut eget.
          Pretium nec pulvinar volutpat et justo pulvinar arcu laoreet.
        </div>
      </div>
      <div className="flex justify-between py-[18px]">
        <div className="flex gap-[10px] ">
          <div className="translate-y-1 ">
            <OfficeSvgIcon />
          </div>
          <div>
            <div className="text-xl font-bold">Home</div>
            <div>Muradnagar, Cumilla, Chittagong</div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <EditSvgIcon />
          </div>
          <div>
            <DeleteSvgIcon />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] py-5 ">
        <div className="flex gap-[10px] ">
          <div className="translate-y-1 ">
            <HomeSvgIcon />
          </div>
          <div>
            <div className="text-xl font-bold">Office</div>
            <div className="w-2/3">
              House # 1048 (1st Floor), Road # 09 (New), Avenue # 09, Mirpur
              DOHS, Dhaka-1216, Bangladesh.
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div>
            <EditSvgIcon />
          </div>
          <div>
            <DeleteSvgIcon />
          </div>
        </div>
      </div>
      <div className="flex  xl:justify-end items-center">
        <IconButton
          linkpath="/address/add-new-address"
          icon={<HiPlus />}
          title="Add New Address"
          cssClass="gap-5 justify-center bg-[rgba(24,41,59,1)] py-3 text-lg text-white rounded-lg w-full px-0 xl:w-1/3 md:px-1"
        />
      </div>
    </div>
  );
};

export default Address;
