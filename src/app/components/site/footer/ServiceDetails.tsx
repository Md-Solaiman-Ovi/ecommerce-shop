import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import ServiceIcon from "./ServiceIcon";
import { title } from "process";
import DeliverySvgIcon from "../svg-icons/DeliverySvgIcon";
import ReturnSvgIcon from "../svg-icons/ReturnSvgIcon";
import SecurityPaymentSvgIcon from "../svg-icons/SecurityPaymentSvgIcon";
import CustomerServiceSvgIcon from "../svg-icons/CustomerServiceSvgIcon";
import OrderTrackingSvgIcon from "../svg-icons/OrderTrackingSvgIcon";

const ServiceDetails = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 items-center text-white font-normal text-sm container  ">
      <ServiceIcon icon={<DeliverySvgIcon />} title="Fast Delivery" />
      <ServiceIcon icon={<ReturnSvgIcon />} title="60 - Days Returns" />
      <ServiceIcon icon={<SecurityPaymentSvgIcon />} title="Security Payment" />
      <ServiceIcon icon={<CustomerServiceSvgIcon />} title="Customer Service" />
      <ServiceIcon
        icon={<OrderTrackingSvgIcon width="40" height="40" />}
        title="Order Tracking"
      />
    </div>
  );
};

export default ServiceDetails;
