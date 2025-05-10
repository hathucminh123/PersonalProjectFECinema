"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ShowtimeSelector() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedTime, setSelectedTime] = useState<string | null>("21:30");
  const [activeDateIndex, setActiveDateIndex] = useState(0);

  const dates = [
    { label: "Hôm Nay", date: "08/05" },
    { label: "Thứ Sáu", date: "09/05" },
    { label: "Thứ Bảy", date: "10/05" },
    { label: "Chủ Nhật", date: "11/05" },
    { label: "Thứ Hai", date: "12/05" },
    { label: "Thứ Ba", date: "13/05" },
    { label: "Thứ Tư", date: "14/05" },
  ];

  const times = ["19:45", "20:30", "21:30", "22:15", "23:00"];

  const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="mb-8 shadow-md rounded">
      {/* Header */}
      <div className="bg-white text-[rgba(0,0,0,0.87)] relative border-0 border-solid border-[rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-center relative min-h-[48px] px-4">
          <div className="flex flex-grow my-3">
            <h2 className="font-bold text-xl">Chọn suất</h2>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`bg-[rgb(3,78,162)] rounded-full w-6 h-6 cursor-pointer transition-transform duration-150 flex items-center justify-center ${
              isExpanded ? "rotate-180" : ""
            }`}
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
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="p-4 bg-white">
          {/* Ngày + dropdown */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-full max-w-[80%] overflow-hidden">
              <Slider {...sliderSettings}>
                {dates.map((d, idx) => (
                  <div key={idx} className="px-1">
                    <button
                      onClick={() => setActiveDateIndex(idx)}
                      className={`w-[80px] h-[65px] text-sm flex flex-col justify-center items-center rounded-[5px] ${
                        activeDateIndex === idx
                          ? "bg-[#034ea2] text-white"
                          : "bg-white text-[#333]"
                      }`}
                    >
                      <span>{d.label}</span>
                      <span>{d.date}</span>
                    </button>
                  </div>
                ))}
              </Slider>
            </div>
            <select className="border px-3 py-1 rounded text-sm ml-4">
              <option>Tất cả các rạp</option>
              <option>Galaxy Đà Nẵng</option>
              <option>Galaxy Nguyễn Du</option>
            </select>
          </div>

          {/* Định dạng + suất */}
          <div>
            <p className="font-medium mb-2">Galaxy Đà Nẵng</p>
            <p className="text-sm text-gray-500 mb-2">2D Phụ Đề</p>
            <div className="flex flex-wrap gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`px-4 py-1 rounded border text-sm ${
                    selectedTime === time
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <hr className="mt-4" />
        </div>
      )}
    </div>
  );
}

// Arrows for Slider
function CustomPrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="z-[500] h-[60px] w-[60px] rounded-full bg-transparent absolute text-[#333333] top-[5%] left-[-30px] p-0 cursor-pointer"
      onClick={onClick}
    >
      <svg width={14} height={14} viewBox="0 0 320 512" fill="currentColor">
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    </button>
  );
}

function CustomNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      className="z-[500] h-[60px] w-[60px] rounded-full bg-transparent absolute text-[#333333] top-[5%] right-[-50px] p-0 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="rotate-180"
        width={14}
        height={14}
        viewBox="0 0 320 512"
        fill="currentColor"
      >
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    </button>
  );
}
