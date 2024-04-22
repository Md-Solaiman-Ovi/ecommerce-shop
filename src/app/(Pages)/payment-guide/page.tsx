import PageLayout from "@/app/(Custom)/pageLayout/PageLayout";
import React from "react";

const PaymentGuide = () => {
  return (
    <PageLayout title="Payment Guide" className="py-10  ">
      <div className="flex flex-col gap-5 p-4">
        <div className="text-xl font-bold border-b-[1px] py-4">
          Introduction
        </div>
        <div className="text-sm leading-[30px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo fermentum
          blandit at at neque nunc elementum. Accumsan nisi, enim, bibendum
          vulputate aliquet justo. Ornare sapien odio ultrices nibh. Facilisi mi
          mauris semper ultrices quis magna consequat. Purus ipsum, nam ut nec
          proin praesent commodo. Condimentum velit nec cras volutpat, in diam
          quis in. Nec blandit accumsan a aliquam a egestas feugiat eget. Purus
          pretium aliquet semper dolor risus nunc, lobortis. Sollicitudin in id
          et sed orci eu, nisl egestas.
        </div>
        <div className="text-sm leading-[30px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo fermentum
          blandit at at neque nunc elementum. Accumsan nisi, enim, bibendum
          vulputate aliquet justo. Ornare sapien odio ultrices nibh. Facilisi mi
          mauris semper ultrices quis magna consequat. Purus ipsum, nam ut nec
          proin praesent commodo. Condimentum velit nec cras volutpat, in diam
          quis in. Nec blandit accumsan a aliquam a egestas feugiat eget. Purus
          pretium aliquet semper dolor risus nunc, lobortis. Sollicitudin in id
          et sed orci eu, nisl egestas.
        </div>
      </div>
    </PageLayout>
  );
};

export default PaymentGuide;
