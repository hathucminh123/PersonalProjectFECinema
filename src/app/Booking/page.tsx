"use client";

import React, { useState } from "react";
import MovieSelector from "@/components/MovieSelector";
import ShowtimeSelector from "@/components/ShowtimeSelector";
import { useDispatch } from "react-redux";
import { setCinema } from "@/Redux/slices/bookingSlice"; // 🟦 import action từ Redux

export default function Page() {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleSelectCinema = (cinema: string) => {
    dispatch(setCinema(cinema));
  };

  return (
    <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 pb-32">
      <div>
        {/* Vị trí / Rạp */}
        <div className="shadow-md rounded mb-8">
          <div className="bg-white border-b px-4 py-3 flex justify-between items-center">
            <h2 className="font-bold text-xl">
              Chọn vị trí - Thành Phố Hồ Chí Minh
            </h2>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`bg-[rgb(3,78,162)] rounded-full w-6 h-6 text-white flex items-center justify-center transform ${
                isExpanded ? "rotate-180" : ""
              } transition-transform`}
            >
              <svg
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

          {/* Dropdown các rạp */}
          {isExpanded && (
            <div className="bg-white px-4 py-4">
              <div className="flex flex-wrap gap-2">
                {["TP Hồ Chí Minh", "Hà Nội", "Đà Nẵng"].map((city) => (
                  <button
                    key={city}
                    onClick={() => handleSelectCinema(city)}
                    className="py-2 px-4 border rounded text-sm font-normal hover:bg-[rgb(3,78,162)] hover:text-white transition-all"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chọn phim */}
        <div className="mb-8">
          <MovieSelector />
        </div>

        {/* Chọn suất */}
        <ShowtimeSelector />
      </div>
    </div>
  );
}
