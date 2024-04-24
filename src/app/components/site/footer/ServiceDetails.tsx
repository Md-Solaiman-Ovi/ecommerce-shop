import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import ServiceIcon from "./ServiceIcon";
import { title } from "process";

const ServiceDetails = () => {
  return (
    <div className="grid  grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 items-center text-white font-normal text-sm container  ">
      <ServiceIcon
        icon={<TbTruckDelivery className="w-10 h-10" />}
        title="Fast Delivery"
      />
      <ServiceIcon
        icon={<GiReturnArrow className="w-10 h-10" />}
        title="60 - Days Returns"
      />
      <ServiceIcon
        icon={<RiSecurePaymentLine className="w-10 h-10" />}
        title="Security Payment"
      />
      <ServiceIcon
        icon={<RiCustomerService2Fill className="w-10 h-10" />}
        title="Customer Service"
      />
      <ServiceIcon
        icon={<FaSearchLocation className="w-10 h-10" />}
        title="Order Tracking"
      />
    </div>
  );
};

export default ServiceDetails;
