"use client";

import { useState } from "react";
// import { HeaderNavigation } from "@/components/HeaderNavigation";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MovieCard } from "@/components/MovieCard";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [selectedCinema, setSelectedCinema] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<
    null | "movie" | "cinema" | "date" | "time"
  >(null);

  const movies = ["Thám tử lừng danh", "Avengers", "Oppenheimer"];
  const cinemas: { [key: string]: string[] } = {
    "Thám tử lừng danh": ["CGV Nguyễn Trãi", "Lotte Landmark"],
    Avengers: ["BHD Bitexco", "CGV Vincom"],
    Oppenheimer: ["Lotte Gò Vấp", "Galaxy Tân Bình"],
  };
  const dates = ["2025-05-05", "2025-05-06", "2025-05-07"];
  const times = ["10:00", "14:00", "19:30"];

  const canBuyTicket =
    selectedMovie && selectedCinema && selectedDate && selectedTime;

  return (
    <div className="w-full h-full">
      {/* <HeaderNavigation /> */}

      <main className="min-h-[100vh]">
        <div className="relative pt-6 pb-12">
          {/* Swiper Banner */}
          <div className="w-full h-auto overflow-hidden">
            <div className="block relative">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  el: ".swiper-pagination-custom",
                  clickable: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                slidesPerView={1}
                className="relative px-[50px] overflow-hidden"
              >
                {[
                  "https://cdn.galaxycine.vn/media/2025/4/18/2048_1744987015354.jpg",
                  "https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg",
                  "https://cdn.galaxycine.vn/media/2025/4/3/shopee-3_1743669392499.jpg",
                ].map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-[1360px] h-[450px] mx-auto overflow-hidden rounded-lg">
                      <Link href="#">
                        <Image
                          src={src}
                          alt={`Banner ${index + 1}`}
                          width={1360}
                          height={450}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-pagination-custom absolute bottom-[50px] p-[10px] w-full flex justify-center items-center z-[10000]"></div>

              <button className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 w-10 h-10 rounded-full bg-[#464444c4] text-white -translate-y-1/2 flex items-center justify-center cursor-pointer">
                &lt;
              </button>
              <button className="swiper-button-next-custom absolute top-1/2 right-4 z-10 w-10 h-10 rounded-full bg-[#464444c4] text-white -translate-y-1/2 flex items-center justify-center cursor-pointer">
                &gt;
              </button>
            </div>
          </div>

          {/* Quick Booking Form */}
          <div className="grid absolute z-[500] grid-cols-11 max-w-6xl h-14 w-full shadow-2xl bg-white rounded left-2/4 bottom-9 translate-y-1/2 -translate-x-2/4">
            {/* Step 1: Movie */}
            <div className="h-full relative col-span-3">
              <span className="number absolute bg-[#f58020] text-[10px] text-white font-bold px-1.5 py-0.5 rounded-full top-2/4 left-[3%] translate-x-[3%] -translate-y-[50%]">
                1
              </span>
              <div
                className="pt-[18px] pl-[40px] border-none relative flex w-full px-[5px] py-[2px] flex-row items-center cursor-pointer min-h-[36px] pointer-events-auto rounded-[4px] text-[.875rem] capitalize"
                onClick={() =>
                  setOpenDropdown(openDropdown === "movie" ? null : "movie")
                }
              >
                <div className="flex-1">
                  <span>{selectedMovie || "Chọn phim"}</span>
                </div>
                {openDropdown === "movie" && (
                  <div className="absolute bottom-[51px] left-[-1px] bg-white border max-h-[300px] overflow-auto z-[9] w-max rounded shadow">
                    {movies.map((movie) => (
                      <span
                        key={movie}
                        className="py-2 px-[0.925rem] block cursor-pointer hover:bg-[#f58020] hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedMovie(movie);
                          setSelectedCinema(null);
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setOpenDropdown(null);
                        }}
                      >
                        {movie}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Cinema */}
            <div className="h-full relative col-span-2">
              <span className="number absolute bg-[#f58020] text-[10px] text-white font-bold px-1.5 py-0.5 rounded-full top-2/4 left-[3%] translate-x-[3%] -translate-y-[50%]">
                2
              </span>
              <div
                className={`pt-[18px] pl-[40px] border-none relative flex w-full px-[5px] py-[2px] flex-row items-center  min-h-[36px] pointer-events-auto rounded-[4px] text-[.875rem] capitalize ${
                  !selectedMovie
                    ? "cursor-not-allowed pointer-events-none opacity-50"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (selectedMovie) {
                    setOpenDropdown(
                      openDropdown === "cinema" ? null : "cinema"
                    );
                  }
                }}
              >
                <div className="flex-1">
                  <span>{selectedCinema || "Chọn rạp"}</span>
                </div>
                {openDropdown === "cinema" && selectedMovie && (
                  <div className="absolute bottom-[51px] left-[-1px] bg-white border max-h-[300px] overflow-auto z-[9] w-max rounded shadow">
                    {cinemas[selectedMovie].map((cinema) => (
                      <span
                        key={cinema}
                        className="py-2 px-[0.925rem] block cursor-pointer hover:bg-[#f58020] hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCinema(cinema);
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setOpenDropdown(null);
                        }}
                      >
                        {cinema}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Step 3: Date */}
            <div className="h-full relative col-span-2">
              <span className="number absolute bg-[#f58020] text-[10px] text-white font-bold px-1.5 py-0.5 rounded-full top-2/4 left-[3%] translate-x-[3%] -translate-y-[50%]">
                3
              </span>
              <div
                className={`pt-[18px] pl-[40px] border-none relative flex w-full px-[5px] py-[2px] flex-row items-center  min-h-[36px] pointer-events-auto rounded-[4px] text-[.875rem] capitalize ${
                  !selectedCinema
                    ? "cursor-not-allowed pointer-events-none opacity-50"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (selectedCinema) {
                    setOpenDropdown(openDropdown === "date" ? null : "date");
                  }
                }}
              >
                <div className="flex-1">
                  <span>{selectedDate || "Chọn ngày"}</span>
                </div>
                {openDropdown === "date" && selectedCinema && (
                  <div className="absolute bottom-[51px] left-[-1px] bg-white border max-h-[300px] overflow-auto z-[9] w-max rounded shadow">
                    {dates.map((date) => (
                      <span
                        key={date}
                        className="py-2 px-[0.925rem] block cursor-pointer hover:bg-[#f58020] hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDate(date);
                          setSelectedTime(null);
                          setOpenDropdown(null);
                        }}
                      >
                        {date}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Step 4: Time */}
            <div className="h-full relative col-span-2">
              <span className="number absolute bg-[#f58020] text-[10px] text-white font-bold px-1.5 py-0.5 rounded-full top-2/4 left-[3%] translate-x-[3%] -translate-y-[50%]">
                4
              </span>
              <div
                className={`pt-[18px] pl-[40px] border-none relative flex w-full px-[5px] py-[2px] flex-row items-center  min-h-[36px] pointer-events-auto rounded-[4px] text-[.875rem] capitalize ${
                  !selectedDate
                    ? "cursor-not-allowed pointer-events-none opacity-50"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (selectedDate) {
                    setOpenDropdown(openDropdown === "time" ? null : "time");
                  }
                }}
              >
                <div className="flex-1">
                  <span>{selectedTime || "Chọn suất"}</span>
                </div>
                {openDropdown === "time" && selectedDate && (
                  <div className="absolute bottom-[51px] left-[-1px] bg-white border max-h-[300px] overflow-auto z-[9] w-max rounded shadow">
                    {times.map((time) => (
                      <span
                        key={time}
                        className="py-2 px-[0.925rem] block cursor-pointer hover:bg-[#f58020] hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTime(time);
                          setOpenDropdown(null);
                        }}
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Step 5: Button */}
            <div className="h-full relative col-span-2">
              <button
                className={`bg-[#f58020] rounded-sm w-full h-full text-[100%] font-inherit m-0 p-0 ${
                  canBuyTicket
                    ? "opacity-100 cursor-pointer"
                    : "pointer-events-none opacity-65 cursor-default"
                }`}
                disabled={!canBuyTicket}
                onClick={() => {
                  alert(
                    `Đặt vé cho:\nPhim: ${selectedMovie}\nRạp: ${selectedCinema}\nNgày: ${selectedDate}\nSuất: ${selectedTime}`
                  );
                }}
              >
                Mua vé nhanh
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] pl-[1rem] pr-[1rem] pt-[1.5rem] pb-[3rem] mt-0 mb-0  ml-auto mr-auto">
          <div className="justify-start gap-[1.25rem] items-center w-full flex mb-[2.5rem]">
            <div className="flex">
              <div className="block">
                <span className="border-l-4 border-solid border-[#034ea2] mr-2"></span>
                <h1 className="mr-10 text-xl font-bold not-italic uppercase inline">
                  Phim
                </h1>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <ul className="flex flex-wrap flex-row list-none mb-0 m-0 p-0">
                    <li className="-mb-px mr-3 md:mr-8 text-[#333333] last:mr-0 flex-auto text-center hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative">
                      <Link
                        href="#"
                        className="relative md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal hover:text-blue-10 transition-all duration-300 ease-in-out cursor-pointer text-blue-10 tab__active opacity-100 
    after:content-[''] after:absolute after:border-b-2 after:border-b-[#034ea2] 
    after:w-6 after:left-1/2 after:top-[110%] 
    after:transform after:-translate-x-1/2 after:-translate-y-1/2 
    after:transition-all after:duration-300 after:ease-in-out"
                      >
                        {"Phim đang chiếu"}
                      </Link>
                    </li>

                    <li className="-mb-px mr-3 md:mr-8 text-[#333333] last:mr-0 flex-auto text-center hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative">
                      <Link
                        href="#"
                        className="md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal hover:text-blue-10 transition-all duration-300  ease-in-out cursor-pointer relative text-black-10 opacity-50"
                      >
                        {"Sắp chiếu"}
                      </Link>
                    </li>
                    <li className="-mb-px mr-3 md:mr-8 text-[#333333] last:mr-0 flex-auto text-center hover:text-[#034EA2] transition-all duration-300 ease-in-out cursor-pointer relative">
                      <Link
                        href="#"
                        className="md:text-base screen360:text-sm text-[12px] font-bold not-italic block leading-normal hover:text-blue-10 transition-all duration-300  ease-in-out cursor-pointer relative text-black-10 opacity-50"
                      >
                        {"Phim IMAX"}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6 mb-10">
              <MovieCard />
              <MovieCard/>
              <MovieCard/>
              <MovieCard/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
