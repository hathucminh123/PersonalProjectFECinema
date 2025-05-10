// import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div className="bg-white px-6 py-4  rounded md:mb-8 mb-4 w-[100%]">
        <div className="grid md:grid-cols-10 grid-cols-2">
          <div className="md:col-span-2">
            <label
              htmlFor=""
              className=" text-sm font-semibold inline-block mt-2"
            >
              {"Đổi suất chiếu"}
            </label>
          </div>
          <div className="col-span-8 flex-row gap-4 flex-wrap items-center md:flex hidden">
            <button className="py-2 px-4 border rounded text-sm font-normal text-[rgb(255,255,255)] bg-[rgb(3,78,162)]    transition-all duration-500 ease-in-out hover:bg-[rgb(3,78,162)] active:bg-[rgb(3,78,162)] hover:text-white bg-blue-10 text-white">
              {"19:00"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-4 px-2 rounded md:mb-8 w-full">
        <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
          <ul className="gap-[.75rem] max-w-[56rem] w-full grid list-none m-0 p-0">
            <li className="flex items-center justify-between ">
              <div className="text-sm text-grey-40 font-semibold w-5 flex-shrink-0 text-center">
                {"I"}
              </div>
              <div className="flex flex-1  justify-center gap-1 md:gap-2">
                <button className="text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-grey-20 hover:bg-primary hover:border-primary">
                  <span className="inline-block text-center text-[12px] text-black w-full leading-5">
                    12
                  </span>
                </button>
                <button className="text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-grey-20 hover:bg-primary hover:border-primary">
                  <span className="inline-block text-center text-[12px] text-black w-full leading-5">
                    12
                  </span>
                </button>
                <button className="text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-grey-20 hover:bg-primary hover:border-primary">
                  <span className="inline-block text-center text-[12px] text-black w-full leading-5">
                    12
                  </span>
                </button>
              </div>
              <div className="text-sm text-grey-40 font-semibold w-5 flex-shrink-0 text-center">
                {"I"}
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-[2rem]">
          <p className="text-base text-center text-grey-50">Màn hình</p>
          <div className="border-2 border-[rgb(255,132,85)] mt-3"></div>
          <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
            <div className="flex gap-2">
              <div className="flex items-center">
                <span className="w-5 h-5 rounded bg-[rgb(208,208,208)] inline-block align-middle"></span>
                <span className="ml-2">Ghế đã bán</span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 rounded bg-[rgb(245,128,32)] inline-block align-middle"></span>
                <span className="ml-2">{"Ghế đang chọn"}</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap md:justify-end justify-center">
              <div className="flex items-center">
                <span className="w-5 h-5 rounded border border-[rgb(242,201,76)] inline-block align-middle"></span>
                <span className="ml-2">{"Ghế vip"}</span>
              </div>
              <div className="flex items-center">
                <span className="w-5 h-5 rounded border border-[rgb(208,208,208)] inline-block align-middle"></span>
                <span className="ml-2">{"Ghế đơn"}</span>
              </div>
              <div className="flex items-center">
                <span className="w-[44px] md:w-[48px]  h-5 rounded border border-[rgb(3,78,162)] inline-block align-middle"></span>
                <span className="ml-2">{"Ghế đôi"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
