import React from "react";
interface OrderCartSvgIconProps {
  pathname: string;
}
const OrderCartSvgIcon = ({ pathname }: OrderCartSvgIconProps) => {
  return (
    <div>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.3334 10.0417C7.98822 10.0417 7.7084 10.3215 7.7084 10.6667C7.7084 11.0118 7.98822 11.2917 8.3334 11.2917H13.3334C13.6786 11.2917 13.9584 11.0118 13.9584 10.6667C13.9584 10.3215 13.6786 10.0417 13.3334 10.0417H8.3334Z"
          fill={pathname == "/my-orders" ? "white" : "black"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.43974 0.515067C1.35602 0.180195 1.01669 -0.0234053 0.681815 0.0603127C0.346943 0.144031 0.143343 0.483365 0.227061 0.818237L1.10351 4.32405L1.91919 7.72738C2.26602 9.17453 2.53902 10.3136 2.86297 11.1985C3.19527 12.1062 3.60278 12.8109 4.25659 13.3513C4.31301 13.3979 4.3705 13.4433 4.429 13.4873C5.10688 13.9971 5.88714 14.2292 6.8473 14.3408C7.78333 14.4496 8.95466 14.4496 10.4428 14.4495H10.9373C12.2248 14.4496 13.2384 14.4496 14.0549 14.367C14.8912 14.2824 15.5794 14.1069 16.1986 13.7192C16.4924 13.5353 16.7653 13.32 17.0126 13.0772C17.534 12.5654 17.865 11.9371 18.1422 11.1435C18.4128 10.3687 18.649 9.38311 18.9491 8.13105L18.9665 8.05833C19.1475 7.30339 19.2966 6.68117 19.3543 6.1771C19.4141 5.65394 19.3897 5.1558 19.1285 4.70098C19.0168 4.50645 18.8772 4.32938 18.714 4.17542C18.3326 3.81545 17.8539 3.67562 17.3312 3.61184C16.8275 3.55039 16.1877 3.5504 15.4114 3.55042L2.19858 3.55042L1.43974 0.515067ZM3.12551 7.39744L2.50309 4.80042H15.3708C16.1979 4.80042 16.7609 4.80153 17.1798 4.85264C17.5883 4.9025 17.7559 4.98994 17.8561 5.08451C17.9302 5.15449 17.9937 5.23498 18.0445 5.32341C18.1131 5.4429 18.1591 5.62619 18.1123 6.03514C18.0644 6.45442 17.9343 7.00213 17.7415 7.80643C17.4317 9.09903 17.2095 10.0232 16.9621 10.7314C16.7189 11.4276 16.4696 11.8587 16.1369 12.1852C15.9541 12.3647 15.7524 12.5238 15.5353 12.6597C15.1402 12.9071 14.6629 13.0491 13.9291 13.1233C13.1828 13.1988 12.2323 13.1995 10.9031 13.1995H10.4825C8.94598 13.1995 7.84716 13.1986 6.99161 13.0991C6.15187 13.0015 5.61498 12.8152 5.18037 12.4883C5.13713 12.4558 5.09464 12.4223 5.05293 12.3878C4.63374 12.0413 4.32741 11.5627 4.03678 10.7688C3.74069 9.95999 3.48363 8.89166 3.12551 7.39744Z"
          fill={pathname == "/my-orders" ? "white" : "black"}
        />
        <path
          d="M8.72813 16.4561C8.72813 16.9406 8.3354 17.3333 7.85094 17.3333C7.36648 17.3333 6.97375 16.9406 6.97375 16.4561C6.97375 15.9717 7.36648 15.5789 7.85094 15.5789C8.3354 15.5789 8.72813 15.9717 8.72813 16.4561Z"
          fill={pathname == "/my-orders" ? "white" : "black"}
        />
        <path
          d="M13.9913 16.4561C13.9913 16.9406 13.5986 17.3333 13.1141 17.3333C12.6296 17.3333 12.2369 16.9406 12.2369 16.4561C12.2369 15.9717 12.6296 15.5789 13.1141 15.5789C13.5986 15.5789 13.9913 15.9717 13.9913 16.4561Z"
          fill={pathname == "/my-orders" ? "white" : "black"}
        />
      </svg>
    </div>
  );
};

export default OrderCartSvgIcon;
