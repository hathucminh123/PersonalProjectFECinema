"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

interface DateItem {
  label: string;
  date: string;
}

const DateSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const dates: DateItem[] = [
    { label: 'Hôm Nay', date: '08/05' },
    { label: 'Thứ Sáu', date: '09/05' },
    { label: 'Thứ Bảy', date: '10/05' },
    { label: 'Chủ Nhật', date: '11/05' },
    { label: 'Thứ Hai', date: '12/05' },
    { label: 'Thứ Hai', date: '12/05' },
    { label: 'Thứ Hai', date: '12/05' },
    { label: 'Thứ Hai', date: '12/05' }
  ];

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="">
      <Slider {...settings} className="flex items-center">
        {dates.map((item, idx) => (
          <div key={idx} className="px-2">
            <Link
              href=""
              onClick={() => setActiveIndex(idx)}
              className={`capitalize text-sm text-center py-2 rounded-[5px] items-center flex-wrap cursor-pointer w-[80px] h-[65px] flex [text-decoration:inherit] ${
                activeIndex === idx ? 'bg-[#034ea2] text-white' : 'bg-white text-[#333]'
              }`}
            >
              <span className="inline-block w-full">{item.label}</span>
              <span className="inline-block w-full">{item.date}</span>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      className="z-[500] h-[60px] w-[60px] rounded-full bg-transparent absolute text-[#333333] top-[5%] left-[-30px] p-0 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="text-[#333333] h-4"
        width={14}
        height={14}
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </button>
  );
};

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <button
      className="z-[500] h-[60px] w-[60px] rounded-full bg-transparent absolute text-[#333333] top-[5%] right-[-50px] p-0 cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="text-[#333333] h-4 rotate-180"
        width={14}
        height={14}
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
        />
      </svg>
    </button>
  );
};

export default DateSlider;
