"use client"; // bắt buộc khi dùng useState
import MovieSelector from "@/components/MovieSelector";
import ShowtimeSelector from "@/components/ShowtimeSelector";
import React, { useState } from "react";

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div>
        <div className="shadow-md rounded mb-8">
          <div className="mt-0 mb-0 bg-white text-[rgba(0,0,0,0.87)] relative transition-[margin] duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-0 border-solid border-[rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-center relative box-border bg-transparent align-middle text-inherit min-h-[48px] px-4 transition-[min-height,background-color] duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <div className="flex flex-grow my-3">
                <h2 className="font-bold text-xl">
                  {"Chọn vị trí - Thành Phố Hồ Chí Minh"}
                </h2>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`bg-[rgb(3,78,162)] rounded-full w-6 h-6 cursor-pointer bg-none transition-transform duration-150 flex items-center justify-center ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="align-baseline inline"
                  width={10}
                  height={10}
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0.538289 5H7.46171C7.94067 5 8.18015 4.42148 7.84111 4.08244L4.38075 0.619382C4.17087 0.4095 3.82913 0.4095 3.61925 0.619382L0.158886 4.08244C-0.180154 4.42148 0.0593268 5 0.538289 5Z"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown content */}
            {isExpanded && (
              <div className="min-h-0 h-auto duration-[244ms] overflow-visible transition-[height] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="flex w-full">
                  <div className="w-full">
                    <div className="pt-2 px-4 pb-4">
                      <div className="flex flex-row gap-2 flex-wrap">
                        <button className="py-2 px-4 border rounded text-[14px] font-normal text-black-10 hover:bg-blue-10 transition-all duration-500 ease-in-out hover:text-white hover:bg-[rgb(3,78,162)]">
                          TP Hồ Chí Minh
                        </button>
                        <button className="py-2 px-4 border rounded text-[14px] font-normal text-black-10 hover:bg-blue-10 transition-all duration-500 ease-in-out hover:text-white hover:bg-[rgb(3,78,162)]">
                          Hà Nội
                        </button>
                        <button className="py-2 px-4 border rounded text-[14px] font-normal text-black-10 hover:bg-blue-10 transition-all duration-500 ease-in-out hover:text-white hover:bg-[rgb(3,78,162)]">
                          Đà Nẵng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mb-8 ">
          <MovieSelector />
        </div>


       <ShowtimeSelector />
        {/* <div className="mb-8 shadow-md rounded">
          <div className="mt-0 mb-0 bg-white text-[rgba(0,0,0,0.87)] relative transition-[margin] duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] border-0 border-solid border-[rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-center relative box-border bg-transparent align-middle text-inherit min-h-[48px] px-4 transition-[min-height,background-color] duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <div className="flex flex-grow my-3">
                <h2 className="font-bold text-xl">{"Chọn suất"}</h2>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`bg-[rgb(3,78,162)] rounded-full w-6 h-6 cursor-pointer bg-none transition-transform duration-150 flex items-center justify-center ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <svg
                  className="align-baseline inline"
                  width={10}
                  height={10}
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0.538289 5H7.46171C7.94067 5 8.18015 4.42148 7.84111 4.08244L4.38075 0.619382C4.17087 0.4095 3.82913 0.4095 3.61925 0.619382L0.158886 4.08244C-0.180154 4.42148 0.0593268 5 0.538289 5Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div> */}
     
      </div>
    </div>
  );
}
