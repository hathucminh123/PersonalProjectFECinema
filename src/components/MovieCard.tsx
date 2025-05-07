import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const MovieCard: React.FC = () => {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="relative w-full h-auto group/movie">
      {/* Video Overlay */}
      {showTrailer && (
        <div
          className="fixed inset-0 bg-black/70 z-99999 flex items-start justify-center pt-[10vh]"
          onClick={() => setShowTrailer(false)}
        >
          <div
            className="relative w-[640px] aspect-video bg-black rounded overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute top-2 right-2 text-white text-xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded-full hover:bg-opacity-80 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Movie Card Content */}
      <div className="h-auto bg-[#fff] border-[2px] border-solid border-[#fff] rounded-[10px] cursor-pointer overflow-hidden relative transition-all duration-[500ms] ease-[cubic-bezier(0.8,0.5,0.2,1.4)]">
        <div className="absolute bg-black/50 w-full h-full transition-all duration-300 ease-in-out z-[1] opacity-0 cursor-pointer block group-hover/movie:opacity-100">
          <div className="flex flex-col items-center justify-center gap-3 w-full h-full">
            <Link
              href=""
              className="text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]"
            >
              <Image
                src="https://www.galaxycine.vn/_next/static/media/Vector-1.319a0d2b.svg"
                alt=""
                width={20}
                height={20}
                className="mr-2 block"
              />
              Mua vé
            </Link>

            {/* Nút Trailer */}
            <button
              onClick={() => setShowTrailer(true)}
              className="text-white w-[120px] h-10 border border-white hover:bg-[#fb9440]/80 hover:border-transparent rounded text-sm px-4 py-2 text-center inline-flex items-center justify-center gap-2 transition-colors duration-200 dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440] cursor-pointer"
            >
              <svg
                className="overflow-visible box-content mr-[2.4rem]  h-[.1em] mb-[2em]  "
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  fill="currentColor"
                  d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                />
              </svg>
              Trailer
            </button>
          </div>
        </div>

        {/* Poster */}
        <Image
          src="https://cdn.galaxycine.vn/media/2025/4/28/tham-tu-kien-2_1745832748529.jpg"
          alt=""
          width={300}
          height={500}
          className="ease-in-out duration-500 blur-0 object-cover scale-100 max-w-full h-auto block align-middle"
        />

        {/* Đánh giá và nhãn */}
        <div className="before:content-[''] before:absolute before:bottom-[40px] before:-right-[5px] before:py-3 before:px-[2.8rem] before:bg-[rgba(0,0,0,0.4)] before:skew-x-[25deg]">
          <p className="right-[5px] bottom-[2.5rem] absolute m-0">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#facc15"
                viewBox="0 0 24 24"
                className="text-[20px] mr-[1.25rem] inline-block"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
            <span className="text-[18px] font-bold text-white">9.4</span>
          </p>
        </div>
        <div className="right-[6px] bottom-[6px] absolute">
          <span className="not-italic font-bold text-sm text-center rounded justify-center items-center w-[38px] h-7 inline-flex text-white bg-[#f58020]">
            T16
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="capitalize relative mb-0 text-left leading-[160%] text-[#333] font-bold text-[16px] mt-[10px] cursor-pointer">
        <h3 className="overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-2">
          Thám Tử Kiên: Kỳ Án Không Đầu
        </h3>
      </div>
    </div>
  );
};
