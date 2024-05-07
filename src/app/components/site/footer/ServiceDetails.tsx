import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill, RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import ServiceIcon from "./ServiceIcon";
import { title } from "process";

const ServiceDetails = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 items-center text-white font-normal text-sm container  ">
      <ServiceIcon
        icon={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.4976 30.198C33.174 30.198 32.9116 30.4603 32.9116 30.7839C32.9116 31.1075 33.174 31.3699 33.4976 31.3699H33.5038C33.8274 31.3699 34.0866 31.1075 34.0866 30.7839C34.0866 30.4603 33.8213 30.198 33.4976 30.198Z"
              fill="white"
            />
            <path
              d="M14.0837 30.198C13.7602 30.198 13.4978 30.4603 13.4978 30.7839C13.4978 31.1075 13.7602 31.3699 14.0837 31.3699H14.09C14.4136 31.3699 14.6728 31.1075 14.6728 30.7839C14.6728 30.4603 14.4074 30.198 14.0837 30.198Z"
              fill="white"
            />
            <path
              d="M39.3899 23.68L37.516 22.3403L37.489 16.674C37.4848 15.8014 36.8342 15.1679 35.942 15.1679H31.3935C31.4468 14.859 31.3785 14.5553 31.1983 14.3205C31.0008 14.0631 30.69 13.9155 30.3455 13.9155H26.2623C25.9387 13.9155 25.6763 14.1778 25.6763 14.5014C25.6763 14.825 25.9387 15.0873 26.2623 15.0873L30.2081 15.0874L26.1591 30.198H17.2607C17.2728 29.6111 17.1061 29.0611 16.7716 28.6253C16.3103 28.0241 15.5941 27.693 14.755 27.693C13.2469 27.693 11.7499 28.7629 11.1602 30.198L8.58482 30.1979L9.72965 25.9254C9.8134 25.6128 9.62793 25.2916 9.31528 25.2077C9.00325 25.1243 8.68146 25.3095 8.59763 25.6221L7.42304 30.0061C7.33023 30.3523 7.3928 30.7018 7.59468 30.9649C7.79217 31.2222 8.10303 31.3699 8.44748 31.3699H10.9068C10.8948 31.9567 11.0614 32.5066 11.3959 32.9425C11.8572 33.5437 12.5734 33.8748 13.4125 33.8748C14.9206 33.8748 16.4176 32.8049 17.0073 31.3699H30.3207C30.3086 31.9567 30.4753 32.5066 30.8097 32.9425C31.271 33.5437 31.9872 33.8748 32.8263 33.8748C34.3344 33.8748 35.8315 32.8049 36.4211 31.3699H36.6289C37.5833 31.3699 38.5295 30.6289 38.783 29.683L39.9354 25.3822C40.1173 24.7028 39.9084 24.0506 39.3899 23.68ZM16.0228 30.6323C15.722 31.7547 14.5267 32.703 13.4125 32.703C12.9461 32.703 12.5601 32.5347 12.3256 32.2291C12.0734 31.9006 12.0092 31.4412 12.1447 30.9356C12.4454 29.8131 13.6408 28.8648 14.755 28.8648C15.2214 28.8648 15.6074 29.0331 15.8419 29.3386C16.094 29.6673 16.1583 30.1267 16.0228 30.6323ZM36.3428 22.0567H32.5477C32.4487 22.0567 32.3143 22.0355 32.2367 21.9344C32.1684 21.8454 32.1538 21.7022 32.1969 21.5418L32.7002 19.663C32.817 19.2272 33.2947 18.8449 33.7223 18.8449H36.3274L36.3428 22.0567ZM35.4366 30.6323C35.1358 31.7547 33.9405 32.703 32.8263 32.703C32.3599 32.703 31.9739 32.5347 31.7394 32.2291C31.4872 31.9006 31.423 31.4412 31.5585 30.9356C31.8592 29.8131 33.0546 28.8648 34.1688 28.8648C34.6352 28.8648 35.0212 29.0331 35.2558 29.3386C35.5079 29.6673 35.5722 30.1267 35.4366 30.6323ZM37.651 29.3798C37.5383 29.8002 37.09 30.1698 36.6746 30.1956C36.6861 29.6096 36.5193 29.0606 36.1854 28.6254C35.724 28.0242 35.0079 27.693 34.1687 27.693C32.6606 27.693 31.1636 28.7629 30.5739 30.1981H27.3723L28.4008 26.3599H35.4661C35.7897 26.3599 36.0521 26.0976 36.0521 25.774C36.0521 25.4504 35.7897 25.1881 35.4661 25.1881H28.7147L31.0856 16.3399H35.9418C36.1122 16.3399 36.3157 16.3989 36.317 16.6797L36.3218 17.6731H33.7223C32.7678 17.6731 31.8216 18.414 31.5681 19.3598L31.0648 21.2386C30.9267 21.7537 31.015 22.2674 31.307 22.6479C31.5902 23.017 32.0424 23.2286 32.5477 23.2286H36.7436L38.7082 24.6333C38.8752 24.7527 38.8232 25.0046 38.8033 25.079L38.7741 25.1881H37.9712C37.6476 25.1881 37.3853 25.4504 37.3853 25.774C37.3853 26.0976 37.6476 26.3599 37.9712 26.3599H38.4601L37.651 29.3798Z"
              fill="white"
            />
            <path
              d="M14.9897 25.1074C20.1473 25.1074 24.3432 20.9115 24.3432 15.7539C24.3432 10.5963 20.1473 6.40039 14.9897 6.40039C9.83223 6.40039 5.63626 10.5964 5.63626 15.7539C5.63626 20.9114 9.83223 25.1074 14.9897 25.1074ZM14.9897 7.57225C19.5011 7.57225 23.1714 11.2425 23.1714 15.7539C23.1714 20.2652 19.5012 23.9355 14.9897 23.9355C10.4783 23.9355 6.80812 20.2652 6.80812 15.7539C6.80812 11.2425 10.4784 7.57225 14.9897 7.57225Z"
              fill="white"
            />
            <path
              d="M12.4848 18.8448C12.6347 18.8448 12.7847 18.7876 12.8991 18.6731L14.1723 17.3999C14.4187 17.5228 14.6962 17.5923 14.9897 17.5923C16.0035 17.5923 16.8282 16.7675 16.8282 15.7539C16.8282 15.4604 16.7586 15.1829 16.6357 14.9365L19.7878 11.7845C20.0166 11.5556 20.0166 11.1846 19.7878 10.9559C19.559 10.727 19.188 10.7271 18.9592 10.9559L15.8072 14.1079C15.5608 13.985 15.2833 13.9155 14.9897 13.9155C13.976 13.9155 13.1513 14.7403 13.1513 15.754C13.1513 16.0475 13.2209 16.325 13.3437 16.5714L12.0704 17.8446C11.8416 18.0735 11.8416 18.4445 12.0704 18.6732C12.1849 18.7876 12.3348 18.8448 12.4848 18.8448ZM14.9897 15.0873C15.3573 15.0873 15.6563 15.3864 15.6563 15.7539C15.6563 16.1214 15.3572 16.4204 14.9897 16.4204C14.6223 16.4204 14.3232 16.1214 14.3232 15.7539C14.3232 15.3864 14.6223 15.0873 14.9897 15.0873Z"
              fill="white"
            />
            <path
              d="M14.9898 10.7035C15.3133 10.7035 15.5757 10.4411 15.5757 10.1175V9.4913C15.5757 9.1677 15.3133 8.90536 14.9898 8.90536C14.6662 8.90536 14.4038 9.1677 14.4038 9.4913V10.1175C14.4038 10.4412 14.6662 10.7035 14.9898 10.7035Z"
              fill="white"
            />
            <path
              d="M14.9898 20.8042C14.6662 20.8042 14.4038 21.0665 14.4038 21.3901V22.0164C14.4038 22.34 14.6662 22.6023 14.9898 22.6023C15.3133 22.6023 15.5757 22.34 15.5757 22.0164V21.3901C15.5757 21.0665 15.3133 20.8042 14.9898 20.8042Z"
              fill="white"
            />
            <path
              d="M20.626 16.3398H21.2523C21.5759 16.3398 21.8382 16.0775 21.8382 15.7539C21.8382 15.4303 21.5759 15.1679 21.2523 15.1679H20.626C20.3024 15.1679 20.0401 15.4303 20.0401 15.7539C20.0401 16.0775 20.3024 16.3398 20.626 16.3398Z"
              fill="white"
            />
            <path
              d="M9.93944 15.7539C9.93944 15.4303 9.67709 15.1679 9.3535 15.1679H8.72725C8.40365 15.1679 8.14131 15.4303 8.14131 15.7539C8.14131 16.0775 8.40365 16.3398 8.72725 16.3398H9.3535C9.67709 16.3398 9.93944 16.0775 9.93944 15.7539Z"
              fill="white"
            />
            <path
              d="M6.84844 23.3092H0.585931C0.262341 23.3092 0 23.5715 0 23.8951C0 24.2187 0.262341 24.481 0.585931 24.481H6.84844C7.17203 24.481 7.43437 24.2187 7.43437 23.8951C7.43437 23.5715 7.17203 23.3092 6.84844 23.3092Z"
              fill="white"
            />
            <path
              d="M6.22224 25.8142H2.46467C2.14107 25.8142 1.87873 26.0766 1.87873 26.4002C1.87873 26.7238 2.14107 26.9861 2.46467 26.9861H6.22224C6.54584 26.9861 6.80818 26.7238 6.80818 26.4002C6.80818 26.0766 6.54584 25.8142 6.22224 25.8142Z"
              fill="white"
            />
            <path
              d="M5.59597 28.3192H4.34347C4.01988 28.3192 3.75753 28.5815 3.75753 28.9051C3.75753 29.2287 4.01988 29.4911 4.34347 29.4911H5.59597C5.91957 29.4911 6.18191 29.2287 6.18191 28.9051C6.18191 28.5815 5.91957 28.3192 5.59597 28.3192Z"
              fill="white"
            />
          </svg>
        }
        title="Fast Delivery"
      />
      <ServiceIcon
        icon={
          <svg
            width="39"
            height="39"
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.4459 28.0172C3.2159 27.5666 3.00308 27.1012 2.81277 26.6341C2.78981 26.5767 2.75575 26.5245 2.71253 26.4803C2.66932 26.4362 2.6178 26.4011 2.56096 26.3769C2.50411 26.3527 2.44305 26.34 2.38128 26.3396C2.31951 26.3391 2.25826 26.3508 2.20104 26.3741C2.14382 26.3973 2.09176 26.4317 2.04786 26.4751C2.00396 26.5186 1.96908 26.5703 1.94523 26.6273C1.92137 26.6842 1.90901 26.7454 1.90886 26.8071C1.9087 26.8689 1.92076 26.9301 1.94433 26.9872C2.14433 27.4794 2.36871 27.9691 2.6109 28.4434C2.63889 28.4983 2.6774 28.547 2.72424 28.587C2.77108 28.6269 2.82532 28.6573 2.88388 28.6762C2.94244 28.6952 3.00416 28.7025 3.06553 28.6976C3.12689 28.6927 3.1867 28.6758 3.24152 28.6478C3.29635 28.6198 3.34513 28.5813 3.38507 28.5345C3.42501 28.4876 3.45534 28.4334 3.47432 28.3748C3.49329 28.3163 3.50055 28.2545 3.49568 28.1932C3.4908 28.1318 3.47389 28.072 3.4459 28.0172Z"
              fill="white"
            />
            <path
              d="M2.29965 25.2019C2.14902 24.7184 2.0184 24.2234 1.90996 23.7306C1.88192 23.6106 1.80776 23.5065 1.70353 23.4408C1.5993 23.3751 1.47339 23.353 1.35303 23.3794C1.23267 23.4059 1.12756 23.4786 1.06043 23.5819C0.993298 23.6853 0.969554 23.8109 0.994334 23.9316C1.10808 24.4503 1.2459 24.9713 1.40402 25.4803C1.44095 25.5991 1.52354 25.6983 1.63363 25.7562C1.74372 25.8141 1.87229 25.8258 1.99105 25.7889C2.10982 25.752 2.20906 25.6694 2.26693 25.5593C2.3248 25.4492 2.33657 25.3206 2.29965 25.2019Z"
              fill="white"
            />
            <path
              d="M1.24308 22.7581C1.36632 22.7419 1.47806 22.6773 1.55371 22.5787C1.62937 22.4801 1.66275 22.3554 1.64652 22.2322C1.58027 21.7322 1.53465 21.2228 1.51027 20.7156C1.50813 20.6539 1.49366 20.5932 1.4677 20.5372C1.44174 20.4811 1.40483 20.4308 1.35914 20.3893C1.31344 20.3477 1.25989 20.3157 1.20164 20.2952C1.14339 20.2747 1.08161 20.266 1.01996 20.2697C0.958461 20.2726 0.898142 20.2876 0.842446 20.3139C0.786751 20.3401 0.73677 20.3771 0.695359 20.4226C0.653949 20.4682 0.621919 20.5215 0.6011 20.5794C0.58028 20.6373 0.571079 20.6988 0.574022 20.7603C0.599335 21.2937 0.64746 21.83 0.716835 22.3541C0.724882 22.4151 0.74488 22.474 0.775685 22.5273C0.806491 22.5806 0.847501 22.6273 0.896372 22.6648C0.945242 22.7023 1.00102 22.7297 1.06051 22.7457C1.12 22.7616 1.18204 22.7662 1.24308 22.7581Z"
              fill="white"
            />
            <path
              d="M9.43746 34.785C9.0184 34.5019 8.60621 34.1981 8.21215 33.8806C8.16417 33.842 8.10907 33.8133 8.04999 33.796C7.9909 33.7787 7.92899 33.7733 7.86779 33.7799C7.8066 33.7866 7.7473 33.8052 7.69331 33.8347C7.63931 33.8643 7.59166 33.9042 7.55308 33.9522C7.51451 34.0002 7.48576 34.0553 7.46848 34.1143C7.4512 34.1734 7.44572 34.2353 7.45237 34.2965C7.45901 34.3577 7.47765 34.417 7.50721 34.471C7.53677 34.525 7.57667 34.5727 7.62465 34.6112C8.03902 34.9444 8.47215 35.2647 8.9134 35.5619C9.01627 35.6315 9.14258 35.6575 9.26458 35.634C9.38657 35.6106 9.49427 35.5397 9.56402 35.4369C9.59862 35.3858 9.62279 35.3284 9.63516 35.268C9.64752 35.2075 9.64783 35.1452 9.63608 35.0847C9.62432 35.0241 9.60072 34.9665 9.56664 34.915C9.53255 34.8636 9.48866 34.8194 9.43746 34.785Z"
              fill="white"
            />
            <path
              d="M4.19402 29.3438C4.16217 29.2901 4.11995 29.2434 4.06982 29.2063C4.01969 29.1692 3.96266 29.1425 3.90207 29.1277C3.84149 29.113 3.77856 29.1104 3.71699 29.1203C3.65541 29.1301 3.59641 29.1522 3.54346 29.1851C3.4905 29.218 3.44465 29.2612 3.40859 29.3121C3.37253 29.3629 3.34698 29.4205 3.33344 29.4814C3.3199 29.5423 3.31865 29.6052 3.32975 29.6666C3.34085 29.7279 3.36408 29.7865 3.39808 29.8388C3.67933 30.2897 3.98183 30.7347 4.29996 31.1616C4.33675 31.2109 4.3829 31.2526 4.43579 31.2841C4.48867 31.3156 4.54725 31.3364 4.60817 31.3453C4.66909 31.3542 4.73117 31.351 4.79086 31.3359C4.85055 31.3208 4.90668 31.2941 4.95605 31.2573C5.00542 31.2206 5.04706 31.1744 5.07859 31.1215C5.11012 31.0686 5.13093 31.0101 5.13983 30.9491C5.14872 30.8882 5.14553 30.8261 5.13043 30.7664C5.11533 30.7068 5.08862 30.6506 5.05183 30.6013C4.74996 30.1938 4.4609 29.7709 4.19402 29.3438Z"
              fill="white"
            />
            <path
              d="M6.01152 31.7812C5.9291 31.6882 5.81308 31.6317 5.68898 31.6241C5.56488 31.6166 5.44288 31.6587 5.3498 31.7411C5.25673 31.8235 5.20021 31.9395 5.19268 32.0636C5.18515 32.1877 5.22722 32.3097 5.30965 32.4028C5.66308 32.8016 6.03715 33.1894 6.42121 33.5559C6.46535 33.6003 6.51793 33.6354 6.57585 33.6591C6.63378 33.6829 6.69586 33.6947 6.75845 33.6941C6.82104 33.6934 6.88286 33.6803 6.94028 33.6553C6.99769 33.6304 7.04953 33.5942 7.09273 33.5489C7.13593 33.5036 7.16963 33.4501 7.19183 33.3916C7.21403 33.3331 7.22428 33.2707 7.22198 33.2082C7.21969 33.1456 7.20489 33.0842 7.17845 33.0274C7.15202 32.9707 7.11449 32.9198 7.06808 32.8778C6.70277 32.5284 6.34746 32.1594 6.01152 31.7812Z"
              fill="white"
            />
            <path
              d="M19.495 0.90625C16.4569 0.909225 13.4639 1.64145 10.7675 3.04139C8.07121 4.44132 5.75033 6.46806 3.99996 8.95125C3.92835 9.0529 3.90006 9.17884 3.9213 9.30135C3.94255 9.42387 4.01159 9.53292 4.11324 9.60453C4.21489 9.67614 4.34083 9.70443 4.46334 9.68319C4.58586 9.66195 4.69491 9.5929 4.76652 9.49125C6.73216 6.69957 9.45124 4.52451 12.6064 3.21992C15.7616 1.91532 19.2228 1.535 22.586 2.12333C25.9492 2.71167 29.0757 4.2444 31.6006 6.54265C34.1255 8.84089 35.9447 11.8098 36.8459 15.103C37.7471 18.3962 37.6931 21.8778 36.6902 25.1414C35.6873 28.4051 33.7768 31.3162 31.1818 33.535C28.5868 35.7538 25.4143 37.1888 22.0344 37.6725C18.6546 38.1562 15.2069 37.6687 12.0937 36.2669C11.6343 36.0594 11.1768 35.8294 10.7343 35.5819C10.6806 35.5513 10.6213 35.5317 10.5599 35.5242C10.4985 35.5167 10.4363 35.5213 10.3767 35.538C10.3171 35.5546 10.2614 35.5829 10.2129 35.6211C10.1643 35.6594 10.1237 35.7069 10.0936 35.7608C10.0634 35.8148 10.0442 35.8743 10.0371 35.9357C10.03 35.9971 10.0352 36.0594 10.0522 36.1188C10.0693 36.1782 10.098 36.2337 10.1366 36.282C10.1752 36.3303 10.2229 36.3705 10.2771 36.4003C10.7431 36.6603 11.2243 36.9031 11.7081 37.1213C14.2841 38.2823 17.0873 38.8524 19.9122 38.7897C22.737 38.7271 25.5122 38.0333 28.0342 36.7592C30.5562 35.4852 32.7613 33.663 34.4879 31.4263C36.2146 29.1897 37.419 26.5951 38.013 23.8326C38.6069 21.0702 38.5754 18.2098 37.9208 15.4611C37.2661 12.7124 36.0048 10.145 34.2294 7.94684C32.4539 5.74872 30.2092 3.97561 27.6597 2.75738C25.1103 1.53915 22.3206 0.906664 19.495 0.90625Z"
              fill="white"
            />
            <path
              d="M4.1409 10.8159C3.83147 10.8154 3.53231 10.7049 3.29678 10.5042C3.06125 10.3035 2.90467 10.0257 2.85496 9.72031L2.46496 7.29875C2.44865 7.1776 2.48032 7.05488 2.55321 6.95674C2.62609 6.8586 2.73443 6.79282 2.85512 6.77342C2.97581 6.75402 3.09931 6.78253 3.19928 6.85288C3.29925 6.92323 3.36779 7.02984 3.39027 7.15L3.78121 9.57125C3.79717 9.66677 3.85016 9.75214 3.92867 9.80883C4.00719 9.86552 4.10489 9.88896 4.20058 9.87406L6.62183 9.48406C6.74298 9.46776 6.86571 9.49942 6.96385 9.57231C7.06198 9.6452 7.12776 9.75353 7.14716 9.87422C7.16657 9.99492 7.13805 10.1184 7.06771 10.2184C6.99736 10.3184 6.89074 10.3869 6.77058 10.4094L4.34933 10.7994C4.28041 10.8105 4.21071 10.816 4.1409 10.8159Z"
              fill="white"
            />
            <path
              d="M31.6012 11.8419L20.2115 5.83969C19.9955 5.72547 19.7548 5.66576 19.5104 5.66576C19.2661 5.66576 19.0254 5.72547 18.8093 5.83969L7.41902 11.8419C7.1765 11.9692 6.97347 12.1605 6.83194 12.395C6.69042 12.6295 6.61581 12.8983 6.61621 13.1722V26.5237C6.61575 26.7977 6.69034 27.0666 6.83186 27.3011C6.97339 27.5357 7.17645 27.727 7.41902 27.8544L18.8093 33.8566C19.0255 33.9705 19.2661 34.03 19.5104 34.03C19.7547 34.03 19.9954 33.9705 20.2115 33.8566L31.6012 27.8544C31.8438 27.7271 32.047 27.5358 32.1885 27.3012C32.3301 27.0666 32.4048 26.7977 32.4043 26.5237V13.1722C32.4047 12.8982 32.33 12.6294 32.1885 12.3949C32.0469 12.1604 31.8438 11.9691 31.6012 11.8419ZM15.0668 15.6875C14.8182 15.8124 14.6092 16.0041 14.4635 16.2411C14.3178 16.4782 14.241 16.7511 14.2418 17.0294V22.3856C14.2429 22.3957 14.2404 22.4058 14.2346 22.4141C14.2289 22.4224 14.2204 22.4284 14.2106 22.4309C14.2018 22.4359 14.1915 22.4374 14.1817 22.4353C14.1718 22.4332 14.1631 22.4275 14.1571 22.4194L13.1328 21.35C13.0157 21.2289 12.8698 21.1396 12.7088 21.0904C12.5478 21.0412 12.3769 21.0338 12.2121 21.0687L11.5437 21.2128C11.5366 21.2143 11.5292 21.2142 11.5222 21.2125C11.5151 21.2108 11.5085 21.2075 11.5028 21.2029C11.4972 21.1983 11.4926 21.1926 11.4895 21.186C11.4863 21.1794 11.4847 21.1723 11.4846 21.165V15.16C11.4842 15.0552 11.5131 14.9524 11.5679 14.8631C11.6228 14.7738 11.7016 14.7016 11.7953 14.6547L23.5953 8.6825L26.1978 10.0541L15.0668 15.6875ZM19.2462 6.66875C19.3277 6.62586 19.4184 6.60345 19.5104 6.60345C19.6025 6.60345 19.6932 6.62586 19.7746 6.66875L22.5784 8.14625L11.3728 13.8181C11.2591 13.8761 11.1534 13.9483 11.0581 14.0331L8.10652 12.5391L19.2462 6.66875ZM19.0415 32.9187L7.85621 27.0247C7.76496 26.9769 7.68853 26.905 7.63521 26.8169C7.58188 26.7288 7.5537 26.6277 7.55371 26.5247V13.31L10.585 14.8438C10.5615 14.9476 10.5491 15.0536 10.5481 15.16V21.1641C10.5481 21.3112 10.581 21.4565 10.6445 21.5892C10.7079 21.722 10.8002 21.8388 10.9147 21.9313C11.0291 22.0238 11.1628 22.0895 11.3059 22.1236C11.449 22.1577 11.598 22.1593 11.7418 22.1284L12.4103 21.9847C12.4185 21.9825 12.4271 21.9826 12.4353 21.9851C12.4434 21.9876 12.4507 21.9923 12.4562 21.9988L13.4812 23.0681C13.6174 23.2103 13.793 23.3084 13.9854 23.3499C14.1779 23.3914 14.3783 23.3744 14.561 23.3011C14.7437 23.2277 14.9002 23.1013 15.0105 22.9382C15.1207 22.7751 15.1796 22.5828 15.1796 22.3859V17.1697L18.8318 19.0178C18.8995 19.0516 18.9697 19.08 19.0418 19.1028L19.0415 32.9187ZM19.255 18.1816L15.7353 16.4003L27.2146 10.59L30.9143 12.5394L19.7665 18.1819C19.6872 18.2218 19.5996 18.2426 19.5107 18.2426C19.4219 18.2426 19.3343 18.2215 19.255 18.1816ZM31.4668 26.5234C31.4668 26.6264 31.4386 26.7275 31.3852 26.8156C31.3319 26.9037 31.2555 26.9756 31.1643 27.0234L19.979 32.9194V19.1031C20.0515 19.0802 20.1222 19.0516 20.1903 19.0178L31.4668 13.3103V26.5234Z"
              fill="white"
            />
          </svg>
        }
        title="60 - Days Returns"
      />
      <ServiceIcon
        icon={
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.4085 7.90841L30.2657 5.05126C30.0951 4.98291 29.9048 4.98291 29.7343 5.05126L22.5914 7.90841C22.459 7.96147 22.3455 8.05297 22.2655 8.17111C22.1856 8.28924 22.1429 8.42862 22.1428 8.57126V15.9541C22.1465 17.3107 22.4995 18.6434 23.1679 19.8239C23.8362 21.0044 24.7973 21.9929 25.9585 22.6941L29.6328 24.8984C29.7438 24.9649 29.8706 25 30 25C30.1293 25 30.2562 24.9649 30.3671 24.8984L33.5714 22.9756V30.9756C33.571 31.2861 33.4475 31.5839 33.2279 31.8035C33.0083 32.0231 32.7105 32.1466 32.4 32.147H4.74282C4.43226 32.1466 4.13452 32.0231 3.91491 31.8035C3.69531 31.5839 3.57177 31.2861 3.57139 30.9756V14.9998H20C20.1894 14.9998 20.3711 14.9246 20.505 14.7906C20.639 14.6567 20.7143 14.475 20.7143 14.2855C20.7143 14.0961 20.639 13.9144 20.505 13.7805C20.3711 13.6465 20.1894 13.5713 20 13.5713H3.57139V11.8855C3.57177 11.575 3.69531 11.2772 3.91491 11.0576C4.13452 10.838 4.43226 10.7145 4.74282 10.7141H20C20.1894 10.7141 20.3711 10.6389 20.505 10.5049C20.639 10.371 20.7143 10.1893 20.7143 9.99983C20.7143 9.81039 20.639 9.62871 20.505 9.49476C20.3711 9.3608 20.1894 9.28555 20 9.28555H4.74282C4.05338 9.28593 3.39228 9.55998 2.90476 10.0475C2.41725 10.535 2.1432 11.1961 2.14282 11.8855V30.9713C2.1432 31.6607 2.41725 32.3218 2.90476 32.8093C3.39228 33.2968 4.05338 33.5709 4.74282 33.5713H32.4C33.0894 33.5709 33.7505 33.2968 34.238 32.8093C34.7255 32.3218 34.9996 31.6607 35 30.9713V21.9998C35.8898 21.2621 36.6068 20.3381 37.1005 19.293C37.5942 18.2478 37.8524 17.1071 37.8571 15.9513V8.57126C37.8571 8.42862 37.8143 8.28924 37.7344 8.17111C37.6544 8.05297 37.541 7.96147 37.4085 7.90841ZM36.4285 15.9541C36.4256 17.0641 36.1367 18.1546 35.5897 19.1205C35.0427 20.0864 34.2561 20.895 33.3057 21.4684L30 23.4527L26.6943 21.4684C25.7438 20.895 24.9572 20.0864 24.4102 19.1205C23.8632 18.1546 23.5743 17.0641 23.5714 15.9541V9.05412L30 6.48269L36.4285 9.05412V15.9541Z"
              fill="white"
            />
            <path
              d="M27.6485 13.9027C27.5822 13.8363 27.5035 13.7836 27.4168 13.7476C27.3301 13.7116 27.2372 13.6931 27.1433 13.693C27.0495 13.6929 26.9565 13.7114 26.8698 13.7472C26.7831 13.7831 26.7042 13.8357 26.6378 13.902C26.5714 13.9683 26.5187 14.047 26.4827 14.1337C26.4468 14.2204 26.4282 14.3133 26.4281 14.4072C26.4281 14.501 26.4465 14.594 26.4824 14.6807C26.5182 14.7675 26.5708 14.8463 26.6371 14.9127L28.5428 16.817C28.6768 16.9509 28.8584 17.0261 29.0478 17.0261C29.2372 17.0261 29.4189 16.9509 29.5528 16.817L33.3628 13.007C33.4968 12.8729 33.5719 12.691 33.5718 12.5015C33.5717 12.3119 33.4962 12.1302 33.3621 11.9963C33.228 11.8623 33.0462 11.7872 32.8566 11.7873C32.6671 11.7874 32.4853 11.8629 32.3514 11.997L29.0471 15.3027L27.6485 13.9027Z"
              fill="white"
            />
            <path
              d="M7.14282 27.857C6.95338 27.857 6.7717 27.9322 6.63775 28.0662C6.50379 28.2001 6.42854 28.3818 6.42854 28.5713C6.42854 28.7607 6.50379 28.9424 6.63775 29.0763C6.7717 29.2103 6.95338 29.2856 7.14282 29.2856H12.8571C13.0465 29.2856 13.2282 29.2103 13.3622 29.0763C13.4961 28.9424 13.5714 28.7607 13.5714 28.5713C13.5714 28.3818 13.4961 28.2001 13.3622 28.0662C13.2282 27.9322 13.0465 27.857 12.8571 27.857H7.14282Z"
              fill="white"
            />
          </svg>
        }
        title="Security Payment"
      />
      <ServiceIcon
        icon={
          <svg
            width="38"
            height="40"
            viewBox="0 0 38 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.4561 16.5346H33.3571V14.1089C33.3571 6.31678 27.0404 0 19.2482 0C11.456 0 5.13931 6.31678 5.13931 14.1089V16.5346H4.54529C2.36705 16.5346 0.683904 18.4653 0.683904 20.6931V26.8812C0.629041 29.0404 2.33502 30.8352 4.49421 30.8901C4.51127 30.8906 4.52823 30.8909 4.54529 30.8911H8.20863C8.72751 30.8667 9.12842 30.4262 9.10397 29.9073C9.10312 29.8886 9.1017 29.87 9.09971 29.8514V17.7227C9.09971 17.1287 8.75319 16.5346 8.20863 16.5346H7.11951V14.1088C7.11951 7.41036 12.5498 1.98011 19.2482 1.98011C25.9467 1.98011 31.3769 7.41036 31.3769 14.1088V16.5346H30.2878C29.7432 16.5346 29.3967 17.1286 29.3967 17.7227V29.8514C29.3415 30.3679 29.7154 30.8315 30.2319 30.8867C30.2505 30.8887 30.2691 30.8901 30.2878 30.891H31.4264L31.3274 31.0394C29.8419 33.0137 27.5109 34.17 25.0402 34.1582C24.4994 31.5061 21.9108 29.7945 19.2587 30.3355C16.9908 30.798 15.3556 32.7843 15.3373 35.0989C15.3644 37.8136 17.5729 40 20.2878 39.9998C21.6317 39.978 22.9127 39.4265 23.8521 38.4651C24.4859 37.8161 24.9012 36.9854 25.0402 36.0889C28.1342 36.1006 31.052 34.6509 32.9115 32.178L33.8521 30.7918C35.9808 30.6434 37.3174 29.3067 37.3174 27.376V21.1879C37.3175 19.0594 35.7334 16.5346 33.4561 16.5346ZM7.11951 28.9109H4.54529C3.47929 28.8849 2.63615 27.9998 2.66212 26.9338C2.66259 26.9163 2.66325 26.8987 2.6641 26.8811V20.693C2.6641 19.5544 3.45617 18.5148 4.54529 18.5148H7.11951V28.9109ZM22.4166 37.0792C21.8679 37.674 21.0971 38.0147 20.2879 38.0198C18.6772 37.9942 17.3702 36.7089 17.3176 35.099C17.3169 33.4858 18.6241 32.1776 20.2372 32.177C21.8503 32.1763 23.1585 33.4835 23.1592 35.0966C23.1592 35.0973 23.1592 35.0982 23.1592 35.099C23.2004 35.834 22.9309 36.5525 22.4166 37.0792ZM35.3373 27.3762C35.3373 28.7128 34.0502 28.9109 33.4561 28.9109H31.3769V18.5148H33.4561C34.5453 18.5148 35.3373 20.0495 35.3373 21.1881V27.3762Z"
              fill="white"
            />
          </svg>
        }
        title="Customer Service"
      />
      <ServiceIcon
        icon={
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.486 2.4438C32.1298 -2.83696 23.2245 1.04335 23.1174 8.33064C23.0756 11.2548 24.5172 13.952 26.9736 15.5435C27.486 15.8755 27.3297 15.7501 30.386 21.1489C30.4407 21.2454 30.5048 21.3311 30.5753 21.4074L26.1163 25.7031C24.4983 24.0966 21.8121 24.3945 20.5859 26.3275L14.6344 22.7853C14.6255 20.8239 13.0264 19.23 11.0626 19.23C7.94525 19.23 6.34125 22.9586 8.4436 25.2267L4.54956 31.1105C2.28058 30.4614 0 32.1725 0 34.5459C0 36.5148 1.60156 38.1173 3.57086 38.1173C7.00592 38.1173 8.45154 33.7146 5.69061 31.6735L9.45312 25.9893C11.3077 26.9332 13.6118 26.0781 14.3866 24.107L20.105 27.5106C19.6432 29.7216 21.3416 31.8084 23.6017 31.8084C26.2006 31.8084 27.9327 29.1024 26.8484 26.7495C32.3022 21.4953 31.9672 21.8261 32.0212 21.7517C32.3062 21.6491 32.562 21.4486 32.7313 21.1489C35.7861 15.7525 35.6311 15.8755 36.1453 15.5426C38.5593 13.9773 40 11.3275 40 8.45455C40 6.17793 39.1074 4.04293 37.486 2.4438ZM5.88074 34.5459C5.88074 35.8194 4.84436 36.8557 3.57086 36.8557C2.29736 36.8557 1.2619 35.8194 1.2619 34.5459C1.2619 33.272 2.29736 32.236 3.57086 32.236C4.84436 32.236 5.88074 33.272 5.88074 34.5459ZM9.17236 24.1265C8.10547 22.6138 9.18884 20.4919 11.0626 20.4919C12.3425 20.4919 13.3725 21.5353 13.3725 22.8018C13.3725 25.0415 10.4712 25.975 9.17236 24.1265ZM23.6017 30.5468C22.0755 30.5468 21.1816 29.1101 21.2933 28.2171C21.3071 26.1914 23.7576 25.1709 25.2072 26.5792C26.6867 28.0065 25.6818 30.5468 23.6017 30.5468ZM35.5017 14.5498C35.0949 14.8138 34.7559 15.1718 34.5215 15.5859C31.4825 20.9542 31.698 20.6497 31.5588 20.6497C31.4194 20.6497 31.6397 20.9628 28.5959 15.5859C28.3615 15.1718 28.0234 14.8138 27.6163 14.5504C25.5038 13.1814 24.2639 10.863 24.3002 8.34804C24.3915 2.01442 32.106 -1.19816 36.6556 3.28609C39.9612 6.54659 39.3967 12.0245 35.5017 14.5498Z"
              fill="#F1F3F4"
            />
            <path
              d="M36.2857 4.95693C34.3033 2.27077 30.6125 1.842 28.0701 3.71852C25.517 5.60268 24.8724 9.27944 26.8314 11.9342C28.9148 14.7573 32.8937 15.0918 35.4391 12.8567C35.701 12.6269 35.7269 12.2284 35.4971 11.9665C35.2673 11.7047 34.8688 11.6787 34.6066 11.9085C32.601 13.6685 29.4794 13.3975 27.8467 11.185C26.3092 9.10121 26.8146 6.21334 28.8193 4.73354C30.8228 3.25496 33.7186 3.60378 35.2704 5.70613C36.2717 7.06295 36.4185 8.7817 35.8105 10.2359C35.6763 10.5572 35.8279 10.9268 36.1493 11.0614C36.4706 11.1953 36.8405 11.044 36.9748 10.7223C37.7274 8.92208 37.5891 6.72298 36.2857 4.95693Z"
              fill="#F1F3F4"
            />
          </svg>
        }
        title="Order Tracking"
      />
    </div>
  );
};

export default ServiceDetails;
