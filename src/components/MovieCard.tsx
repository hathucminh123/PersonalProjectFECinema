import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
  data: {
    _id: string;
    title: string;
    posterUrl: string;
    trailerUrl?: string;
    rating?: number;
    ageType?: string;
  };
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const convertToEmbedUrl = (url?: string): string => {
    if (!url) return "https://www.youtube.com/embed/YOUR_VIDEO_ID";
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/
    );
    const videoId = match?.[1];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}`
      : "https://www.youtube.com/embed/YOUR_VIDEO_ID";
  };

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
              src={`${convertToEmbedUrl(data.trailerUrl)}?autoplay=1`}
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
              href={`/movies/${data._id}`}
              className="text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center"
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

            <button
              onClick={() => setShowTrailer(true)}
              className="text-white w-[120px] h-10 border border-white hover:bg-[#fb9440]/80 hover:border-transparent rounded text-sm px-4 py-2 text-center inline-flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
            >
              ▶ Trailer
            </button>
          </div>
        </div>

        {/* Poster */}
        <Image
          src={data.posterUrl}
          alt={data.title}
          width={300}
          height={500}
          className="ease-in-out duration-500 object-cover max-w-full h-auto block"
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
            <span className="text-[18px] font-bold text-white">
              {data.rating ?? "9.4"}
            </span>
          </p>
        </div>
        <div className="right-[6px] bottom-[6px] absolute">
          <span className="font-bold text-sm text-center rounded w-[38px] h-7 inline-flex text-white bg-[#f58020] items-center justify-center">
            {data.ageType ?? "T13"}
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="capitalize relative mb-0 text-left leading-[160%] text-[#333] font-bold text-[16px] mt-[10px] cursor-pointer">
        <h3 className="overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-2">
          {data.title}
        </h3>
      </div>
    </div>
  );
};
