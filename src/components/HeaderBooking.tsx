import React from "react";

export const HeaderBooking: React.FC = () => {
  return (
    <div className="md:mb-8 bg-white overflow-auto justify-center items-center flex-nowrap w-full flex relative">
      <ul className="flex  justify-center items-center text-grey-20 md:text-base text-[12px] font-semibold w-full flex-nowrap">
        <li className="pt-4 mb-4 pl-0 text-[#034ea2]">
          <button className="md:mx-3 mx-1 ml-0 ">
            {"Chọn phim / Rạp / Suất"}
          </button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
            <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block after:bg-[rgb(3,78,162)] after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full"></div>
          </div>
        </li>
        <li className="pt-4 mb-4 pl-0 text-blue-10">
          <button className="md:mx-3 mx-1 ml-0 text-[#034ea2] ">
            {"Chọn ghế"}
          </button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
            <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block after:bg-[rgb(3,78,162)] after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full"></div>
          </div>
        </li>
        <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
          <button className="md:mx-3 mx-1 ml-0  ">{"Chọn thức ăn"}</button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
            <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
          </div>
        </li>
        <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
          <button className="md:mx-3 mx-1 ml-0  ">{"Thanh toán"}</button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
            <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
          </div>
        </li>
        <li className="pt-4 mb-4 pl-0 text-[rgb(233,236,239)] ">
          <button className="md:mx-3 mx-1 ml-0  ">{"Xác nhận"}</button>
          <div className="relative mt-4 h-[2px] before:inline-block before:w-full before:absolute before:left-0 before:h-[2px] before:bg-grey-30 after:inline-block after:absolute after:left-0 after:h-[2px] after:bg-blue-10 after:w-full">
            <div className="before:h-[2px] before:w-full before:bg-[rgb(233,236,239)] before:left-[0] before:absolute before:inline-block "></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
