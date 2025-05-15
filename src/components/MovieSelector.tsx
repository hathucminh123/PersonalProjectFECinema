"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMovie } from "@/Redux/slices/bookingSlice";

const movies = [
  {
    id: 1,
    title: "Thám Tử Kiên: Kỳ Án Không Dấu",
    poster:
      "https://cdn.galaxycine.vn/media/2025/5/5/the-young-girls-of-rochefort--2_1746437845040.jpg",
    age: "T13",
  },
  {
    id: 2,
    title: "Lật Mặt 8: Vòng Tay Nắng",
    poster:
      "https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg",
    age: "T16",
  },
  {
    id: 3,
    title: "Địa Đạo: Mặt Trời Trong Bóng Tối",
    poster:
      "https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg",
    age: "T18",
  },
];

export default function MovieSelector() {
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(3);
  const [isExpanded, setIsExpanded] = useState(true);
  const dispatch = useDispatch();

  const handleSelectMovie = (movie: typeof movies[0]) => {
    setSelectedMovieId(movie.id);
    dispatch(
      setMovie({
        id: movie.id.toString(),
        title: movie.title,
        age: movie.age,
        poster: movie.poster,
      })
    );
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      {/* Accordion Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between cursor-pointer border-b pb-2 mb-4"
      >
        <h2 className="font-semibold text-xl">
          Chọn phim –{" "}
          {movies.find((m) => m.id === selectedMovieId)?.title || "Chưa chọn"}
        </h2>
        <button
          className={`w-6 h-6 bg-[rgb(3,78,162)] text-white rounded-full transition-transform duration-300 flex items-center justify-center ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          <svg
            width={12}
            height={12}
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

      {/* Accordion Content */}
      {isExpanded && (
        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleSelectMovie(movie)}
              className={`relative rounded overflow-hidden cursor-pointer group transition-all duration-300 border-2 ${
                selectedMovieId === movie.id
                  ? "border-blue-500"
                  : "border-transparent"
              }`}
            >
              <Image
                src={movie.poster}
                alt={movie.title}
                width={300}
                height={400}
                className="w-full h-[240px] object-cover"
              />
              {selectedMovieId === movie.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm shadow-md">
                  ✓
                </div>
              )}
              <p className="mt-2 text-sm text-center font-medium line-clamp-2 px-1">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
